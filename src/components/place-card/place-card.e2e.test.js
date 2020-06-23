import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  picture: `room.jpg`,
  price: 120,
  rating: `40%`,
  title: `Wood and stone place`,
  type: `Private room`,
  isBookmarked: true,
  isPremium: false,
};

it(`Offer info passed to callback is consistent on hover`, () => {

  const onCardHover = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        onCardHover={onCardHover}
        card={offer}
      />
  );

  placeCard.simulate(`mouseEnter`);

  expect(onCardHover).toHaveBeenCalledTimes(1);
});
