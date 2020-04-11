module.exports = function (plop) {
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
        templateFile: "Common/story.hbs"
      },
      {
        type: "add",
        path: "../src/{{name}}/tests.tsx",
        templateFile: "Common/tests.hbs"
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
        templateFile: "Common/story.hbs"
      },
      {
        type: "add",
        path: "../src/{{name}}/tests.tsx",
        templateFile: "Common§/tests.hbs"
      }
    ]
  });
};
