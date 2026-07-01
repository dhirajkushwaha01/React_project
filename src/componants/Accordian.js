import React, { useState } from 'react';
import Listintems from './Listintems';

const Accordian = ({ title ,open, setOpen }) => {
  

    const showItemList = () => {
        setOpen();
    };
                                 
    return (
        <div className="my-1 shadow-md border border-gray-200 px-4 py-2 w-64 rounded-lg font-bold">
            <div className="flex justify-between">
                <h1>{title}</h1> 
            
                <button
                    onClick={showItemList}
                    className="bg-black text-white px-2 rounded-md font-mono font-bold"
                >
                    SHOW
                </button>
            </div>

            {open && <Listintems />}
        </div>
    );
};
                                                    
export default Accordian; 

