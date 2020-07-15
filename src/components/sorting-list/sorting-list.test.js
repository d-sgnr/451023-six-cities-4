import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list.jsx";

it(`SortingList should be rendered correctly`, () => {
  const tree = renderer.create(
      <SortingList
        activeSortType={`POPULAR`}
        onSortingChange={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
