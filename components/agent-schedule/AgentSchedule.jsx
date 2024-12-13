import React from "react";
import Daily from "../daily/Daily";

function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
}

const AgentSchedule = ({ data }) => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate(); //getting the current month end day
    const end = new Date(year, month, endDate).getDay();
    const enddateprev = new Date(year, month, 0).getDate(); //getting the previous month end date
    var dateStr = "05/23/2014";
    var day = getDayName(dateStr, "en");
    return (
        <div className="h-full flex flex-col justify-start gap-4 divide-y-[1px] divide-slate-400  shadow-lg shadow-slate-300 p-2 border-b-2 ">
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
