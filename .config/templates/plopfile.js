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
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/index.tsx",
        templateFile: "StatelessComponent/index.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/story.tsx",
        templateFile: "StatelessComponent/story.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/tests.tsx",
        templateFile: "StatelessComponent/tests.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/README.md",
        templateFile: "common/README.md"
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
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/index.tsx",
        templateFile: "StatelessComponent/index.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/story.tsx",
        templateFile: "StatelessComponent/story.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/src/{{pascalCase name}}/tests.tsx",
        templateFile: "StatelessComponent/tests.hbs"
      },
      {
        type: "add",
        path: "../packages/{{dashCase name}}/README.md",
        templateFile: "common/README.md"
      }
    ]
  });
};
