import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const offer = {
  pictures: [
    `room.jpg`,
    `apartment-01.jpg`,
    `apartment-02.jpg`,
    `apartment-03.jpg`,
    `apartment-small-03.jpg`,
    `apartment-small-04.jpg`
  ],
  price: 140,
  rating: `40%`,
  title: `Wood and stone place`,
  type: `House`,
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
};

it(`PlaceCard should be rendered correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        onCardHover={() => {}}
        card={offer}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
