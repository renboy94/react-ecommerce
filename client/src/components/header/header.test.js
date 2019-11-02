import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("Header component", () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: "123"
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if currentUser is present", () => {
    const optionLink = `[data-test='OptionLink']`;
    it("should render sign out link", () => {
      expect(wrapper.find(optionLink).text()).toBe("SIGN OUT");
    });

    it("should call signOutStart method when link is clicked", () => {
      wrapper.find(optionLink).simulate("click");

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("if currentUser is null", () => {
    it("should render sign in link", () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.find(`[data-test='OptionLink']`).text()).toBe(
        "SIGN IN"
      );
    });
  });

  describe("if CartDropDown hidden is true", () => {
    it("should not render CartDropdown", () => {
      expect(wrapper.exists(`[data-test='CartDropdownContainer']`)).toBe(false);
    });
  });

  describe("if currentUser is null", () => {
    it("should render CartDropdown", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(`[data-test='CartDropdownContainer']`)).toBe(
        true
      );
    });
  });
});
