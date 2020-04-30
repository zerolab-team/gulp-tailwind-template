import postcss from 'gulp-postcss';
import { src, dest } from 'gulp';

export default ({ from = 'src/index.css', to = 'dist/index.css' }) => {
  return src(from).pipe(postcss()).pipe(dest(to));
};
