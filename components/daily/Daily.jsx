import React from "react";

const Daily = ({ data, currentDate, dayOff }) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return dayOff.includes(
        currentDate.toLocaleDateString("en", { weekday: "long" })
    ) ? (
        <ul className="text-center text-sm py-2">
            <li className="bg-slate-100 text-slate-100">0</li>
            <li className="border-b-[1px]">{currentDate.toDateString()}</li>
            <li className="bg-slate-900 text-slate-100">OFF</li>
            <li className="bg-slate-100 text-slate-100">0</li>
        </ul>
    ) : (
        <ul className="text-center text-sm py-2">
            <li className="border-b-[1px]">{currentDate.toDateString()}</li>
            <li className="bg-lime-300">
                {
                    data[0][
                        currentDate.toLocaleDateString("en", {
                            weekday: "long",
                        })
                    ][0]
                }
            </li>
            <li className="bg-green-600 text-slate-100">BREAK</li>
            <li className="bg-lime-300">
                {" "}
                {
                    data[0][
                        currentDate.toLocaleDateString("en", {
                            weekday: "long",
                        })
                    ][1]
                }
            </li>
        </ul>
    );
};

export default Daily;
