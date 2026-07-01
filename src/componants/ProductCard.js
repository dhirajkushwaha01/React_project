import { useState, useEffect } from "react";
// import { productlist } from "../utils/Constant";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
import { HOF } from "./Product";

import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const ProductCard = () => {

    //Local state variable 

    const [listOfProduct, setListOfProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        setListOfProduct(resData);

        setFilterProduct(resData);
    };



    const HOFComponent = HOF(Product); //This HOF is a Higher Order Component


   const user = useContext(UserContext);
        

    return listOfProduct.length === 0 ? <Skeleton /> : (


        <div>

            {/* <div className="mt-4 flex flex-wrap items-center justify-center">
                <input
                    className="border border-gray-400 rounded-lg px-2 py-1"
                    type="text"
                    value={user.name}
                    onChange={(e) => user.setUserName(e.target.value)}
                />
            </div> */}


            <div className="flex flex-wrap items-center justify-center gap-4 mt-10 px-4">

                <input
                    className="border-2 border-gray-300 px-4 py-2 rounded-full outline-none focus:border-cyan-600 w-64"
                    type="text"
                    placeholder="Search products..."
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />

                <button
                    className="bg-cyan-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-cyan-700 transition"
                    onClick={() => {
                        const filteredData = listOfProduct.filter((product) =>
                            product.title.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterProduct(filteredData);
                    }}
                >
                    SEARCH
                </button>

                <button
                    className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-13"
                    onClick={() => {
                        const filteredproduct = listOfProduct.filter(
                            (product) => product.rating.rate >= 4
                        );
                        setFilterProduct(filteredproduct);
                    }}
                >
                    TOP RATED
                </button>

                <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-13">
                    LOW PRICE
                </button>

                <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-13">
                    HIGH PRICE
                </button>

                <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-13">
                    PREMIMUM
                </button>

                <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition ml-13">
                    OFFERS
                </button>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-15 ml-7 ">

                {
                    filterProduct.map((product, index) => {
                        return (<Link key={product.id} to={`/product/${product.id}`}>

                            {
                                product.rating.rate >= 4 ? <HOFComponent product={product} /> : <Product product={product} />
                            }

                        </Link>

                        );
                    })
                };

            </div>
        </div>
    );
}
