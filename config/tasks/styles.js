import postcss from 'gulp-postcss';
import { src, dest } from 'gulp';

export default ({ from, to }) => {
  return src(from).pipe(postcss()).pipe(dest(to));
};
