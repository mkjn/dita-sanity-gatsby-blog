export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61885235063034f1ca67357a",
                  title: "Sanity Studio",
                  name: "dita-sanity-gatsby-blog-studio",
                  apiId: "8b1d418f-0a4b-459d-bb94-b704c599d7da",
                },
                {
                  buildHookId: "61885235bada37c81c9b90bf",
                  title: "Blog Website",
                  name: "dita-sanity-gatsby-blog",
                  apiId: "8a89d6e2-07dd-42bd-9a53-35ac6e8bce30",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mkjn/dita-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://dita-sanity-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
