import { create } from 'zustand';

interface State {
	isOpen: boolean;
}

interface Actions {
	setOpen: (open: boolean) => void;
}

export const useMenuStore = create<State & Actions>((set) => ({
	isOpen: false,
	setOpen: (open: boolean) => set({ isOpen: open }),
}));
