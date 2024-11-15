import { create } from 'zustand';

type Store = {
    activeID: number;
    setActiveID: (activeID: number) => void;
};

export const useStore = create<Store>()((set) => ({
    activeID: 1,
    setActiveID: (activeID) => set({ activeID }),
}));
