import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins:
    process.env.STEP == "link"
      ? [postcssImport(), process.env.MODE == "debug" ? null : cssnano()]
      : [postcssPresetEnv({ browsers: "defaults" })],
};
