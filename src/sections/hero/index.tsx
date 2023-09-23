import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import Typewriter from 'typewriter-effect';

export default function MultiLayerParallax() {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

	return (
		<div
			ref={ref}
			className='relative flex min-h-[130vh] w-full snap-start justify-center overflow-y-hidden'
		>
			<motion.div
				style={{ y: textY }}
				className={`relative z-10 mt-[16rem] px-4`}
			>
				<div className='flex flex-col items-center gap-4 text-center font-adieuRegular font-black text-[#353944]'>
					<div className='text-[1rem] sm:text-lg'>
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
									.start();
							}}
						/>
					</div>
					<div className='text-[1.75rem] sm:text-5xl lg:text-6xl xl:text-8xl'>
						Entrepreneurship Cell
					</div>
					<div className='text-[1.75rem] sm:text-5xl lg:text-6xl xl:text-7xl'>
						NIT Agartala
					</div>
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
