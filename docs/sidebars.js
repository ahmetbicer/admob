module.exports = {
  sideBar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['installation', 'usage', 'examples'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          Hooks: ['api/useInterstitialAd', 'api/useRewardedAd'],
        },
        {
          Ads: ['api/InterstitialAd', 'api/RewardedAd'],
        },
        {
          AdManager: [
            'api/initialize',
            'api/setRequestConfiguration',
            'api/isTestDevice',
          ],
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Components',
      items: ['components/banner'],
      collapsed: false,
    },
  ],
};
