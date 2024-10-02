import postcssPresetEnv from "postcss-preset-env";

const plugins = {
  compiler: [
    postcssPresetEnv({ browsers: "last 2 versions, not dead, > 0.2%" }),
  ],
};

export default {
  plugins: plugins[process.env["CALL"]],
};
