const PLACE_RATING = {
  1: `20%`,
  2: `40%`,
  3: `60%`,
  4: `80%`,
  5: `100%`,
};

const PLACE_TYPE = {
  private: `Private room`,
  apartment: `Apartment`,
};

const PLACE_TITLE = [
  `Wood and stone place`,
  `Cozy seaview apartment`,
  `Beautiful place`,
  `Nice quiet stay with soft bed`
];

const PLACE_PICTURE = [
  `room.jpg`,
  `apartment-01.jpg`,
  `apartment-02.jpg`,
  `apartment-03.jpg`
];

const PLACE_PRICE = [
  140,
  88,
  220,
  99
];


export default [
  {
    picture: PLACE_PICTURE[1],
    price: PLACE_PRICE[1],
    rating: PLACE_RATING[4],
    title: PLACE_TITLE[1],
    type: PLACE_TYPE.private,
    isBookmarked: true,
    isPremium: false,
  },
  {
    picture: PLACE_PICTURE[2],
    price: PLACE_PRICE[2],
    rating: PLACE_RATING[2],
    title: PLACE_TITLE[2],
    type: PLACE_TYPE.apartment,
    isBookmarked: false,
    isPremium: true,
  },
  {
    picture: PLACE_PICTURE[3],
    price: PLACE_PRICE[3],
    rating: PLACE_RATING[5],
    title: PLACE_TITLE[3],
    type: PLACE_TYPE.private,
    isBookmarked: true,
    isPremium: false,
  },
  {
    picture: PLACE_PICTURE[0],
    price: PLACE_PRICE[0],
    rating: PLACE_RATING[1],
    title: PLACE_TITLE[0],
    type: PLACE_TYPE.apartment,
    isBookmarked: false,
    isPremium: true,
  },
];
