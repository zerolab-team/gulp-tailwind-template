import del from 'del';

export const clear = async () => {
  return await del(['dist']);
};
