import React from 'react';
import { useRouter } from 'next/router';
import { motion, Variants } from 'framer-motion';
import { useMenuStore } from '~/pages';

import { sidebarVariants } from '~/utils/framer';

interface LinkProps {
	label: React.ReactNode;
	href: string;
}

const links: LinkProps[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About Us',
		href: '#about',
	},
	{
		label: 'Initiatives',
		href: '#initiatives',
	},
	{
		label: 'Our Team',
		href: '#team',
	},
	{
		label: 'Reach out',
		href: '#reach-out',
	},
];

const FloatingMenu = () => {
	const router = useRouter();
	const { open, setOpen } = useMenuStore();

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
					delay: 0.15 + 0.05 * index,
				},
			},
		};
	};

	const handleLinkClick = (href: string) => {
		setOpen(false);
		setTimeout(() => {
			router.push(href);
		}, 1000);
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
							onClick={() => handleLinkClick(link.href)}
							key={index}
							className='animateUnderline w-fit cursor-pointer font-adieuRegular text-4xl font-semibold transition-all duration-300 ease-in-out hover:text-5xl hover:text-primary sm:text-8xl sm:hover:text-9xl'
							variants={MenuItemVariants(index)}
							initial={false}
							animate={open ? 'visible' : 'hidden'}
						>
							{link.label}
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default FloatingMenu;
