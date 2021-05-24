var path = require("path");

const { override, babelInclude, addBabelPlugins } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../components"),
      ]),
      addBabelPlugins(["styled-jsx/babel"])
    )(config, env)
  );
};
