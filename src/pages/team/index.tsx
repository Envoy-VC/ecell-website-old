import React from 'react';
import { FloatButton } from 'antd';

import { CoreTeam } from '~/sections';

import { Navbar } from '~/components';

// Icons
import { MdRocketLaunch } from 'react-icons/md';

const Team = () => {
	return (
		<main>
			<Navbar />
			<div className='pt-24 pb-12'>
				<div className='mx-auto my-6 flex w-fit select-none flex-row items-center gap-4 font-adieuRegular text-4xl font-medium text-slate-800 sm:text-5xl md:text-6xl'>
					Meet our team
					<MdRocketLaunch className='mt-2 text-4xl text-slate-800 sm:text-5xl md:text-6xl' />
				</div>
			</div>
			<CoreTeam />
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</main>
	);
};

export default Team;
