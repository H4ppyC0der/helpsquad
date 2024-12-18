import React from "react";
import { useAgentStore } from "@/store/agent-store";
import UserTable from "@/components/user-table/UserTable";

const page = () => {
    return (
        <main className="p-10">
            <UserTable />
        </main>
    );
};

export default page;