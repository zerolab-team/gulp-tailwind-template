export const getEnv = () => {
  const env = process.env.NODE_ENV;
  const isDev = env === 'development';
  const isProd = env === 'production';

  return { env, isDev, isProd };
};
