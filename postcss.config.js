import postcssPresetEnv from "postcss-preset-env";
import atImport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins:
    process.env.STEP == "compile"
      ? [
          postcssPresetEnv({
            browsers: "last 2 versions, not dead, > 0.2%",
          }),
        ]
      : [
          atImport(),
          process.env.MODE == "debug" ? null : cssnano({ preset: "default" }),
        ],
};
