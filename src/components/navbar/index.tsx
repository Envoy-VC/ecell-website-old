import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

import { MenuToggle } from './menu-toggle';

const Navbar = () => {
	return (
		<nav className='fixed top-0 z-[10000] flex w-full'>
			<div className='flex w-full flex-row items-center justify-between p-5 px-8'>
				<Image
					src={Logo.src}
					alt='E-Cell Logo'
					width={84}
					height={64}
					priority
					className='w-16 sm:w-18 '
				/>
				<MenuToggle />
			</div>
		</nav>
	);
};

export default Navbar;
