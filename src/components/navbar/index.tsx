import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

import { MenuToggle } from './menu-toggle';

const Navbar = () => {
	const router = useRouter();
	return (
		<nav className='fixed top-0 z-[10000] flex w-full bg-white'>
			<div className='flex w-full px-11 py-4 flex-row items-center justify-between'>
				<Image
					src={Logo.src}
					alt='E-Cell Logo'
					width={84}
					height={64}
					priority
					className='sm:w-18 w-16 cursor-pointer'
					onClick={() => router.push('/')}
				/>
				<MenuToggle />
			</div>
		</nav>
	);
};

export default Navbar;
