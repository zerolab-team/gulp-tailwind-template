import { rollup } from 'rollup';

export default async ({ input, dir, plugins = [] }) => {
  const bundle = await rollup({
    input,
    treeshake: true,
    plugins,
  });

  return bundle.write({
    dir,
    format: 'esm',
    sourcemap: true,
    preferConst: true,
  });
};
