import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {City} from "./city.jsx";
import {city} from "../../test-state.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`City button should be pressed`, () => {
  const onCityClick = jest.fn();

  const cityElement = shallow(
      <City
        city={city}
        onCityClick={onCityClick}
        isActive={true}
      />
  );

  const cityButton = cityElement.find(`.locations__item-link`);

  cityButton.simulate(`click`);

  expect(onCityClick).toHaveBeenCalledTimes(1);
});

