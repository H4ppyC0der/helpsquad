import React from "react";
import Daily from "../daily/Daily";
import { useCalendarStore } from "@/store/calendar-store";

const AgentSchedule = ({ data }) => {
    const { month, year } = useCalendarStore();
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate(); //getting the current month end day
    const end = new Date(year, month, endDate).getDay();
    const enddateprev = new Date(year, month, 0).getDate(); //getting the previous month end date
    var dateStr = "05/23/2014";
    return (
        <div className="h-full flex flex-col justify-start gap-4 divide-y-2 divide-slate-200  shadow-lg shadow-slate-300 p-2 border-b-2 ">
            {Array.from(Array(endDate)).map((e, num) => (
                <Daily
                    key={num}
                    data={data.schedule}
                    currentDate={new Date(year, month, num + 1)}
                    dayOff={data.dayOff}
                />
            ))}
        </div>
    );
};

export default AgentSchedule;
