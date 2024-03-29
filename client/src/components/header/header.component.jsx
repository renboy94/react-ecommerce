import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

export const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      {/* <Logo /> */}
      SUPR STUFF
    </LogoContainer>
    {/* <OptionLink to="/shop">SHOP</OptionLink> */}
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      {/* <OptionLink to="/shop">CONTACT</OptionLink> */}
      {currentUser ? (
        <OptionLink
          data-test="OptionLink"
          to="/"
          as="div"
          onClick={signOutStart}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink data-test="OptionLink" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : (
      <CartDropdownContainer data-test="CartDropdownContainer" />
    )}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
