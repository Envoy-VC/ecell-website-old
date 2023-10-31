import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import BackgroundImage from '../../../public/bg-illustration.jpg';
import { HiCursorClick } from 'react-icons/hi';

// Variants
import { textVariants } from '~/utils/framer';

import Typewriter from 'typewriter-effect';

export default function MultiLayerParallax() {
	return (
		<div className='relative flex h-screen w-full snap-start justify-center overflow-hidden'>
			<motion.div className={`relative z-10 mt-[6rem] px-4`}>
				<div className='flex flex-col items-center gap-4 text-center font-adieuRegular font-black tracking-wider text-textPrimary'>
					<motion.div
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
									.typeString('IDEATE. ')
									.pauseFor(500)
									.typeString('INNOVATE. ')
									.pauseFor(500)
									.typeString('INCUBATE. ')
									.pauseFor(1000)
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
						<div className='text-[2.15rem] sm:text-[2.9rem] lg:text-6xl xl:text-7xl'>
							Entrepreneurship Cell
						</div>
						<div className='text-[2rem] sm:text-4xl lg:text-5xl xl:text-6xl'>
							NIT Agartala
						</div>
						<Link href='#about'>
							<motion.button
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.99 }}
								className='mx-auto mt-8 flex w-fit flex-row items-center gap-2 rounded-3xl border-2 border-black px-4 py-2 text-lg shadow-sm'
							>
								Explore
								<HiCursorClick />
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</motion.div>
			<Image
				src={BackgroundImage.src}
				alt='Background Illustration Illustration'
				className='absolute bottom-0 z-0 min-w-[1024px] translate-y-[40%] object-cover sm:min-w-[1280px] sm:translate-y-[50%] lg:min-w-[1300px] xl:min-w-[1536px]'
				width={1280}
				height={1280}
				priority={true}
			/>
		</div>
	);
}
