import terser from "@rollup/plugin-terser";

export default {
  plugins: [process.env.MODE == "debug" ? null : terser()],
  output: {
    format: "iife",
  },
};
