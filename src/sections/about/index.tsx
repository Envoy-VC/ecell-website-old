import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<section className='mx-auto my-24 h-full w-full max-w-7xl px-8 py-12'>
			<div className='text-textPrimary mask-text mb-24 text-center font-adieuRegular text-6xl font-bold'>
				About Us
			</div>
			<div className='flex flex-col gap-8 md:flex-row'>
				<div>
					<h3 className='font-raleway text-4xl font-semibold md:text-5xl'>
						Who are we?
					</h3>
					<p className='font-raleway my-4 max-w-3xl text-base text-slate-700 md:my-6 md:text-lg'>
						The Entrepreneurship Cell is a non-profit organization
						run by the students of National Institute of Technology
						Agartala that aims at manifesting the latent
						entrepreneurial spirit of the young students. E-Cell
						aims at promoting the startup culture in Agartala as
						well as North-East India. With various undergoing
						projects, few successful startups, a lot of failures,
						and the flagship Carpediem E-Summit, E-Cell has
						transformed itself from a small community established by
						budding entrepreneurs in 2017 to a full-fledged
						organization with multi-talented like-minded people
						striving to solve the various problem with an
						entrepreneurial minsdset.
					</p>
					<button className='rounded bg-indigo-500 px-4 py-2 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95'>
						More
					</button>
				</div>
				<ShuffleGrid />
			</div>
		</section>
	);
};

const shuffle = (array: (typeof squareData)[0][]) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		// @ts-ignore
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

const squareData = Array(16)
	.fill(1)
	.map((_, index) => {
		return {
			id: index,
			src: `https://picsum.photos/200`,
		};
	});

const generateSquares = () => {
	return shuffle(squareData).map((sq) => (
		<motion.div
			key={sq.id}
			layout
			transition={{ duration: 1.5, type: 'spring' }}
			className='h-full w-full'
			style={{
				backgroundImage: `url(${sq.src})`,
				backgroundSize: 'cover',
			}}
		></motion.div>
	));
};

const ShuffleGrid = () => {
	const timeoutRef = React.useRef<any>(null);
	const [squares, setSquares] = React.useState(generateSquares());

	React.useEffect(() => {
		shuffleSquares();

		return () => clearTimeout(timeoutRef.current);
	}, []);

	const shuffleSquares = () => {
		setSquares(generateSquares());

		timeoutRef.current = setTimeout(shuffleSquares, 3000);
	};

	return (
		<div className='grid h-[450px] w-full max-w-lg grid-cols-4 grid-rows-4 gap-1'>
			{squares.map((sq) => sq)}
		</div>
	);
};

export default About;
