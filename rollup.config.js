import terser from "@rollup/plugin-terser";

export default {
  plugins: [process.env.MODE == "release" ? terser() : null],
  output: {
    format: "iife",
  },
};
