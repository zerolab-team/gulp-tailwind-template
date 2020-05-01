import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { rollup } from 'rollup';
import { getEnv } from '../helpers';
import { paths } from '../paths';

export const scripts = async () => {
  const { isDev, isProd } = getEnv();

  const bundle = await rollup({
    input: paths.scripts.from,
    treeshake: isProd,
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs({
        sourceMap: isDev,
      }),
      postcss({
        extract: true,
        minimize: isProd,
        sourceMap: isDev,
      }),
      babel({
        presets: ['@babel/modules'],
        babelrc: false,
        externalHelpers: true,
      }),
      isProd &&
        terser({
          module: true,
          mangle: {
            module: true,
          },
        }),
    ],
  });

  return bundle.write({
    dir: paths.scripts.to,
    format: 'esm',
    sourcemap: isDev,
    preferConst: true,
  });
};
