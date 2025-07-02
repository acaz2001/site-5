import { PiBasketFill } from 'react-icons/pi';
import { useCart } from '../context/CartContext';

function CartIcon({ showCart, setShowCart }) {
  const { cartItems } = useCart();

  return (
    <div className="relative mt-1.5">
      <button onClick={() => setShowCart(!showCart)}>
        <PiBasketFill className="text-[1.25rem] cursor-pointer" />
      </button>

      {cartItems.length > 0 && (
        <div className="absolute -top-3 -right-3.5 bg-[#ede4fc] text-black text-[0.6rem]  w-4 h-4 rounded-full flex items-center justify-center">
          <p className='font-[600]'>{cartItems.length}</p>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
