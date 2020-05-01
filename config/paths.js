const src = 'src';
const dest = 'dist';

export const paths = {
  markup: {
    from: `${src}/*.html`,
    to: dest,
  },
  styles: {
    from: `${src}/index.css`,
    to: dest,
  },
  scripts: {
    from: `${src}/index.js`,
    to: dest,
  },
};
