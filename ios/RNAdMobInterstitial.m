#import "RNAdMobInterstitial.h"
#import "RNAdMobEvent.h"
#import "RNAdMobUtils.h"

static __strong NSMutableDictionary *requestIdMap;
static __strong NSMutableDictionary *interstitialMap;
static __strong NSMutableDictionary *presentAdResolveMap;
static __strong NSMutableDictionary *presentAdRejectMap;

@implementation RNAdMobInterstitial

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

- (id)init {
    self = [super init];
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        requestIdMap = [[NSMutableDictionary alloc] init];
        interstitialMap = [[NSMutableDictionary alloc] init];
        presentAdResolveMap = [[NSMutableDictionary alloc] init];
        presentAdRejectMap = [[NSMutableDictionary alloc] init];
    });
    return self;
}


- (void)dealloc {
    [self invalidate];
}

- (void)invalidate {
    [requestIdMap removeAllObjects];
    [interstitialMap removeAllObjects];
    [presentAdResolveMap removeAllObjects];
    [presentAdRejectMap removeAllObjects];
}

RCT_EXPORT_MODULE();

#pragma mark exported methods

RCT_EXPORT_METHOD(requestAd:(NSNumber *_Nonnull)requestId unitId:(NSString *_Nonnull)unitId resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    if (![self canPresentAd:requestId]) {
        GADRequest *request = [GADRequest request];
        [GADInterstitialAd loadWithAdUnitID:unitId
                                    request:request
                          completionHandler:^(GADInterstitialAd *ad, NSError *error) {
            if (error) {
                reject(@"E_AD_LOAD_FAILED", [error localizedDescription], nil);
                return;
            }
            ad.fullScreenContentDelegate = self;
            
            requestIdMap[ad.responseInfo.responseIdentifier] = requestId;
            interstitialMap[requestId] = ad;
            
            resolve(nil);
        }];
    } else {
        reject(@"E_AD_ALREADY_LOADED", @"Ad is already loaded.", nil);
    }
}

RCT_EXPORT_METHOD(presentAd:(NSNumber *_Nonnull)requestId resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    GADInterstitialAd *interstitial = interstitialMap[requestId];
    presentAdResolveMap[requestId] = resolve;
    presentAdRejectMap[requestId] = resolve;
    if ([self canPresentAd:requestId]) {
        [interstitial presentFromRootViewController:[UIApplication sharedApplication].delegate.window.rootViewController];
    }
    else {
        reject(@"E_AD_NOT_READY", @"Ad is not ready.", nil);
    }
}

- (BOOL) canPresentAd:(NSNumber *)requestId
{
    GADInterstitialAd *interstitial = interstitialMap[requestId];
    if (interstitial)
    {
        return [interstitial canPresentFromRootViewController:[UIApplication sharedApplication].delegate.window.rootViewController error:nil];
    }
    else {
        return NO;
    }
}

- (void)sendEvent:(NSString *)eventName requestId:(NSNumber *)requestId data:(NSDictionary *)data
{
    [RNAdMobEvent sendEvent:eventName type:@"Interstitial" requestId:requestId data:data];
}

#pragma mark GADFullScreenContentDelegate

- (void)adDidPresentFullScreenContent:(GADInterstitialAd *)ad
{
    NSNumber *requestId = requestIdMap[ad.responseInfo.responseIdentifier];
    
    [self sendEvent:kEventAdPresented requestId:requestId data:nil];
    
    RCTPromiseResolveBlock resolve = presentAdResolveMap[requestId];
    resolve(nil);
}

- (void)ad:(GADInterstitialAd *)ad didFailToPresentFullScreenContentWithError:(NSError *)error
{
    NSNumber *requestId = requestIdMap[ad.responseInfo.responseIdentifier];
    
    NSDictionary *jsError = RCTJSErrorFromCodeMessageAndNSError(@"E_AD_PRESENT_FAILED", error.localizedDescription, error);
    [self sendEvent:kEventAdFailedToPresent requestId:requestId data:jsError];
    
    RCTPromiseRejectBlock reject = presentAdRejectMap[requestId];
    reject(@"E_AD_PRESENT_FAILED", [error localizedDescription], nil);
}

- (void)adDidDismissFullScreenContent:(GADInterstitialAd *)ad
{
    NSNumber *requestId = requestIdMap[ad.responseInfo.responseIdentifier];
    
    [self sendEvent:kEventAdDismissed requestId:requestId data:nil];
}

@end
