export const userLoggedIn = (user) => {
  return user.username ? user : false;
};

export const makeURL = (array) => `${array.join("/")}/`;
