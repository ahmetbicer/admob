#import "RNAdMobAdManager.h"
#import "RNAdMobUtils.h"

#import <AppTrackingTransparency/AppTrackingTransparency.h>
#if __has_include("<FBAudienceNetwork/FBAdSettings.h>")
#import <FBAudienceNetwork/FBAdSettings.h>
#endif

@import GoogleMobileAds;

@implementation RNAdMobAdManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initialize:(RCTPromiseResolveBlock) resolve rejecter:(RCTPromiseRejectBlock) reject)
{
#if __has_include("<FBAudienceNetwork/FBAdSettings.h>")
    if (@available(iOS 14, *)) {
        if ([ATTrackingManager trackingAuthorizationStatus] == ATTrackingManagerAuthorizationStatusAuthorized) {
            [FBAdSettings setAdvertiserTrackingEnabled:trackingAuthorizationStatus];
        }
    }
#endif

    GADMobileAds *ads = [GADMobileAds sharedInstance];
    [ads startWithCompletionHandler:^(GADInitializationStatus *status) {
        NSDictionary *adapterStatuses = [status adapterStatusesByClassName];
        NSMutableArray *adapters = [NSMutableArray array];
        for (NSString *adapter in adapterStatuses) {
            GADAdapterStatus *adapterStatus = adapterStatuses[adapter];
            NSDictionary *dict = @{
                @"name":adapter,
                @"state":@([@(adapterStatus.state) boolValue]),
                @"description":adapterStatus.description
            };
            [adapters addObject:dict];
        }
        resolve(adapters);
    }];
}

RCT_EXPORT_METHOD(setRequestConfiguration:(NSDictionary *)config)
{
    if ([[config allKeys] containsObject:@"maxAdContentRating"]) {
        NSString *rating = [config valueForKey:@"maxAdContentRating"];
        if ([rating isEqualToString:@"G"]) {
            [[[GADMobileAds sharedInstance] requestConfiguration] setMaxAdContentRating:GADMaxAdContentRatingGeneral];
        } else  if ([rating isEqualToString:@"PG"]) {
            [[[GADMobileAds sharedInstance] requestConfiguration] setMaxAdContentRating:GADMaxAdContentRatingParentalGuidance];
        } else  if ([rating isEqualToString:@"MA"]) {
            [[[GADMobileAds sharedInstance] requestConfiguration] setMaxAdContentRating:GADMaxAdContentRatingMatureAudience];
        } else  if ([rating isEqualToString:@"T"]) {
            [[[GADMobileAds sharedInstance] requestConfiguration] setMaxAdContentRating:GADMaxAdContentRatingTeen];
        } else if ([rating isEqualToString:@""]) {
            [[[GADMobileAds sharedInstance] requestConfiguration] setMaxAdContentRating:NULL];
        }
    };
    
    if ([[config allKeys] containsObject:@"tagForChildDirectedTreatment"]) {
        NSNumber *tag = [config valueForKey:@"tagForChildDirectedTreatment"];
        [[[GADMobileAds sharedInstance] requestConfiguration] tagForChildDirectedTreatment:tag.boolValue];
    };
    
    if ([[config allKeys] containsObject:@"tagForUnderAgeConsent"]) {
        NSNumber *tagC = [config valueForKey:@"tagForUnderAgeConsent"];
        [[[GADMobileAds sharedInstance] requestConfiguration] tagForUnderAgeOfConsent:tagC.boolValue];
    };
    
    if ([[config allKeys] containsObject:@"testDeviceIds"]) {
        NSArray *testDevices = RNAdMobProcessTestDevices([config valueForKey:@"testDeviceIds"],kGADSimulatorID);
        [[[GADMobileAds sharedInstance] requestConfiguration] setTestDeviceIdentifiers:testDevices];
    };
}

RCT_EXPORT_METHOD(isTestDevice:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    resolve(@TRUE);
}

@end
