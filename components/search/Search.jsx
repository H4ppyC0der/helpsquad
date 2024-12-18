"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAgentStore } from "@/store/agent-store";
import { MagnifyingGlass, Oval } from "react-loader-spinner";

const Search = () => {
    const { agents, setFilter } = useAgentStore();
    const [cancelSearchDisplay, setCancelSearchDisplay] = useState("hidden");
    const [searchWord, setSearchWord] = useState("");
    const [listDisplay, setListDisplay] = useState("hidden");

    const handleSearch = (e) => {
        setSearchWord(e.target.value);
        setCancelSearchDisplay("block");
        setListDisplay("block");
    };

    const setFilteFn = (e) => {
        setFilter(e);
        setListDisplay("hidden");
    };

    return (
        <div className="grid grid-cols-2 mt-4 mb-2">
            <div className="relative">
                <IoIosCloseCircleOutline
                    onClick={() => {
                        setSearchWord(""), setCancelSearchDisplay("hidden");
                    }}
                    className={`${cancelSearchDisplay} absolute right-4 text-lg top-2 z-40`}
                />
                <input
                    className="border-slate-200 h-9 w-full rounded-full text-center bg-slate-100 relative focus:outline-slate-200"
                    placeholder="Search"
                    value={searchWord}
                    onChange={(e) => handleSearch(e)}
                    type="text"
                />
                {searchWord && (
                    <ul
                        className={`${listDisplay} absolute bg-slate-50 left-0 border-l-2 divide-y-2 border-r-2 border-b-2 w-full z-50`}
                    >
                        {agents.filter(
                            (agent) =>
                                agent.firstName
                                    .toLowerCase()
                                    .includes(searchWord.toLowerCase()) ||
                                agent.lastName
                                    .toLowerCase()
                                    .includes(searchWord.toLowerCase())
                        ).length === 0 ? (
                            <li className="py-2 px-4">No results found</li>
                        ) : (
                            agents
                                .filter(
                                    (agent) =>
                                        agent.firstName
                                            .toLowerCase()
                                            .includes(
                                                searchWord.toLowerCase()
                                            ) ||
                                        agent.lastName
                                            .toLowerCase()
                                            .includes(searchWord.toLowerCase())
                                )
                                .map((agent) => (
                                    <li
                                        key={agent.id}
                                        className="hover:cursor-pointer hover:bg-slate-100 py-2 px-4"
                                        value={agent.id}
                                        onClick={(e) =>
                                            setFilteFn(e.target.value)
                                        }
                                    >
                                        {agent.lastName +
                                            ", " +
                                            agent.firstName}
                                    </li>
                                ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;