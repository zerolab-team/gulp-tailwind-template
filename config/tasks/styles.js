import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import { src, dest, watch } from 'gulp';
import { paths } from '../paths';
import { getEnv } from '../helpers';

export const styles = () => {
  const { init, write } = sourcemaps;
  const { isDev } = getEnv();

  const gulpis = (plugin) => gulpif(isDev, plugin);

  const styles = () =>
    src([paths.styles.from])
      .pipe(gulpis(init()))
      .pipe(postcss())
      .pipe(gulpis(write('.')))
      .pipe(dest(paths.styles.to));

  return watch('src/**/*.js', styles);
};
