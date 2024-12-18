import { create } from "zustand";

export const useCalendarStore = create((set) => ({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),

    increaseMonth: () =>
        set((state) => ({
            month: state.month >= 11 ? 0 : state.month + 1,
            year: state.month >= 11 ? state.year + 1 : state.year,
        })),

    decreaseMonth: () =>
        set((state) => ({
            month: state.month <= 0 ? 11 : state.month - 1,
            year: state.month <= 0 ? state.year - 1 : state.year,
        })),
}));