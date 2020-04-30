import { parallel, series } from 'gulp';

// Gulp tasks
import styles from './config/tasks/styles';
import scripts from './config/tasks/scripts';

// Rollup plugins
// import styles from './config/plugins/styles';

export const start = series(
  parallel((cb) => {
    styles({ from: 'src/index.css', to: 'dist' });
    scripts({
      input: 'src/index.js',
      dir: 'dist',
      plugins: [
        // styles(),
      ],
    });

    cb();
  }),
);
