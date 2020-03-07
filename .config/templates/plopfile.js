module.exports = function (plop) {

  const titleTpl = "../../packages/{{dashCase name}}"

  function addComponentConfig(name) {
    plop.setGenerator(name, {
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
          path: titleTpl + "/src/{{pascalCase name}}/index.tsx",
          templateFile: name + "/index.hbs"
        },
        {
          type: "add",
          path: titleTpl + "/src/{{pascalCase name}}/story.tsx",
          templateFile: name + "/story.hbs"
        },
        {
          type: "add",
          path: titleTpl + "/src/{{pascalCase name}}/tests.tsx",
          templateFile: name + "/tests.hbs"
        },
        {
          type: "add",
          path: titleTpl + "/README.md",
          templateFile: "common/README.md"
        }
      ]
    })
  }

  addComponentConfig("StatelessComponent")
  addComponentConfig("StatefulComponent")
}
