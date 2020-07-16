import React from "react";
import renderer from "react-test-renderer";
import withActiveState from "./with-active-state.jsx";

const MockComponent = () => <div/>;

const MockComponentWrapped = withActiveState(MockComponent);

it(`withActiveState is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      isActive={false}
      onActiveChange={() => {}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
