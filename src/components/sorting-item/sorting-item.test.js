import React from "react";
import renderer from "react-test-renderer";
import SortingItem from "./sorting-item.jsx";

it(`SortingItem should be rendered correctly`, () => {
  const tree = renderer.create(
      <SortingItem
        title={`Popular`}
        activeSortType={`Popular`}
        onSortingChange={() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
