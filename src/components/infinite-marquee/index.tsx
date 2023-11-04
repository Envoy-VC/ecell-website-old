import React from 'react';
import { useTracker } from '@14islands/r3f-scroll-rig';
import { useTrackerMotionValue } from '~/hooks';
import { useScreen } from 'usehooks-ts';

import { useTransform, motion } from 'framer-motion';
import { Image } from 'antd';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
	children: React.ReactNode;
	reverse?: boolean;
	duration?: number;
}

const InfiniteMarquee = ({
	children,
	reverse = false,
	duration = 30,
	...props
}: Props) => {
	const track = React.useRef<HTMLDivElement | null>(null);
	const tracker = useTracker(track as React.MutableRefObject<HTMLDivElement>);
	const progress = useTrackerMotionValue({ tracker });
	const screen = useScreen();
	const width = screen?.width ?? 0;

	// differnt transform values for different screen sizes
	const getTransformValues = () => {
		if (width > 1280) return ['15vw', '-70vw'];
		else if (width > 1024) return ['25vw', '-200vw'];
		else if (width > 640) return ['40vw', '-280vw'];
		else return ['50vw', '-350vw'];
	};

	const x = useTransform(progress, [0, 1], getTransformValues(), {
		clamp: false,
	});
	return (
		<div className='overflow-hidden bg-black text-white' ref={track}>
			<div {...props} className=' animate-slider'>
				<motion.div
					className={'flex select-none gap-8'}
					style={{ x }}
				>
					<div className='flex min-w-full shrink-0 items-center justify-start gap-16 overflow-x-hidden will-change-transform'>
						{children}
					</div>
					<div className='flex min-w-full shrink-0 items-center justify-start gap-16 overflow-x-hidden will-change-transform'>
						{children}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default InfiniteMarquee;

interface MarqueeElementProps {
	title: string;
	image: string;
}

const MarqueeElement = ({ title, image }: MarqueeElementProps) => {
	return (
		<div className='flex flex-row items-center gap-4 text-[8rem] sm:gap-8'>
			<div className='flex w-full max-w-[10rem] sm:max-w-[18rem] items-center justify-center'>
				<Image
					src={image}
					className='marquee-item-shadow- max-h-[3.75rem] min-w-[10rem] rounded-full object-cover sm:max-h-[7rem] sm:min-w-[18rem]'
					alt={title}
					preview={false}
				/>
			</div>
			<div className='mb-2 text-[3rem] font-medium uppercase tracking-wide sm:text-[7rem]'>
				{title}
			</div>
		</div>
	);
};

export const MarqueeItems = () => {
	return (
		<>
			<MarqueeElement
				title='Ideation'
				image='https://img.freepik.com/free-photo/sharp-pencil-wooden-table-blank-paper-generated-by-ai_188544-21729.jpg'
			/>
			<MarqueeElement
				title='Bootstrapping'
				image='https://img.freepik.com/free-photo/abstract-yellow-rocket-ship-concept-cartoon-style_90220-1413.jpg'
			/>
			<MarqueeElement
				title='MVP'
				image='https://img.freepik.com/free-photo/teamwork-strategy-lead-business-success-generated-by-ai_188544-40981.jpg'
			/>
		</>
	);
};
