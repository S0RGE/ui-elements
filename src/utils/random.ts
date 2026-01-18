const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const generateUniqueId = (id?: string) =>
  `${id || generateRandomString()}-${generateRandomString()}`;
