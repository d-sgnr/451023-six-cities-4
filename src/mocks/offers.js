const PLACE_RATING = {
  1: `20`,
  2: `40`,
  3: `60`,
  4: `80`,
  5: `100`,
};

const PLACE_TYPE = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export default [
  {
    coordinates: [52.3909553943508, 4.85309666406198],
    pictures: [
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 140,
    rating: PLACE_RATING[4],
    title: `Wood and stone place`,
    type: PLACE_TYPE.house,
    isBookmarked: true,
    isPremium: false,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
  {
    coordinates: [52.369553943508, 4.85309666406198],
    pictures: [
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 88,
    rating: PLACE_RATING[2],
    title: `Cozy seaview apartment`,
    type: PLACE_TYPE.apartment,
    isBookmarked: false,
    isPremium: true,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
  {
    coordinates: [52.3909553943508, 4.929309666406198],
    pictures: [
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 99,
    rating: PLACE_RATING[5],
    title: `Beautiful place`,
    type: PLACE_TYPE.hotel,
    isBookmarked: true,
    isPremium: false,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
  {
    coordinates: [52.3809553943508, 4.939309666406198],
    pictures: [
      `apartment-small-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 220,
    rating: PLACE_RATING[1],
    title: `Nice quiet stay with soft bed`,
    type: PLACE_TYPE.room,
    isBookmarked: false,
    isPremium: true,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    bedroomsCount: 3,
    guestsCount: 4,
    appliances: [
      `Wifi`,
      `Heating`,
      `Kitchen`,
      `Cable TV`
    ],
    host: {
      picture: `avatar-angelina.jpg`,
      name: `Adam Smith`,
      isSuper: true,
    }
  },
];
