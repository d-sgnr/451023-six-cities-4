import {RATING, Cities} from "../const.js";

const PLACE_TYPE = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export default [
  {
    id: Math.random(),
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: Cities.AMSTERDAM.name,
      coordinates: Cities.AMSTERDAM.coordinates,
    },
    pictures: [
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 140,
    rating: RATING[4],
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
    id: Math.random(),
    coordinates: [48.854408, 2.338527],
    city: {
      name: Cities.PARIS.name,
      coordinates: Cities.PARIS.coordinates,
    },
    pictures: [
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 88,
    rating: RATING[2],
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
    id: Math.random(),
    coordinates: [48.854408, 2.338527],
    city: {
      name: Cities.PARIS.name,
      coordinates: Cities.PARIS.coordinates,
    },
    pictures: [
      `apartment-03.jpg`,
      `apartment-01.jpg`,
      `room.jpg`,
      `apartment-02.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 2488,
    rating: RATING[4],
    title: `Cozy seaview apartment`,
    type: PLACE_TYPE.house,
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
    id: Math.random(),
    coordinates: [52.371845, 4.886230],
    city: {
      name: Cities.AMSTERDAM.name,
      coordinates: Cities.AMSTERDAM.coordinates,
    },
    pictures: [
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-small-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 99,
    rating: RATING[5],
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
    id: Math.random(),
    coordinates: [50.851037, 4.353081],
    city: {
      name: Cities.BRUSSELS.name,
      coordinates: Cities.BRUSSELS.coordinates,
    },
    pictures: [
      `apartment-small-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 220,
    rating: RATING[1],
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
  {
    id: Math.random(),
    coordinates: [53.550823, 9.967285],
    city: {
      name: Cities.HAMBURG.name,
      coordinates: Cities.HAMBURG.coordinates,
    },
    pictures: [
      `apartment-small-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 220,
    rating: RATING[1],
    title: `Perfect for a married couple`,
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
  {
    id: Math.random(),
    coordinates: [51.230569, 6.787428],
    city: {
      name: Cities.DUSSELDORF.name,
      coordinates: Cities.DUSSELDORF.coordinates,
    },
    pictures: [
      `apartment-small-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-03.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 220,
    rating: RATING[1],
    title: `Perfect for a married couple`,
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
  {
    id: Math.random(),
    coordinates: [50.932252, 6.951648],
    city: {
      name: Cities.COLOGNE.name,
      coordinates: Cities.COLOGNE.coordinates,
    },
    pictures: [
      `apartment-03.jpg`,
      `apartment-small-03.jpg`,
      `room.jpg`,
      `apartment-01.jpg`,
      `apartment-02.jpg`,
      `apartment-small-04.jpg`
    ],
    price: 220,
    rating: RATING[2],
    title: `Nice for travellers with pets`,
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
