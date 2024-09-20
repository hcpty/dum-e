import atImport from "postcss-import";
import cssnano from "cssnano";

export default {
  plugins: [
    atImport(),
    process.env.MODE == "release" ? cssnano({ preset: "default" }) : null,
  ],
};
