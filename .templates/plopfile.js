module.exports = function(plop) {
  plop.setGenerator("StatelessComponent", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/{{name}}/index.tsx",
        templateFile: "StatelessComponent/index.hbs"
      },
      {
        type: "add",
        path: "../src/{{name}}/story.tsx",
        templateFile: "StatelessComponent/story.hbs"
      }
    ]
  });

  plop.setGenerator("StatefulComponent", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/{{name}}/index.tsx",
        templateFile: "StatefulComponent/index.hbs"
      },
      {
        type: "add",
        path: "../src/{{name}}/story.tsx",
        templateFile: "StatefulComponent/story.hbs"
      }
    ]
  });
};
