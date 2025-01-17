---
id: InterstitialAd
title: InterstitialAd
sidebar_label: InterstitialAd
---

Creates Interstitial Ad and register event listeners to various events.

:::tip

If you are going to use Interstitial Ad inside _functional component_, consider using [`useInterstitialAd`](useInterstitialAd).

:::

## Useage Example

TODO

## Methods

:::info

Methods listed below except [`createAd()`](#createad) must be called from instance created by [`createAd()`](#createad) static method.

:::

### createAd()

```js
static createAd(unitId: string): InterstitialAd
```

Create an ad instance for an [unitId](https://support.google.com/admob/answer/7356431).

### requestAd()

```js
requestAd(): Promise<void>
```

Request new Interstitial Ad. Can not call this function if the ad is loaded but not presented and dismissed. Returns `Promise` that waits for ad load. When error is occured while loading ad, the Promise will reject with `Error` object.

### presentAd()

```js
presentAd(): Promise<void>
```

Present loaded Interstitial Ad. Ad must be loaded before calling this function. Returns `Promise` that waits for ad present. When error is occured while presenting ad, the Promise will reject with `Error` object.

### addEventListener()

```js
addEventListener(event: string, handler: (event?: any) => any);
```

Add an event handler. Supported events:

| Event Name        | Description                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| adPresented       | Fires when the ad is presented to user.                                                               |
| adFailedToPresent | Fires when an error occured while presenting ad. The argument to the event handler is `Error` object. |
| adDismissed       | Fires when the ad is dismissed.                                                                       |

### removeEventListener()

```js
removeEventListener(handler: (event?: any) => any);
```

Remove an event handler.

### removeAllListeners()

```js
removeAllListeners();
```

Remove all registered event handlers for this ad.