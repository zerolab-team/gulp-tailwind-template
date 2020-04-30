import { parallel, series } from 'gulp';

import { paths } from './config/paths';

// Gulp tasks
import styles from './config/tasks/styles';
import scripts from './config/tasks/scripts';

// Rollup plugins
// import styles from './config/plugins/styles';

export default series(
  parallel((cb) => {
    styles({ from: paths.styles.from, to: paths.styles.to });
    scripts({
      input: paths.scripts.from,
      dir: paths.scripts.to,
      plugins: [
        // styles({}),
      ],
    });

    cb();
  }),
);
