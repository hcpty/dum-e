import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins:
    process.env["CALL"] == "compiler"
      ? [postcssPresetEnv({ browsers: "last 2 versions, not dead, > 0.2%" })]
      : [],
};
