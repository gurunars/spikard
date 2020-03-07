module.exports = function (plop) {

  const namePrompt = {
    type: "input",
    name: "name",
    message: "component name"
  }

  const readmeInclude = {
    type: "add",
    path: titleTpl + "/README.md",
    templateFile: "README.md"
  }

  function add(source, target) {
    return {
      type: "add",
      path: "../../packages/{{dashCase name}}/" + target,
      templateFile: source
    }
  }

  function addSrc(source, target) {
    return add(source, "/src/{{pascalCase name}}/" + target)
  }

  const readmeInclude = add("README.md.hbs", "README.md");

  function addComponentConfig(name) {
    plop.setGenerator(name, {
      prompts: [namePrompt],
      actions: [
        addSrc(name + "/index.hbs", "index.tsx"),
        addSrc(name + "/story.hbs", "story.tsx"),
        addSrc(name + "/tests.hbs", "tests.tsx"),
        readmeInclude
      ]
    })
  }

  function addScriptConfig() {
    plop.setGenerator(name, {
      prompts: [namePrompt],
      actions: [
        addSrc("Script/entrypoint.hbs", "entrypoint.tsx"),
        add("Script/package.json.hbs", "package.json"),
        readmeInclude
      ]
    })
  }

  addComponentConfig("Component/Stateless")
  addComponentConfig("Component/Stateful")
  addScriptConfig()

}
