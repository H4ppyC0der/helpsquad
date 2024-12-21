import React from "react";
import Timezone from "../timezone/Timezone";

const Nav = () => {
    return (
        <nav className="px-4 py-2">
            <ul className="flex flex-col justify-center items-end">
                <li>
                    <Timezone />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
