import { useState, useMemo } from "react";
import { nthPrime } from "../utils/constant";

const Memo = () => {
    const [num, setNum] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const cachedValue = useMemo(() => nthPrime(num), [num]);

    return (

        <div className={`${isDark && "bg-gray-900 text-white"} max-w-4xl mx-auto border border-gray-500 mt-10 shadow-md`}>

            <div className="mx-4"><button onClick={() => setIsDark(!isDark)} className=" bg-cyan-600 font-bold p-1 mx-2 my-2 rounded-lg border-2 border-cyan-700">Toggle</button>
                <h1 className="font-bold text-xl">use memo</h1>
                <input className="border bg-gray-400 border-black" type="number" onChange={(e) => setNum(Number(e.target.value))} />
                <h1> Number-{num} </h1>
                <h1>Prime Number is - {cachedValue}</h1>
            </div>

        </div>

    );
};

export default Memo;



