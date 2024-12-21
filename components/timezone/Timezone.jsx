"use client";
import React, { useState } from "react";
import { useCalendarStore } from "@/store/calendar-store";

const Timezone = () => {
    const { currentTimezone, setCurrentTimezone } = useCalendarStore();
    const [searchTimezone, setSearchTimezone] = useState(currentTimezone);
    return (
        <>
            <p className="inline">Timezone:</p>
            <select
                className="text-center"
                placeholder="Asia/manila"
                type="text"
                defaultValue="Asia/manila"
                name="timezone"
                onChange={(e) => setCurrentTimezone(e.target.value)}
            >
                <option key="Asia/manila" value="Asia/manila" selected>
                    Asia/manila
                </option>
                {Intl.supportedValuesOf("timeZone").map((timezone) => (
                    <option key={timezone} value={timezone}>
                        {timezone}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Timezone;
