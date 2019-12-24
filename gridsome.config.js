// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "websoda.io",
  siteDescription:
    "A Publication with Refreshing Content on everything Web development.",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CONTENTFUL_SPACE, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful",
        routes: {
          ContentfulProduct: "/product/:slug"
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/**/*.md",
        route: "/posts/:slug",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            // creates this via true
            create: true
            // id = name of tag value (i.e #javascript)
          }
        },
        // Adding syntax highlighting plugin
        // Also added to main.js
        remark: {
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    }
  ]
};
