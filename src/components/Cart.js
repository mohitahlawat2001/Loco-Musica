import { useSelector , useDispatch } from "react-redux";
import { clearCart ,removeFromCart  } from "../utils/cartSlice";


const cart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const totalPrice = () => {
        let total = 0;
        cart.map((item) => {
            total += item?.card?.info?.price ||item?.card?.info?.defaultPrice;
        });
        return total;
    }

    return (
        <div>
            <h1>Cart</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleClearCart}>Clear Cart</button>
            <div className="grid grid-cols-3 gap-4 mt-4 ">
                {cart.map((item) => (
                    <div key={item?.card?.info?.id} className="bg-white shadow-md p-4 rounded-md">
                        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/'+item?.card?.info?.imageId} alt={item?.card?.info?.name} className="w-32 h-32 object-cover rounded-md" />
                        <h3 className="text-2xl mb-2">{item?.card?.info?.name}</h3>
                        <p className="text-lg mb-2">{item?.card?.info?.description}</p>
                        {!item?.card?.info?.defaultPrice ? (
                            <p className="text-lg mb-2">{item?.card?.info?.defaultPrice}</p>
                        ) : (
                            <p className="text-lg mb-2">{item?.card?.info?.price}</p>
                        )}
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <h2 className="text-2xl">Total: {totalPrice()/100}</h2>
            </div>
                
        </div>
    );
}

export default cart;