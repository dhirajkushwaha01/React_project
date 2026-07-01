import React, { useState } from 'react';
import Accordian from "./Accordian";
const Men = () => {

    const [open, setOpen] = useState(null);
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h1 className="font-bold text-xl">FILTER OPTIONS</h1>

            {["GENDER", "GADGETS", "TOYS", "BRAND"].map((title, index) => (
                // this is controlled component
                <Accordian

                    key={index}
                    title={title}
                    open={index === open? true : false} 
                    // setOpen = {()=> setOpen(index)} 
                    setOpen={() => setOpen(open === index ? null : index)}
                />
            ))
            }
            
        </div>

    );

};
export default Men;


