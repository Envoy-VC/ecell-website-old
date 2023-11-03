import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import BackgroundImage from '../../../public/bg-illustration.jpg';
import { HiCursorClick } from 'react-icons/hi';
import { HiRocketLaunch } from 'react-icons/hi2';
import { FaWandMagicSparkles } from 'react-icons/fa6';

// Variants
import { textVariants } from '~/utils/framer';

import Typewriter from 'typewriter-effect';

const ExploreIcons = [
	<HiCursorClick />,
	<HiRocketLaunch />,
	<FaWandMagicSparkles />,
];

export default function MultiLayerParallax() {
	const [exploreIcon, setExploreIcon] = React.useState(0);
	const typewriterRef = React.useRef<HTMLDivElement>(null);

	// Change Icon After each second
	React.useEffect(() => {
		const interval = setInterval(() => {
			setExploreIcon((prev) => (prev + 1) % ExploreIcons.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className='relative flex h-screen w-full snap-start justify-center overflow-hidden'>
			<motion.div className={`relative z-10 mt-[6rem] px-4`}>
				<div className='flex flex-col items-center gap-4 text-center font-adieuRegular font-black tracking-wider text-textPrimary'>
					<motion.div
						ref={typewriterRef}
						className='sm:text-xl'
						initial='hidden'
						animate='visible'
						variants={textVariants({
							direction: 'y',
							from: 50,
							delay: 0.25,
						})}
					>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString('RESIST THE OBVIOUS. ')
									.pauseFor(5000)
									.start();
							}}
						/>
					</motion.div>
					<motion.div
						className='flex flex-col gap-2'
						initial='hidden'
						animate='visible'
						variants={textVariants({
							direction: 'y',
							from: 50,
							delay: 0.6,
						})}
					>
						<div className='text-gradient animate-text text-[2.15rem] sm:text-[2.9rem] lg:text-6xl xl:text-7xl'>
							Entrepreneurship Cell
						</div>
						<div className='text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl'>
							NIT Agartala
						</div>
						<Link href='#about'>
							<motion.button
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.99 }}
								className='mx-auto mt-8 flex w-fit flex-row items-center gap-3 rounded-3xl border-2 border-black px-4 py-2 text-lg shadow-sm'
							>
								Explore
								{ExploreIcons[exploreIcon]}
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</motion.div>
			<Image
				src={BackgroundImage.src}
				alt='Background Illustration Illustration'
				className='absolute bottom-0 z-0 min-w-[1024px] translate-y-[40%] object-cover sm:min-w-[1280px] sm:translate-y-[55%] lg:min-w-[1300px] xl:min-w-[1536px]'
				width={1280}
				height={1280}
				priority={true}
			/>
		</div>
	);
}
