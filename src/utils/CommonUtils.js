export const getLocalCartData = () => {
  let localData = localStorage.getItem ('data');
  const parsedData = JSON.parse (localData);
  if (!Array.isArray (parsedData)) return [];

  return parsedData;
};
