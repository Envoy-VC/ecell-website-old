import React from 'react';
import { create } from 'zustand';

import { Navbar, FloatingMenu } from '~/components';
import { Hero, About } from '~/sections';

interface MenuState {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
	open: false,
	setOpen: (open: boolean) => set({ open }),
}));

const Home = () => {
	return (
		<main>
			<Navbar />
			<FloatingMenu />
			<Hero />
			<About />
		</main>
	);
};

export default Home;
