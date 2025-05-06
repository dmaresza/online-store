import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem, addItem, removeItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;

  return (
    <div className='checkout-item-container'>
      <img className='image-container' src={imageUrl} alt={`${name}`} />
      <span className='name'>{name}</span>
      <div className='quantity'>
        <span className='arrow' onClick={removeItem}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItem}>&#10095;</span>
      </div>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={deleteItem}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;