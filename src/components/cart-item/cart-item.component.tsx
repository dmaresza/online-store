import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/cart/cart.action';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { CartItem as CartItemType } from '../../store/cart/cart.types';
import { RemoveButton } from '../checkout-item/checkout-item.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

type CartItemProps = {
  cartItem: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;