import React from "react";

const Daily = ({ data, day, month, year, dayOff, currentTimezone }) => {
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
    const breakDuration = 30;
    const defUTC = Date.UTC(year, month, day, "00", "00", "00");
    const now_utc = Date.UTC(year, month, day, "00", "00", "00");
    const login = dayOff.includes(
        new Date(now_utc).toLocaleDateString("en", { weekday: "long" })
    )
        ? ""
        : new Date(
              Date.UTC(
                  year,
                  month,
                  day,
                  data[0][
                      new Date(defUTC).toLocaleDateString("en", {
                          weekday: "long",
                      })
                  ].in,
                  "00",
                  "00"
              )
          )
              .toLocaleString("en-US", {
                  timeZone: currentTimezone,
              })
              .split(",")[1]
              .split(" ");

    const workBreak = dayOff.includes(
        new Date(now_utc).toLocaleDateString("en", { weekday: "long" })
    )
        ? ""
        : new Date(
              Date.UTC(
                  year,
                  month,
                  day,
                  data[0][
                      new Date(defUTC).toLocaleDateString("en", {
                          weekday: "long",
                      })
                  ].break,
                  "00",
                  "00"
              )
          )
              .toLocaleString("en-US", {
                  timeZone: currentTimezone,
              })
              .split(",")[1]
              .split(" ");

    const logout = dayOff.includes(
        new Date(now_utc).toLocaleDateString("en", { weekday: "long" })
    )
        ? ""
        : new Date(
              Date.UTC(
                  year,
                  month,
                  day,
                  data[0][
                      new Date(defUTC).toLocaleDateString("en", {
                          weekday: "long",
                      })
                  ].out,
                  "00",
                  "00"
              )
          )
              .toLocaleString("en-US", {
                  timeZone: currentTimezone,
              })
              .split(",")[1]
              .split(" ");

    const loginTime = login[1]?.split(":");
    const breakTime = workBreak[1]?.split(":");
    const logoutTime = logout[1]?.split(":");
    loginTime?.pop();
    breakTime?.pop();
    logoutTime?.pop();
    console.log(breakTime);
    const afterBreak =
        breakTime &&
        breakTime[0] + ":" + String(Number(breakTime[1]) + breakDuration);
    console.log(afterBreak);
    const test = new Date(now_utc).toLocaleString("en-US", {
        timeZone: currentTimezone,
    });

    return dayOff.includes(
        new Date(now_utc).toLocaleDateString("en", { weekday: "long" })
    ) ? (
        <ul className="text-center text-sm py-2">
            <li className="bg-slate-100 text-slate-100">0</li>
            <li className="border-b-[1px] font-semibold">
                {new Date(now_utc).toDateString()}
            </li>
            <li className="bg-slate-900 text-slate-100">OFF</li>
            <li className="bg-slate-100 text-slate-100">0</li>
        </ul>
    ) : (
        <ul className="text-center text-sm py-2">
            <li className="border-b-[1px] font-semibold">
                {new Date(now_utc).toDateString()}
            </li>
            <li className="bg-lime-300">
                {loginTime.join(":") +
                    login[2] +
                    " - " +
                    breakTime.join(":") +
                    workBreak[2]}
            </li>
            <li className="bg-green-600 text-slate-100">BREAK</li>
            <li className="bg-lime-300">
                {afterBreak +
                    workBreak[2] +
                    " - " +
                    logoutTime.join(":") +
                    logout[2]}
            </li>
        </ul>
    );
};

export default Daily;
