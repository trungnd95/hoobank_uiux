import React, { useState } from 'react';

import { close, logo, menu } from "../assets";
import { navLinks } from '../constants';

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <div className="w-full flex items-center justify-between navbar py-6">
            <img src={logo} alt="Logo" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li 
                        key={nav.id} 
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length ? "mr-0" : "mr-10"} text-white`} >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))
                }
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={menuToggle ? close : menu} 
                    alt="Menu Icon" 
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setMenuToggle(prev => !prev)}
                    />
                <div className={`${menuToggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li 
                                key={nav.id} 
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length ? "mr-0" : "mb-4"} text-white`} >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar