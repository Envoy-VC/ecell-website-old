import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, Button } from '~/components';

const About = () => {
	return (
		<section
			className='mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col justify-center px-8 py-24'
			id='about'
		>
			<div className='mb-24 flex sm:justify-center'>
				<SectionHeading title='About Us' />
			</div>

			<div className='flex flex-col gap-8 md:flex-row'>
				<div className='flex flex-col gap-8'>
					<h3 className='font-raleway text-4xl font-semibold md:text-5xl'>
						Who are we?
					</h3>
					<p className='my-4 max-w-3xl font-raleway text-base text-slate-700 md:my-6 md:text-lg'>
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
					<Button>More</Button>
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

const squareData = Array(6)
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
			className='h-full w-full rounded-md'
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
		<div className='grid h-[32rem] w-full max-w-2xl grid-cols-2 grid-rows-3 gap-1 sm:h-[450px] sm:grid-cols-3 sm:grid-rows-2'>
			{squares.map((sq) => sq)}
		</div>
	);
};

export default About;
