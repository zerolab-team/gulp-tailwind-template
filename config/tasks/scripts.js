import { rollup } from 'rollup';
import { getEnv } from '../helpers';

export default async ({ input, dir, plugins = [] }) => {
  const { isDev, isProd } = getEnv();

  const bundle = await rollup({
    input,
    treeshake: isProd,
    plugins,
  });

  return bundle.write({
    dir,
    format: 'esm',
    sourcemap: isDev,
    preferConst: true,
  });
};
