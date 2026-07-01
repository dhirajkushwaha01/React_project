import React from 'react';
import { useSelector } from 'react-redux';
import { clearItems } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

function Cart() {

    const cartItems = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();
    const clearCartItemHandler = () => {
        dispatch(clearItems());
    };


    return (
        <div className="min-h-[80vh] flex flex-col items-center bg-gray-100 py-10">

            <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-6xl">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="font-bold text-3xl text-gray-800">
                        🛒CART-({cartItems.length})
                    </h1>

                    <button onClick={clearCartItemHandler} className="bg-red-700 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        CLEAR CART
                    </button>
                </div>

                {
                    (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="max-w-6xl mx-auto p-8 mt-10 border rounded-2xl shadow-md"
                            >
                                <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl">

                                    <div className="flex justify-center items-center">
                                        <img
                                            className="h-96 object-contain hover:scale-105 transition duration-300"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h1 className="text-3xl font-bold text-gray-800">
                                            {item.title}
                                        </h1>

                                        <p className="mt-4 text-yellow-500 font-semibold text-lg">
                                            ⭐ {item.rating.rate} Ratings
                                        </p>

                                        <h2 className="mt-4 text-4xl font-bold text-green-700">
                                            ₹ {item.price}
                                        </h2>

                                        <p className="mt-6 text-gray-600 leading-7">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </div>
    );
}

export default Cart;