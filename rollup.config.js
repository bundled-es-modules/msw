import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: "./node_modules/msw/lib/esm/index.js",
  output: {
    file: "./index.js",
    format: "es",
  },
  plugins: [
    nodeResolve({
      preferBuiltins: false,
      browser: true
    }),
    commonjs(),
  ],
};
