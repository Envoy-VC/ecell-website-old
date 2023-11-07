import React from 'react';

import { Navbar } from '~/components';
import { Hero, About, Events, Initiative, Contact } from '~/sections';

import { FloatButton } from 'antd';

const Home = () => {
	return (
		<main className='wrapper'>
			<Navbar />
			<Hero />
			<About />
			<Events />
			<Initiative />
			<Contact />
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</main>
	);
};

export default Home;
