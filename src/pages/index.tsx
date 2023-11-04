import React from 'react';

import { Navbar } from '~/components';
import { Hero, About, Events, Initiative } from '~/sections';

import { FloatButton } from 'antd';

const Home = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Events />
			<Initiative />
			<div className='h-screen'></div>
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</main>
	);
};

export default Home;
