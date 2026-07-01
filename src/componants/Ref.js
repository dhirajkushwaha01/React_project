import React from 'react'
import { useState, useRef } from 'react';

function Ref() {
    const [y, setY] = useState(0);
    let x = 0;
    const ref = useRef(0);
    const ref2 = useRef(null);

    const focusInputHandler = () => {
        ref2.current.focus();

    }

    return (
        <div className="max-w-4xl mx-auto border border-black mt-10">

            <button
                className='bg-yellow-500 p-2 m-2 border-2 border-orange-800 rounded-lg font-bold'
                onClick={() => {
                    x = x + 1;
                    console.log(x);
                    console.log(ref);
                }}
            >
                INCREMENT X
            </button>

            <h1 className="font-bold text-2xl ml-4">x={x}</h1>
            <h1 className="font-bold text-2xl ml-4">STATE Y={y}</h1>

            <button
                className="bg-yellow-500 p-2 m-2 border-2 border-orange-800 rounded-lg font-bold"
                onClick={() => {
                    setY(y + 1);
                }}
            >
                INCREMENT STATE Y
            </button>

            <h1 className="font-bold text-2xl ml-4">Ref = {ref.current}</h1>

            <button
                className="bg-yellow-500 p-2 m-2 border-2 border-orange-800 rounded-lg font-bold"
                onClick={() => {
                    ref.current = ref.current + 1;
                    console.log(ref.current);
                }}
            >
                INCREMENT REF
            </button>
            <br />
            <input ref={ref2} type="text" className="border border-black m-2 p-1" placeholder='Full Name' />
            <button onClick={focusInputHandler} className="bg-yellow-500 p-1 m-1 border-2 border-orange-800 rounded-lg font-bold">Click</button>
        </div>
    );
}

export default Ref;