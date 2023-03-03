import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: "./index.js",
  output: {
    dir: "./dist",
    format: "es",
  },
  plugins: [
    nodeResolve({
      preferBuiltins: false,
      browser: true
    }),
    commonjs(),
    replace(
      {
        preventAssignment: true,
        'process.env.NODE_DEBUG': JSON.stringify(undefined),
        'process.env.NODE_ENV': JSON.stringify(undefined)
      }
    )
  ],
};
