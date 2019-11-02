const custom = require("../webpack.config.js");

module.exports = ({ config }) => {
  const rules = config.module.rules;

  // Disable regular svg handling
  const rule = rules.find(rule => rule.test.test(".svg"));
  if (rule != null) {
    const rs = rule.test.toString().replace("svg|", "");
    rule.test = RegExp(rs.substr(1, rs.length - 2));
  }

  custom.module.rules.forEach(it => rules.push(it));
  custom.resolve.extensions.forEach(it => config.resolve.extensions.push(it));

  return config;
};
