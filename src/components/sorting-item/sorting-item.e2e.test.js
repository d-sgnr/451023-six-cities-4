import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingItem from "./sorting-item.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SortingItem`, () => {
  it(`SortingItem button should be pressed`, () => {
    const onSortingChange = jest.fn();

    const sortingItem = shallow(
        <SortingItem
          title="Popular"
          activeSortType="Popular"
          onSortingChange = {onSortingChange}
        />
    );

    sortingItem.simulate(`click`);

    expect(onSortingChange).toHaveBeenCalledTimes(1);
  });
});
