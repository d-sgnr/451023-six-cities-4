import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveState from "./with-active-state.jsx";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveState(MockComponent);

const mockedState = {
  isActive: false,
};

it(`Should change state`, () => {
  const wrapper = shallow(<MockComponentWrapped
    isActive={mockedState.isActive}
    onActiveChange={() => {}}
  />);

  expect(wrapper.props().isActive).toEqual(false);

  wrapper.props().onActiveChange();

  expect(wrapper.props().isActive).toEqual(true);
});
