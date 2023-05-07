
export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

