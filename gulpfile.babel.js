import { parallel, series } from 'gulp';

import { clear } from './config/tasks/clear';
import { styles } from './config/tasks/styles';
import { scripts } from './config/tasks/scripts';
import { markup } from './config/tasks/markup';

export default series(clear, parallel(styles, markup, scripts));
