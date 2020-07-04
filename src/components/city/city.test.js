import React from "react";
import renderer from "react-test-renderer";
import City from "./city.jsx";

const city = {
  name: `Amsterdam`,
  coordinates: [52.373057, 4.892557],
};

it(`City should be rendered correctly when not active`, () => {
  const tree = renderer.create(
      <City
        city={city}
        isActive={false}
        onCityClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`City should be rendered correctly when active`, () => {
  const tree = renderer.create(
      <City
        city={city}
        isActive={true}
        onCityClick={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
