import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";

export default {
  plugins:
    process.env["STEP"] != "compile"
      ? [postcssImport()]
      : [postcssPresetEnv({ browsers: "last 2 versions, not dead, > 0.2%" })],
};
