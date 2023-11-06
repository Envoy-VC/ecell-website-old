import React from 'react';

import { Navbar } from '~/components';
import { TeamSection } from '~/sections';

import { FloatButton } from 'antd';

import { TechTeamDetails } from '~/utils/data';

const Home = () => {
	return (
		<main>
			<Navbar />
			<TeamSection {...TechTeamDetails} />
			<TeamSection {...{ ...TechTeamDetails, name: 'Design Team' }} />
			<div className='h-screen'></div>
			<FloatButton.BackTop visibilityHeight={1000} duration={650} />
		</main>
	);
};

export default Home;
