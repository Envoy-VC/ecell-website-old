import React from 'react';
import { CoreMemberCard } from '~/components/cards';

const CoreTeam = () => {
	return (
		<section className='mx-auto max-w-screen-2xl px-2 lg:py-8'>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-16 lg:grid-cols-4 xl:grid-cols-5'>
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
				<CoreMemberCard />
			</div>
		</section>
	);
};

export default CoreTeam;
