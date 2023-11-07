import clsx from 'clsx';
import React from 'react';
import { SegmentMembers } from '~/components/cards';

interface TeamSegmentProps extends React.ComponentProps<'div'> {
	segmentName: string;
	backgroundImage: string;
}

const TeamSegment = ({
	segmentName,
	backgroundImage,
	className,
	...props
}: TeamSegmentProps) => {
	return (
		<div
			className={clsx(
				'segmentCardShadow relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between rounded-2xl'
			)}
			style={{
				objectFit: 'cover',
				width: '100%',
				backgroundImage: `url(${backgroundImage})`,
				transform: 'translateX(12px)',
				borderRadius: '12px',
			}}
		>
			<div className='mr-6 h-full py-8 !filter-none'>
				<SegmentMembers />
			</div>

			<div
				className={clsx(
					'w-full rounded-b-xl text-center text-xl font-semibold uppercase',
					className
				)}
				{...props}
			>
				{segmentName}
			</div>
		</div>
	);
};

const TeamSegments = () => {
	return (
		<div className='w-full'>
			<div className='mx-auto my-6 mb-16 flex w-fit select-none flex-row items-center gap-4 font-adieuRegular text-4xl font-medium text-slate-800 sm:text-5xl md:text-6xl'>
				Segments
			</div>
			<div className='mr-[24px] flex flex-col justify-between gap-8 px-2 sm:gap-16'>
				<TeamSegment
					segmentName='tech'
					backgroundImage='https://img.freepik.com/premium-vector/circuit-board-background-design-digital-technology_46250-58.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-gray-800 to-gray-500 text-white'
				/>
				<TeamSegment
					segmentName='design'
					backgroundImage='https://img.freepik.com/free-vector/cute-silver-floral-pattern-white-background_1017-4614.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-pink-500 to-purple-500 text-white'
				/>
				<TeamSegment
					segmentName='Social media'
					backgroundImage='https://img.freepik.com/premium-vector/seamless-pattern-with-social-media-vector-illustration-wallpaper_153454-5513.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-orange-400 to-yellow-400 text-white'
				/>
				<TeamSegment
					segmentName='Content'
					backgroundImage='https://img.freepik.com/premium-vector/seamless-pattern-with-paper-books-home-library-book-stacks-glasses-doodle-style-hand-drawn-illustration_192280-123.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-green-600 to-green-400 text-white'
				/>
				<TeamSegment
					segmentName='PR & Outreach'
					backgroundImage='https://img.freepik.com/premium-vector/vector-seamless-pattern-money-currency-business-finance-is-made-line-icons-perfect-web-sites-wraps-wallpapers-postcards_387335-450.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
				/>
				<TeamSegment
					segmentName='Startup'
					backgroundImage='https://img.freepik.com/free-vector/business-startup-with-businessman-flying-rocket_107791-9852.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
				/>
				<TeamSegment
					segmentName='Finance'
					backgroundImage='https://img.freepik.com/premium-vector/planning-seamless-line-pattern_118813-11087.jpg?size=626&ext=jpg&ga=GA1.1.388403771.1698754873&semt=ais'
					className='bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
				/>
			</div>
		</div>
	);
};

export default TeamSegments;
