import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { addItems } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {

    const { productId } = useParams();
    const singleProduct = useGetSingleProduct(productId);
    const dispatch = useDispatch();

    if (singleProduct === null) {
        return <Skeleton />

    }

    const { image, title, price, rating, description } = singleProduct;

    const handleCartItem = () => {
        dispatch(addItems(singleProduct));
    }

    return singleProduct === null ? (
        <Skeleton />
    ) : (
        <div className="max-w-6xl mx-auto p-8 mt-10">
            <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8">

                <div className="flex justify-center items-center">
                    <img
                        className="h-96 object-contain hover:scale-105 transition duration-300"
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {title}
                    </h1>

                    <p className="mt-4 text-yellow-500 font-semibold text-lg">
                        ⭐ {rating.rate} Ratings
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-green-700">
                        ₹ {price}
                    </h2>

                    <p className="mt-6 text-gray-600 leading-7">
                        {description}
                    </p>

                    <button onClick={handleCartItem} className="mt-8 w-48 bg-cyan-900 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition">
                        ADD TO CART
                    </button>
                </div>                                                  
                                   
            </div>                          
        </div>                               
    );                                                                                                                         
                                                                                     
};                             
                                        
export default ProductDetails;  


