module.exports = ({ config }) => {
  const rules = config.module.rules;

  rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // Disable regular svg handling
  const rule = rules.find(rule => rule.test.test(".svg"));
  if (rule != null) {
    const rs = rule.test.toString().replace("svg|", "");
    rule.test = RegExp(rs.substr(1, rs.length - 2));
  }

  rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  return config;
};
