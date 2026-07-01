const Product = (props) => {
    const { image, title, price, rating } = props.product;

    return (
        <div className="w-72 bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden cursor-pointer p-4 border border-gray-200 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">

            <img
                className="w-full h-60 object-contain"
                src={image}
                alt={title}
            />

            <div className="mt-4">
                <h1 className="font-semibold text-lg line-clamp-2 h-14">
                    {title}
                </h1>

                <p className="text-yellow-500 font-medium mt-2">
                    ⭐ {rating.rate}
                </p>

                <h3 className="text-2xl font-bold text-green-800 mt-2">
                    ₹ {price}
                </h3>

                <button className="w-full mt-4 bg-cyan-900 font-bold text-white py-2 rounded-lg hover:bg-cyan-700 transition">
                    ADD TO CART
                </button>
            </div>

        </div>
    );
};

export default Product;


export const HOF = (Product) => {
    return (props) => {
        return (
            <div className="relative w-72">

                <span className="absolute top-3 right-3 z-50 bg-cyan-300 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ BEST SELLER
                </span>

                <Product {...props} />

            </div>
        );
    };
};