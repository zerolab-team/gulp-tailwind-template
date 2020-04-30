import { parallel, series } from 'gulp';

import styles from './config/tasks/styles';

export const start = series(parallel(styles));
