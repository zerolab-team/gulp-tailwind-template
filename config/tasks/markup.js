import { src, dest } from 'gulp';

export default ({ from, to }) => {
  return src(from).pipe(dest(to));
};
