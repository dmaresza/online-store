import styled from 'styled-components';
import { RemoveButton } from '../checkout-item/checkout-item.styles';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  align-items: center;
  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding 10px 20px;
  
  span {
    font-size: 16px;
  }
  `;