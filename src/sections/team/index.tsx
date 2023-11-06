import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import TeamMemberCard from '~/components/team-member';

import { TeamType } from '~/utils/data';

const TeamSection = ({ name, members }: TeamType) => {
	const targetRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const [first, second] = name.split(' ');

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

	return (
		<section ref={targetRef} className='relative h-[300vh]'>
			<div className='sticky top-0 flex h-screen items-center overflow-hidden'>
				<motion.div
					style={{ x }}
					className='font-magionaOutline flex min-w-max flex-row gap-[12vw] font-extralight'
				>
					<div className='flex flex-col justify-center text-[6rem] leading-[0.95] md:text-[14rem] '>
						<div>{first}</div>
						<div className='pl-[3rem] md:pl-[4rem]'>{second}</div>
					</div>
					<div className='flex flex-row gap-[8vw]'>
						{members.map((member, index) => {
							return (
								<TeamMemberCard data={member} index={index} />
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TeamSection;
