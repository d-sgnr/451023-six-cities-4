import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";
import {activeOffer as offer} from "../../test-state.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Place card should call hover and unhover handlers`, () => {

  const onCardHover = jest.fn();
  const onCardMouseLeave = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        offer={offer}
        onCardHover={onCardHover}
        onCardMouseLeave={onCardMouseLeave}
      />
  );

  placeCard.simulate(`mouseenter`);
  placeCard.simulate(`mouseleave`);

  expect(onCardHover).toHaveBeenCalledTimes(1);
  expect(onCardMouseLeave).toHaveBeenCalledTimes(1);
});
