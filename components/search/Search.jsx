"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchStore } from "@/store/search-store";
import { useAgentStore } from "@/store/agent-store";
import { MagnifyingGlass, Oval } from "react-loader-spinner";

const Search = () => {
    const { setSearchResult } = useSearchStore();
    const { agents } = useAgentStore();
    // const [currentAgents, setCurrentAgents] = useState(agents);
    const [loading, setLoading] = useState(false);
    const [cancelSearchDisplay, setCancelSearchDisplay] = useState("hidden");
    const [resultList, setResultList] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const [searchResultList, setSearchResultList] = useState([]);

    const handleSearch = (e) => {
        setLoading(true);
        setSearchWord(e.target.value);
    };

    useEffect(() => {
        if (searchWord) {
            setResultList(() => [
                agents?.filter((agent) => {
                    agent.firstName
                        .toLowerCase()
                        .includes(searchWord.toLowerCase());
                }),
            ]);

            searchWord
                ? setCancelSearchDisplay("block")
                : setCancelSearchDisplay("hidden");
            setLoading(false);
            console.log(resultList);
        }
    }, [searchWord]);

    return (
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
                    className="absolute bg-slate-50 left-0 border-l-2 divide-y-2 border-r-2 border-b-2  w-full z-50"
                    style={
                        loading
                            ? { display: "flex", justifyContent: "center" }
                            : { display: "block" }
                    }
                >
                    {loading ? (
                        <MagnifyingGlass
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="magnifying-glass-loading"
                            wrapperStyle={{}}
                            wrapperClass="magnifying-glass-wrapper"
                            glassColor="#c0efff"
                            color="#ff8d00"
                        />
                    ) : resultList.length > 0 ? (
                        resultList.map((agent) => (
                            <li
                                key={agent.id}
                                className="hover:cursor-pointer hover:bg-slate-100 py-2 px-4"
                            >
                                {/* {agent.lastName + ", " + agent.firstName} */}
                                This feature is in progress
                            </li>
                        ))
                    ) : (
                        <h5>No results found!</h5>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Search;
