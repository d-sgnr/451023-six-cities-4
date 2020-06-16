import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Card title should be pressed`, () => {
    const onCardTitleClick = jest.fn();

    const mainScreen = shallow(
        <Main
          placesCount = {341}
          onCardTitleClick = {onCardTitleClick}
        />
    );

    const cardTitles = mainScreen.find(`.place-card__name a`);

    cardTitles.map((it, i) => {
      it.simulate(`click`);
      expect(onCardTitleClick).toHaveBeenCalledTimes(i + 1);
    });

  });
});
