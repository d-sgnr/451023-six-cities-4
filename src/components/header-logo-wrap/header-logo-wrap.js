import React from "react";
import renderer from "react-test-renderer";
import HeaderLogoWrap from "./header-logo-wrap.jsx";

const children = <div className="children-component" />;

it(`HeaderLogoWrap should be rendered correctly`, () => {
  const tree = renderer.create(
      <HeaderLogoWrap>
        {children}
      </HeaderLogoWrap>).toJSON();

  expect(tree).toMatchSnapshot();
});
