import { src, dest, watch } from 'gulp';
import { paths } from '../paths';

export const markup = () => {
  const markup = () => src(paths.markup.from).pipe(dest(paths.markup.to));

  return watch('src/**/*.html', markup);
};
