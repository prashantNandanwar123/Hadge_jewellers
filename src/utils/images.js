// Loads every JPG in src/assets/images and exposes it by file name (without extension).
// To swap a photo, replace the file with the same name, or add a new file and use its name in the data files.
const modules = import.meta.glob('../assets/images/*.jpg', { eager: true, import: 'default' });

const map = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop().replace('.jpg', ''), url])
);

export const getImage = (name) => map[name] ?? null;
