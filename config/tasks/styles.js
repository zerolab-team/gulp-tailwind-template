import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import { src, dest } from 'gulp';

import { getEnv } from '../helpers';

export default ({ from, to }) => {
  const { init, write } = sourcemaps;
  const { isDev } = getEnv();

  const gulpis = (plugin) => gulpif(isDev, plugin);

  return src(from)
    .pipe(gulpis(init()))
    .pipe(postcss())
    .pipe(gulpis(write('.')))
    .pipe(dest(to));
};
