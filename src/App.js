import "../index.css";
import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./componants/Navbar";
import { ProductCard } from "./componants/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kid from "./componants/Kid";
import Men from "./componants/Men";
import Error from "./componants/Error";
import ProductDetails from "./componants/ProductDetails";
import Product from "./componants/Product";
import CompoA from "./componants/CompoA";
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux";
import appStore from "./store/store";
import Cart from "./componants/Cart";
import { memo } from "react";
import Memo from "./componants/Memo";
import Ref from "./componants/Ref"; 
import Login from "./componants/Login";


// import About from "./componants/About";   
// import Grocery from "./componants/Grocery"; //HUM ISKO DIRECT IMPORT NHI KARENGE

// lazy loading
// code splitting
// dynamic import

const Grocery = lazy(() => import('./componants/Grocery'));
const About = lazy(() => import('./componants/About'));

const App = () => {

    const [userName, setUserName] = useState("SUMIT");

    return (

        <Provider store={appStore} >
            <UserContext.Provider value={{ name: userName, setUserName }}>
                <div>
                    <Navbar />
                    {/* <CompoA/> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>

    );
};


const appRouter = createBrowserRouter([

    {
        path: "/",
        element: < App />,
        children: [
            {
                path: "/",
                element: <ProductCard />
            },
            {
                path: "/kid",
                element: <Kid />
            },

            {
                path: "/men",
                element: <Men />
            },

            {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "/memo",
                element: <Memo />
            },

            {
                path: "/ref",
                element: <Ref />
            },


            {
                path: "/login",
                element: <Login />
            },


            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
            },

            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },


            {
                path: "/product/:productId",
                element: <ProductDetails />
            },
        ],

        errorElement: <Error />,

    },


])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

