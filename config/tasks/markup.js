import { src, dest } from 'gulp';
import { paths } from '../paths';

export const markup = () => {
  return src(paths.markup.from).pipe(dest(paths.markup.to));
};
