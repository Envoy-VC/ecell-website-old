import type { Variants } from 'framer-motion';

interface TextVariantProps {
	direction: 'x' | 'y';
	from?: number;
	to?: number;
	delay?: number;
	duration?: number;
}

export const textVariants = ({
	direction,
	from = 200,
	to = 0,
	delay = 0,
	duration = 0.4,
}: TextVariantProps): Variants => {
	const animateDirection = direction;
	return {
		hidden: {
			opacity: 0,
			[animateDirection]: from,
		},
		visible: {
			opacity: 1,
			[animateDirection]: to,
			transition: {
				type: 'tween',
				duration: duration,
				delay: delay,
			},
		},
	};
};

export const sidebarVariants: Variants = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 3 + 200}px at 100% 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 100% 0px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};
