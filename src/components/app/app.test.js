import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

describe(`AppComponent`, () => {
  it(`AppComponent should be rendered correctly`, () => {
    const tree = renderer
      .create(<App
        placesCount = {341}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
