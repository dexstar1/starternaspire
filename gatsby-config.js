module.exports = {
  siteMetadata: {
    title: "Naspire",
    description: "Data is good. Insights are better.",
    author: "Shabi-Oriade Adefolahan",
    twitter: "@oriadedexstar",
    siteUrl: `https://naspire.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://social.naspire.com`,
        blogURI: "/blog",
      },
    },
  ],
};
