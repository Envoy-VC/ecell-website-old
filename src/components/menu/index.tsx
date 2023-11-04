import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// Utils
import { menuSlide } from '~/utils/framer';

import SVGCurve from './curve';
import MenuPageItem from './link';

export interface LinkProps {
	title: React.ReactNode;
	href: string;
}

const links: LinkProps[] = [
	{
		title: 'Home',
		href: '',
	},
	{
		title: 'About Us',
		href: '#about',
	},
	{
		title: 'Events',
		href: '#events',
	},
	{
		title: 'Initiatives',
		href: '#initiatives',
	},
	{
		title: 'Our Team',
		href: '#team',
	},
	{
		title: 'Reach out',
		href: '#reach-out',
	},
];

const FloatingMenu = () => {
	const router = useRouter();

	const [selectedIndicator, setSelectedIndicator] = React.useState<string>(
		router.asPath.slice(1)
	);

	return (
		<motion.div
			className='z-1 fixed right-0 top-0 h-screen w-full max-w-sm bg-[#292929] text-white sm:max-w-xl'
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<div className='flex h-full flex-col justify-around gap-4 p-16 sm:p-24'>
				<div>
					<div className='mb-16 flex flex-col gap-2'>
						<div className='text-sm uppercase text-[#999999]'>
							Navigation
						</div>
						<div className='border-2 border-[#999999]' />
					</div>
					<div className='flex flex-col gap-6'>
						{links.map((link, index) => {
							return (
								<MenuPageItem
									key={index}
									data={{ ...link, index }}
									isActive={selectedIndicator == link.href}
									setSelectedIndicator={setSelectedIndicator}
								></MenuPageItem>
							);
						})}
					</div>
				</div>
				<div className='mx-auto flex w-full max-w-sm flex-row items-center justify-between gap-4 text-sm  font-medium'>
					<div>Instagram</div>
					<div>LinkedIn</div>
					<div>Twitter</div>
					<div>GitHub</div>
				</div>
			</div>
			<SVGCurve />
		</motion.div>
	);
};

export default FloatingMenu;
