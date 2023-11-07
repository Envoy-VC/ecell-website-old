import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { CgMail } from 'react-icons/cg';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface SocialLinksProps {
	types: string[];
}

interface SocialIcon {
	Icon: IconType;
	link: string;
}

const SocialIcon = ({ Icon, link }: SocialIcon) => {
	return (
		<Link href={link} target='_blank'>
			<Icon
				size={28}
				className='text-slate-800 transition-all duration-300 ease-out hover:scale-[115%]'
			/>
		</Link>
	);
};

const SocialLinks = ({ types }: SocialLinksProps) => {
	return (
		<div className='flex flex-row items-center gap-3'>
			{types.map((type) => {
				switch (type) {
					case 'github':
						return <SocialIcon Icon={BsGithub} link='' />;
					case 'linkedin':
						return <SocialIcon Icon={BsLinkedin} link='' />;
					case 'twitter':
						return <SocialIcon Icon={RiTwitterXLine} link='' />;
					case 'email':
						return <SocialIcon Icon={CgMail} link='' />;
				}
			})}
		</div>
	);
};

const CoreMemberCard = () => {
	return (
		<div className='group relative flex h-full w-full flex-col sm:gap-2'>
			<div className='aspect-h-5 aspect-w-4 relative h-full w-full overflow-hidden'>
				<img
					src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
					alt=''
					className='quadraticEase h-full w-full rounded-sm object-cover group-hover:grayscale-[0.45]'
				/>
				<div className='quadraticEase w-full translate-y-[100%] bg-[rgba(229,231,235,0.5)] p-1 shadow-xl group-hover:translate-y-0'>
					<div className='flex h-full flex-row items-center justify-center'>
						<div className='flex h-full flex-row items-center justify-center gap-2'>
							<SocialLinks types={['github', 'linkedin']} />
						</div>
					</div>
				</div>
				<div className='absolute left-[100%] h-14 w-14 -translate-x-[50%] -translate-y-[50%] rotate-45 bg-white sm:h-20 sm:w-20'></div>
			</div>

			<div className='text-lg font-medium sm:text-xl'>
				Montel Alexender
			</div>
			<div className='text-sm font-medium uppercase text-gray-500 sm:text-[1rem]'>
				Web Developer
			</div>
		</div>
	);
};

export default CoreMemberCard;
