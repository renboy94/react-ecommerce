import React from "react";

import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem data-test="CartItem" key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer data-test="EmptyMessage">
          Your cart is empty
        </EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      data-test="CartDropdownButton"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

export default CartDropdown;
