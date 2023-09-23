import React from 'react';
import { Hero, About } from '~/sections';

import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: '500',
});

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
		</main>
	);
};

export default Home;
