import del from 'del';

export default async (files) => {
  return await del(files);
};
