import React from 'react';
import { create } from 'zustand';

import { Navbar, FloatingMenu } from '~/components';
import { Hero, About } from '~/sections';

import { FloatButton } from 'antd';

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
		<>
			<Navbar />
			<FloatingMenu />
			<Hero />
			<About />
			<div className='h-screen'></div>
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</>
	);
};

export default Home;
