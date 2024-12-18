import { create } from "zustand";
import { usersData } from "@/data/data";

export const useAgentStore = create((set) => ({
    currentFilter: "",
    agents: usersData,
    addAgent: (newAgent) =>
        set((state) => ({ agents: [...state.agents, newAgent] })),
    removeAgent: (agentID) =>
        set((state) => ({
            agents: state.agents.filter((agent) => agent.id !== agentID),
        })),
    clearSchedule: () => set({ agents: [] }),
    setFilter: (newFilter) => set({ currentFilter: newFilter }),
    clearFilter: () => set({ currentFilter: "" }),
}));
