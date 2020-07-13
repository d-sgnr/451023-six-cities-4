import {SortType} from "./const.js";

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

export const getSortedOffers = (offers, sortType) => {
  let sortedOffers = [];
  const showingOffers = offers.slice();

  switch (sortType) {
    case SortType.TO_HIGH:
      sortedOffers = showingOffers.sort(sortArray(`price`, true));
      break;
    case SortType.TO_LOW:
      sortedOffers = showingOffers.sort(sortArray(`price`));
      break;
    case SortType.TOP_RATED:
      sortedOffers = showingOffers.sort(sortArray(`rating`));
      break;
    case SortType.POPULAR:
      sortedOffers = showingOffers;
      break;
  }

  return sortedOffers;
};

export const getFilteredOffers = (allOffers, city) => {
  return allOffers.filter((offer) => {
    return offer.city.name === city.name;
  });
};

export const getPlacesCoordinates = (shownOffers) => {
  return shownOffers.map(({coordinates}) => coordinates);
};

export const sortArray = (property, asc = false, length = false) => {

  let sortOrder = 1;

  if (!asc) {
    sortOrder = -1;
  }

  if (length) {
    return (a, b) => {
      let result = 0;

      if (a[property].length < b[property].length) {
        result = -1;
      } else if (a[property].length > b[property].length) {
        result = 1;
      }

      return result * sortOrder;
    };
  } return (a, b) => {
    let result = 0;

    if (a[property] < b[property]) {
      result = -1;
    } else if (a[property] > b[property]) {
      result = 1;
    }

    return result * sortOrder;
  };
};
