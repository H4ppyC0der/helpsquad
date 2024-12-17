"use client";
import React, { useEffect, useState } from "react";
import { useAgentStore } from "@/store/agent-store";
import AgentSchedule from "@/components/agent-schedule/AgentSchedule";
import AgentName from "@/components/agent-name/AgentName";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useCalendarStore } from "@/store/calendar-store";

const Calendar = () => {
    const { agents } = useAgentStore();
    const { month, year, increaseMonth, decreaseMonth } = useCalendarStore();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="mt-5 border-2">
            <div className="grid grid-cols-3 items-center h-12 border-b-2">
                <IoIosArrowBack
                    onClick={() => {
                        console.log(month);
                        decreaseMonth();
                    }}
                    className=" justify-self-end hover:cursor-pointer font-bold text-xl"
                />
                <h1 className="text-center font-bold text-xl">
                    {months[month] + ", " + year}
                </h1>
                <IoIosArrowForward
                    onClick={() => {
                        console.log(month);
                        increaseMonth();
                    }}
                    className="justify-self-start hover:cursor-pointer font-bold text-xl"
                />
            </div>
            <div className="text-sm relative">
                <IoIosArrowBack className="hover:cursor-pointer absolute top-2 font-bold text-xl" />
                <div className="grid grid-cols-6 gap-2 mr-4">
                    {agents.map((user) => (
                        <AgentName key={user.id} data={user} />
                    ))}
                </div>
                <IoIosArrowForward className="absolute right-3 top-2 hover:cursor-pointer font-bold text-xl" />
                <div className="h-[85vh] overflow-y-auto grid grid-cols-6 gap-2">
                    {agents.map((user) => (
                        <AgentSchedule key={user.id} data={user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
