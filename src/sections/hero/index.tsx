import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Variants
import { textVariants } from '~/utils/framer';

import Typewriter from 'typewriter-effect';

export default function MultiLayerParallax() {
	const typewriterRef = React.useRef<HTMLElement>(null);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

	return (
		<div
			ref={ref}
			className='relative flex min-h-[130vh] w-full snap-start justify-center overflow-y-hidden'
		>
			<motion.div
				style={{ y: textY }}
				className={`relative z-10 mt-[16rem] px-4`}
			>
				<div className='text-textPrimary flex flex-col items-center gap-4 text-center font-adieuRegular font-black tracking-wider'>
					<motion.div
						className='text-[1rem] sm:text-lg'
						initial='hidden'
						animate='visible'
						variants={textVariants({
							y: 100,

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
							y: 200,
							delay: 0.6,
						})}
					>
						<div className='text-[2.15rem] sm:text-5xl lg:text-6xl xl:text-8xl'>
							Entrepreneurship Cell
						</div>
						<div className='text-[2rem] sm:text-5xl lg:text-6xl xl:text-7xl'>
							NIT Agartala
						</div>
					</motion.div>
				</div>
			</motion.div>

			<motion.div
				className='absolute inset-0 z-0'
				style={{
					y: backgroundY,
				}}
			>
				<Image
					src='/hero.webp'
					alt='Hero Image'
					width={1920}
					height={1080}
					className='bottom-0 h-screen w-full object-cover'
				/>
			</motion.div>
		</div>
	);
}
