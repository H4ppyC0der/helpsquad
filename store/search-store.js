import { create } from "zustand";

export const useSearchStore = create((set) => ({
    searchResult: [],
    setSearchResult: (result) => set({ searchResult: result }),
}));
