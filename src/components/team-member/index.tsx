import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';
import { cardFlip } from '~/utils/framer';
import { TeamMember } from '~/utils/data';

interface Props {
	index: number;
	data: TeamMember;
}

const TeamMemberCard = ({ data, index }: Props) => {
	const { name, role, image, socials } = data;
	const [revealed, setRevealed] = React.useState<boolean>(false);

	const onClick = () => setRevealed((prev) => !prev);

	return (
		<div
			className={clsx(
				'flex h-[75vh] flex-col',
				index % 2 === 0 ? 'justify-start' : 'justify-end'
			)}
		>
			<div className='flex flex-col gap-4 font-raleway'>
				<div className='flex flex-row items-center gap-4 font-adieuRegular text-xl font-bold sm:text-3xl'>
					<div className='text-3xl text-gray-300 sm:text-5xl'>{`0${
						index + 1
					}`}</div>
					<div className='text-slate-700'>{name}</div>
				</div>
				<div className='flex flex-col gap-4'>
					<LayoutGroup>
						<AnimatePresence mode='wait'>
							<motion.div
								className='aspect-w-9 aspect-h-12 m-1 flex aspect-square w-[326px] sm:w-[400px]'
								onClick={onClick}
								variants={cardFlip}
								initial='initial'
								animate={revealed ? 'animate' : 'initial'}
								exit={revealed ? 'exit' : 'initial'}
							>
								{!revealed ? (
									<img
										src={image}
										className='object-cover'
										style={{ rotate: '180deg y' }}
									/>
								) : (
									<div className='border-2 p-4 rounded-md'>aaa</div>
								)}
							</motion.div>
						</AnimatePresence>
					</LayoutGroup>

					<div className='text-2xl font-medium'>{role}</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
