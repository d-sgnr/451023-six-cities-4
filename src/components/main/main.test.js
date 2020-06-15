import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

describe(`MainComponent`, () => {
  it(`MainComponent should be rendered correctly`, () => {
    const tree = renderer
      .create(<Main
        placesCount = {341}
        onCardTitleClick = {() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
