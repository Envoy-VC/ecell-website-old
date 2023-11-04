import React from 'react';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';

interface Props {
	date: string;
	title: string;
	description: string;
	image: string;
}

const TimelineEvent = ({ date, title, description, image }: Props) => {
	const childRef = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress: eventScrollProgress } = useScroll({
		target: childRef,
		offset: ['start end', 'end start'],
	});
	const opacity = useTransform(
		eventScrollProgress,
		[0, 0.5, 1],
		[0.2, 1, 0.5],
		{
			ease: cubicBezier(0.8, 0, 0.2, 1),
		}
	);

	return (
		<motion.div
			className='relative flex flex-col-reverse items-start gap-16 font-raleway lg:flex-row'
			ref={childRef}
			style={{ opacity }}
		>
			<img
				src={image}
				alt='abc'
				className='max-h-84 w-full max-w-sm rounded-2xl object-cover sm:max-h-96 sm:max-w-md md:max-w-lg lg:hidden lg:max-w-xl'
			/>

			<div className='min-w-fit max-w-md text-slate-700'>
				<span className='text-[1rem] font-black tracking-widest opacity-80'>
					{date}
				</span>
				<h3 className='mb-2 text-4xl font-black tracking-wide'>
					{title}
				</h3>
				<p className='text-[1rem] sm:text-2xl'>{description}</p>
			</div>
		</motion.div>
	);
};

export default TimelineEvent;
