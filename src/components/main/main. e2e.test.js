import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offers = [
  {
    picture: `room.jpg`,
    price: 120,
    rating: `40%`,
    title: `Wood and stone place`,
    type: `Private room`,
    isBookmarked: true,
    isPremium: false,
  },
  {
    picture: `apartment-01.jpg`,
    price: 240,
    rating: `80%`,
    title: `Nice quiet stay with soft bed`,
    type: `Apartment`,
    isBookmarked: false,
    isPremium: true,
  },
];

describe(`MainComponent`, () => {
  it(`Card title should be pressed`, () => {
    const onCardTitleClick = jest.fn();

    const mainScreen = shallow(
        <Main
          placesCount = {341}
          offers = {offers}
        />
    );

    const cardTitles = mainScreen.find(`.place-card__name a`);

    cardTitles.map((it, i) => {
      it.simulate(`click`);
      expect(onCardTitleClick).toHaveBeenCalledTimes(i + 1);
    });

  });
});
