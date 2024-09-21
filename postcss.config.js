import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins:
    process.env.STEP == "compile"
      ? [
          postcssPresetEnv({
            browsers: "last 2 versions, not dead, > 0.2%",
          }),
        ]
      : [postcssImport(), process.env.MODE == "debug" ? null : cssnano()],
};
