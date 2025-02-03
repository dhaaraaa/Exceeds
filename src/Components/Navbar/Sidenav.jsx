import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";

const Sidenav = ({ menu, setmenu }) => {
    const navitems = [
        { name: 'New Arrivals' },
        { name: 'Men' },
        { name: 'Women' },
        { name: 'Accessories' },
        { name: 'Store Locator' },
        { name: 'Contact Us' },
    ];

    const close = () => {
        setmenu(false)
    }
    return (
        <>

            <div className={`fixed top-0 z-50 w-60 h-screen ${menu ? 'left-0' : '-left-[400px] '} bg-gray-800transition-all duration-600 ease-in`}>
                <div className="flex items-center justify-between p-4 bg-gray-600 border-b border-b-white">
                    <p className="text-white text-xl ">Menu</p>
                    <button
                        className="text-white text-2xl"
                        onClick={close}
                    >
                        <MdOutlineClose />
                    </button>
                </div>

                <div className="bg-gray-600 h-full p-4">
                    <ul className="space-y-11">
                        {navitems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between text-white text-lg cursor-pointer p-2 border-b rounded"
                            >
                                <span>{item.name}</span>
                                <MdKeyboardArrowDown className="text-white" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 ${menu ? 'block' : 'hidden'}`} ></div>
        </>
    );
};

export default Sidenav;
