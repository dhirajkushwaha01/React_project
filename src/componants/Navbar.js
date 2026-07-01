import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [btnName, setBtnName] = useState("LIGHT");
    const cartItems = useSelector((store) => store.cart.cartItems);

    console.log("Navbar rendered");

    const user = useContext(UserContext);

    // 1st case: [] -> empty array dependency -> only once called when navbar render.
    // 2nd case: -> jab jab navbar render hoga tab apna useEffect bhi render hoga.
    // 3rd case: jab hm array dependency k andr kuchh pass krte hai toh
    // vo change hota hai toh render hota hai

    useEffect(() => {
        console.log("useEffect called");
    }, [btnName]);

    return (
        <div className=" flex justify-between shadow-lg px-10 shadow-gray-300 py-6 ">

            <h1 className=" font-extrabold text-4xl ">🛒 CARTIFY</h1>

            <div className="flex items-center gap-4">

                <ul className="flex items-center gap-8 font-bold">

                    <li><Link to="/men">MENU</Link></li>
                    {/* <li><Link to="/women">WOMEN</Link></li> */}
                    {/* <li>KIDS</li> */}
                    <li><Link to="/cart">CART - {cartItems.length}</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li>CONTACT US</li>
                   <li className="bg-cyan-900 font-bold border-2 border-gray-300 px-4 py-2 rounded-md text-amber-50 min-w-[110px] text-center">
    <Link to="/grocery">GROCERY</Link>
</li>
                    {/* <li>{user.name}</li> */}
                </ul>

                <button
                    onClick={() => {
                        btnName === "LIGHT"
                            ? setBtnName("DARK")
                            : setBtnName("LIGHT");
                    }}
                    className="bg-cyan-900 font-bold border-2 border-gray-300 px-4 py-2 rounded-md text-amber-50 min-w-[110px] text-center"
                >
                    {btnName}
                </button>

            </div>

        </div>
    );
};

export default Navbar;