import { parallel, series } from 'gulp';
import { paths } from './config/paths';
import { getEnv } from './config/helpers';

// Gulp tasks
// import styles from './config/tasks/styles';
import scripts from './config/tasks/scripts';
import markup from './config/tasks/markup';

// Rollup plugins
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const { isDev, isProd } = getEnv();

export default series(
  parallel((cb) => {
    // styles({ from: paths.styles.from, to: paths.styles.to });
    markup({ from: paths.markup.from, to: paths.markup.to });
    scripts({
      input: paths.scripts.from,
      dir: paths.scripts.to,
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

    cb();
  }),
);
