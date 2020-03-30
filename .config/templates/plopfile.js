module.exports = function (plop) {

  const namePrompt = {
    type: "input",
    name: "name",
    message: "component name"
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
  const tsConfig = add("Common/tsconfig.json.hbs", "tsconfig.json")

  // TODO: create a symlink file

  function addComponentConfig(name) {
    plop.setGenerator(name, {
      prompts: [namePrompt],
      actions: [
        addSrc(name + "/index.hbs", "index.tsx"),
        addSrc(name + "/story.hbs", "story.tsx"),
        addSrc(name + "/tests.hbs", "tests.tsx"),
        add("Common/package.json.hbs", "package.json"),
        tsConfig,
        readmeInclude
      ]
    })
  }

  function addScriptConfig() {
    plop.setGenerator("Script", {
      prompts: [namePrompt],
      actions: [
        addSrc("Script/entrypoint.hbs", "entrypoint.ts"),
        add("Script/package.json.hbs", "package.json"),
        tsConfig,
        readmeInclude
      ]
    })
  }

  addComponentConfig("Component/Stateless")
  addComponentConfig("Component/Stateful")
  addScriptConfig()

}
