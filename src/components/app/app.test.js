import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

describe(`AppComponent`, () => {
  it(`AppComponent should be rendered correctly`, () => {
    const tree = renderer
      .create(<App
        placesCount = {341}
        offers={offers}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
