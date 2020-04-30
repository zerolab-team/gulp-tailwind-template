import { parallel, series } from 'gulp';
import { paths } from './config/paths';
import { getEnv } from './config/helpers';

// Gulp tasks
// import styles from './config/tasks/styles';
import scripts from './config/tasks/scripts';

// Rollup plugins
import postcss from 'rollup-plugin-postcss';

const { isDev, isProd } = getEnv();

export default series(
  parallel((cb) => {
    // styles({ from: paths.styles.from, to: paths.styles.to });
    scripts({
      input: paths.scripts.from,
      dir: paths.scripts.to,
      plugins: [
        postcss({
          extract: true,
          minimize: isProd,
          sourceMap: isDev,
        }),
      ],
    });

    cb();
  }),
);
