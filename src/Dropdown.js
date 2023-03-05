import { useState } from "react";
import React from "react";


const Dropdown = () => {
   
    const [isActive, setIsActive] = useState(false);
    const showMenu = (e) => {
        setIsActive(!isActive)
    }
    const hideMenu = (e) => {
        setIsActive(false);
    }
    const options = ["On hover showing dropdown items",
                     "Dropdown component receive items array to display",
                     "On click on item, dropdown closes"];

    return (
        <div className="container">
        <div className="button" isActive={isActive}
            onMouseEnter={showMenu}
             onMouseLeave={hideMenu}
            >Select...
            <img className="image" alt="caret" src="https://cdn-icons-png.flaticon.com/512/271/271210.png"/>
       
        {isActive && (
         <div className="content">
            {options.map((option) => (
                <div className="item" 
                onClick={(e) => {
                      setIsActive(false);
                }}
            
                >
                    {option}
                </div>
            ))}
         </div>   
        )}
        </div>
        </div>

    );
};

export default Dropdown;