import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useMenuStore } from '~/pages';

import { sidebarVariants } from '~/utils/framer';

const links = ['About Us', 'Initiatives', 'Our Team', 'Reach out'];

const FloatingMenu = () => {
	const { open } = useMenuStore();

	const MenuItemVariants = (index: number): Variants => {
		return {
			hidden: {
				opacity: 0,
				x: 324,
			},
			visible: {
				opacity: 1,
				x: 0,
				transition: {
					type: 'tween',
					duration: 0.25,
					delay: 0.4 + 0.05 * index,
				},
			},
		};
	};
	return (
		<motion.div
			className='fixed z-[1000] h-screen w-full bg-white'
			variants={sidebarVariants}
			initial={false}
			animate={open ? 'open' : 'closed'}
			custom={1000}
		>
			<div className='flex h-full flex-col justify-end border-2 border-black p-8 py-16'>
				<div className='flex flex-col gap-12'>
					{links.map((link, index) => (
						<motion.div
							key={index}
							className='animateUnderline hover:text-primary w-fit cursor-pointer font-adieuRegular text-4xl font-semibold transition-all duration-300 ease-in-out hover:text-5xl sm:text-8xl sm:hover:text-9xl'
							variants={MenuItemVariants(index)}
							initial={false}
							animate={open ? 'visible' : 'hidden'}
						>
							{link}
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default FloatingMenu;
