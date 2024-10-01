import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins:
    process.env.STEP != "link"
      ? [postcssPresetEnv({ browsers: "defaults" })]
      : process.env.MODE != "release"
        ? [postcssImport()]
        : [postcssImport(), cssnano()],
};
