import React from 'react';
import { Hero } from '~/sections';

const Home = () => {
	return (
		<main>
			<Hero />
			<div className='min-h-[100vh] snap-start snap-always bg-red-200'></div>
		</main>
	);
};

export default Home;
