import React from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import BackgroundImage from '../../../public/bg-illustration.webp';
import { HiCursorClick } from 'react-icons/hi';
import { HiRocketLaunch } from 'react-icons/hi2';
import { FaWandMagicSparkles } from 'react-icons/fa6';

// Variants
import { textVariants } from '~/utils/framer';

import Typewriter from 'typewriter-effect';
import clsx from 'clsx';

const ExploreIcons = [
	<HiCursorClick />,
	<HiRocketLaunch />,
	<FaWandMagicSparkles />,
];

export default function MultiLayerParallax() {
	const router = useRouter();
	const [exploreIcon, setExploreIcon] = React.useState(0);
	const typewriterRef = React.useRef<HTMLDivElement>(null);

	const onClick = () => {
		gsap.registerPlugin(ScrollToPlugin);
		gsap.to(window as object, {
			duration: 0.5,
			scrollTo: { y: '#about' },
		}).then((res) => router.replace('#about'));
	};

	// Change Icon After each second
	React.useEffect(() => {
		const interval = setInterval(() => {
			setExploreIcon((prev) => (prev + 1) % ExploreIcons.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);
	return (
		<section
			className='flex h-screen w-full snap-start flex-col overflow-hidden'
			id='hero'
		>
			<div className='mt-32 flex h-[50vh] flex-col items-center justify-center gap-4 text-center font-adieuRegular font-black tracking-wider text-textPrimary'>
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
								.typeString('RESIST THE OBVIOUS')
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
					<motion.button
						onClick={onClick}
						whileHover={{ scale: 1.04 }}
						whileTap={{ scale: 0.99 }}
						className='mx-auto mt-8 flex w-fit flex-row items-center gap-3 rounded-3xl border-2 border-black px-4 py-2 text-lg shadow-sm'
					>
						Explore
						{ExploreIcons[exploreIcon]}
					</motion.button>
				</motion.div>
			</div>
			<div className='h-[60vh]'>
				<Image
					src={BackgroundImage.src}
					height={1280}
					width={1280}
					alt='Background Image'
					className='h-full w-full object-cover'
				/>
			</div>
		</section>
	);
}
