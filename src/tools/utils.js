export const encode = (username, password) => {
  return btoa(`${username}:${password}`);
}
