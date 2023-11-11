import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading, TimelineEvent, ImageCard } from '~/components';

import { Initiatives } from '~/utils/data';

const Initiative = () => {
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const targeRef = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: targeRef,
		offset: ['start end', 'end start'],
	});
	const scale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

	return (
		<section
			className='mx-auto mb-[8rem] flex h-full w-full flex-col gap-20 rounded-t-3xl bg-gray-100 px-8 py-24 font-raleway sm:px-16'
			id='initiatives'
		>
			<div className='mx-auto w-fit'>
				<SectionHeading title='Initiatives' />
			</div>
			<div ref={scrollRef}>
				<div className='flex h-full w-full flex-row-reverse justify-end md:gap-[4rem]  lg:flex-row lg:justify-center xl:gap-[8rem]'>
					<div className='hidden flex-col justify-around gap-24 lg:flex'>
						{Initiatives.map((initiative, index) => {
							if (index % 2 == 0) {
								return (
									<TimelineEvent
										{...initiative}
										key={index}
									/>
								);
							} else
								return (
									<ImageCard
										key={index}
										src={initiative.image}
										alt='abc'
									/>
								);
						})}
					</div>
					<div className='flex flex-col justify-around gap-24 lg:hidden'>
						{Initiatives.map((initiative, index) => (
							<TimelineEvent {...initiative} key={index} />
						))}
					</div>
					<div className='flex flex-row'>
						<motion.div
							className='z-[2] h-full w-[6px] origin-top overflow-y-hidden bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-transparent sm:w-[10px]'
							style={{ scaleY: scale }}
							ref={targeRef}
						/>

						<div className='relative h-full w-[6px] origin-top -translate-x-[6px] border-[1px] bg-gray-300 text-transparent sm:w-[10px] sm:-translate-x-[10px]' />
						<div className='relative z-[2] flex h-full -translate-x-[20px] flex-col justify-around sm:-translate-x-[31px]'>
							{Array(5)
								.fill(0)
								.map((_, index) => (
									<div
										key={index}
										className='top-5 h-5 w-5 translate-y-10 rounded-full border-4 border-gray-600 bg-gray-100 sm:h-8 sm:w-8 sm:border-[8px]'
										title={''}
									/>
								))}
						</div>
					</div>

					<div className='hidden w-fit flex-col justify-around gap-24 lg:flex'>
						{Initiatives.map((initiative, index) => {
							if (index % 2 == 0) {
								return (
									<ImageCard
										key={index}
										src={initiative.image}
										alt='abc'
									/>
								);
							} else
								return (
									<TimelineEvent
										{...initiative}
										key={index}
									/>
								);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Initiative;
