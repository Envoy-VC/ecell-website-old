import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'antd';
import { SectionHeading } from '~/components';

const Events = () => {
	return (
		<section
			className='mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-16 px-4 py-12 font-raleway text-slate-800 '
			id='events'
		>
			<div className='mx-auto flex flex-col gap-8 text-center md:px-8'>
				<div className='mx-auto w-fit'>
					<SectionHeading title='Events' />
				</div>
				<h2 className='max-w-3xl text-2xl font-bold md:text-4xl'>
					Where innovation and
					<span className='text-slate-400'>
						{' '}
						inspiration collide.
					</span>
				</h2>
			</div>
			<div className='flex flex-col'>
				<div className='mb-4 grid grid-cols-12 gap-4'>
					<BounceCard
						className='col-span-12 md:col-span-4'
						title='Event 1'
						image='https://img.freepik.com/free-photo/business-conference-event-background_1409-4882.jpg'
						cardCls='bg-gradient-to-br from-violet-400 to-indigo-400'
					/>
					<BounceCard
						className='col-span-12 md:col-span-8'
						title='Event 2'
						image='https://img.freepik.com/premium-photo/realistic-artwork-professionals-discussing-project-meeting-room-generative-ai_922357-8148.jpg?w=1456'
						cardCls='bg-gradient-to-br from-amber-400 to-orange-400'
					/>
				</div>
				<div className='grid grid-cols-12 gap-4'>
					<BounceCard
						className='col-span-12 md:col-span-8'
						title='Event 3'
						image='https://img.freepik.com/premium-photo/unveiling-modern-business-tapestry_397134-4071.jpg?w=1460'
						cardCls='bg-gradient-to-br from-green-400 to-emerald-400'
					/>
					<BounceCard
						className='col-span-12 md:col-span-4'
						title='Event 4'
						image='https://img.freepik.com/free-photo/young-adults-brainstorming-ideas-office-desk-generated-by-ai_188544-37446.jpg'
						cardCls='bg-gradient-to-br from-pink-400 to-red-400'
					/>
				</div>
			</div>
		</section>
	);
};

interface BounceCardProps extends React.ComponentPropsWithoutRef<'div'> {
	title: string;
	image: string;
	cardCls: string;
}

const BounceCard = ({ title, image, className, cardCls }: BounceCardProps) => {
	return (
		<motion.div
			whileHover={{ scale: 0.95, rotate: '-1deg' }}
			className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
		>
			<h3 className='mx-auto text-center text-3xl font-semibold'>
				{title}
			</h3>
			<div
				className={`absolute bottom-0 left-4 right-4 top-32 min-h-full translate-y-8 rounded-t-2xl px-[5px] pt-[7px] transition-transform duration-[250ms] group-hover:-translate-y-24 group-hover:rotate-[2deg] ${cardCls}`}
			>
				<div className='flex h-full w-full justify-center'>
					<Image
						src={image}
						preview={false}
						className='h-full min-h-[280px] !w-full max-w-[768px] rounded-t-[13px] object-cover'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Events;
