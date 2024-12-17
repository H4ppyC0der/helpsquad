import React from "react";
import { FaUsersCog } from "react-icons/fa";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
    return (
        <>
            <nav className="p-5">
                <p className="text-right text-red-600 font-semibold hover:cursor-pointer">
                    Sign out
                </p>
            </nav>
            <ul className="h-[80vh] grid grid-cols-2 place-items-center gap-5">
                <Link
                    href="/users"
                    className="justify-self-end flex flex-col justify-center items-center hover:cursor-pointer  border-2  w-28 h-28"
                >
                    <FaUsersCog className="text-5xl " />
                    <h2 className="text-center">Users</h2>
                </Link>

                <Link
                    href="/scheduler"
                    className="justify-self-start flex flex-col justify-center items-center hover:cursor-pointer border-2 w-28 h-28"
                >
                    <FaCalendarAlt className="text-5xl" />
                    <h2 className="text-center">Scheduler</h2>
                </Link>
            </ul>
        </>
    );
};

export default page;
