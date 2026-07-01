import { useState } from "react";
import * as z from "zod";



console.log(z);
console.log(z.string);

const loginSchema = z.object({
    email:z.string().email('Invalid email address'),
    password: z.string().min(6, "Password must be at least 6 character")
});

console.log(z);
console.log(typeof z.string);


const Login = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });

    const [error, setError] = useState({});


    const changeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });
    }


    const submitHandler = (e) => {
        e.preventDefault();


        const result = loginSchema.safeParse(formData);

        if (!result.success) {
            const errorField = result.error.flatten().fieldErrors;
            setError(errorField);

            return;
        }

    }

    console.log(error);


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={submitHandler} className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4 w-100">


                <input
                    value={formData.email}
                    onChange={changeHandle}
                    name="email"
                    className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                    type="text"
                    placeholder="Email"
                />

                <span className="text-xs text-red-700">
                    {error.email?.[0]}
                </span>

                <input
                    value={formData.password}
                    onChange={changeHandle}
                    name="password"
                    className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                    type="password"
                    placeholder="Password"
                />

                <span className="text-xs text-red-700">
                    {error.password?.[0]}
                </span>


                <button
                    className=" bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-500 transition duration-300 font-bold"
                >
                    LOGIN
                </button>

            </form>

        </div>

    );
};

export default Login;

