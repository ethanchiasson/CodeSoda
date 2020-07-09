// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "BloqDaily.com",
  siteDescription:
    "A Publication with Refreshing Content on Everything Crypto and Tech.",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/**/*.md",
        route: "/articles/:slug",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            // creates this via true
            create: true,
            // id = name of tag value (i.e #javascript)
          },
        },
        // Adding syntax highlighting plugin
        // Also added to main.js
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
  ],
};
