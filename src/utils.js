export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getUniqueObjectsArray = (array, key) => {
  return Object.values(array.reduce((acc, it) => Object.assign(acc, {[it[key]]: it}), {}));
};

export const replaceItemInArray = (array, newItem, key) => {
  return array.map((item) => {
    if (item === newItem) {
      return extend(item, {
        [key]: !item[key],
      });
    }
    return item;
  });
};

export const getFilteredOffers = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getPlacesCoordinates = (shownOffers) => {
  return shownOffers.map(({coordinates}) => coordinates);
};
