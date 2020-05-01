import { parallel, series } from 'gulp';

import { clear } from './config/tasks/clear';
import { markup } from './config/tasks/markup';
import { styles } from './config/tasks/styles';
import { scripts } from './config/tasks/scripts';

const base = parallel(markup, styles, scripts);

export default series(clear, base);
