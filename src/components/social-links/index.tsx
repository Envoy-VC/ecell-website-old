import React from 'react';
import Link from 'next/link';
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';

import { IconBaseProps, IconType } from 'react-icons';
import clsx from 'clsx';

interface SocialItemProps extends IconBaseProps {
	href: string;
	Icon: IconType;
	isMenu: boolean;
}

const SocialItem = ({
	href,
	Icon,
	isMenu,
	className,
	...props
}: SocialItemProps) => {
	return (
		<Link href={href} target='_blank'>
			<Icon
				size={28}
				className={clsx(
					'transition-all duration-300 ease-out hover:scale-[115%]',
					className,
					isMenu ? 'text-gray-200' : 'text-gray-600 '
				)}
				{...props}
			/>
		</Link>
	);
};
interface Props {
	isMenu?: boolean;
}

const SocialLinks = ({ isMenu = false }: Props) => {
	return (
		<div className='flex flex-row justify-between'>
			<SocialItem
				Icon={BsLinkedin}
				href='https://www.linkedin.com/company/ecellnita'
				size={22}
				isMenu={isMenu}
			/>
			<SocialItem
				Icon={RiTwitterXLine}
				href='https://twitter.com/ecellnita'
				size={22}
				isMenu={isMenu}
			/>
			<SocialItem
				Icon={BsInstagram}
				href='https://www.instagram.com/ecellnita/'
				size={22}
				isMenu={isMenu}
			/>
			<SocialItem
				Icon={BsFacebook}
				href='https://www.facebook.com/ecellnita/'
				size={22}
				isMenu={isMenu}
			/>
		</div>
	);
};

export default SocialLinks;
