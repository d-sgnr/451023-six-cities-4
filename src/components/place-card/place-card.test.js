import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const offer = {
  picture: `room.jpg`,
  price: 120,
  rating: `40%`,
  title: `Wood and stone place`,
  type: `Private room`,
  isBookmarked: true,
  isPremium: false,
};

it(`PlaceCard should be rendered correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        onCardHover={() => {}}
        card={offer}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
