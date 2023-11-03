import React from 'react';

import { Navbar } from '~/components';
import { Hero, About } from '~/sections';

import { FloatButton } from 'antd';

const Home = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<div className='h-screen'></div>
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</main>
	);
};

export default Home;
