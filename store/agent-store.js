import { create } from "zustand";
import { usersData } from "@/data/data";

export const useAgentStore = create((set) => ({
    agents: usersData,
    addAgent: (newAgent) =>
        set((state) => ({ agents: [...state.agents, newAgent] })),
    removeAgent: (agentID) =>
        set((state) => ({
            agents: state.agents.filter((agent) => agent.id !== agentID),
        })),
    clearSchedule: () => set({ agents: [] }),
}));
