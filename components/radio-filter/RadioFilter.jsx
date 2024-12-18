"use client";
import React from "react";
import { useAgentStore } from "@/store/agent-store";

const RadioFilter = () => {
    const { agents, setFilter, clearFilter } = useAgentStore();
    return (
        <div className="flex gap-5 text-sm">
            <div className="flex flex-row align-middle gap-1">
                <input
                    type="radio"
                    id="all"
                    name="lob"
                    value="all"
                    defaultChecked={true}
                    onClick={(e) => clearFilter()}
                />
                <label htmlFor="all">All</label>
            </div>
            <div className="flex flex-row align-middle gap-1">
                <input
                    type="radio"
                    id="shared"
                    name="lob"
                    value="shared"
                    onClick={(e) => setFilter(e.target.value)}
                />
                <label htmlFor="shared">Shared</label>
            </div>
            <div className="flex flex-row align-middle gap-1">
                <input
                    type="radio"
                    id="bpo"
                    name="lob"
                    onClick={(e) => setFilter(e.target.value)}
                    value="bpo"
                />
                <label htmlFor="bpo">BPO</label>
            </div>
        </div>
    );
};

export default RadioFilter;
