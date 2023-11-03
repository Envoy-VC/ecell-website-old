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
		clipPath: `circle(${height * 3 + 200}px at 97.6% 4vh)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(0px at 96.5% 4vh)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const menuSlide: Variants = {
	initial: { x: 'calc(100% + 100px)' },

	enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

	exit: {
		x: 'calc(100% + 100px)',
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

export const slide: Variants = {
	initial: { x: 80 },

	enter: (i) => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),

	exit: (i) => ({
		x: 80,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.05 * i,
		},
	}),
};

export const scale: Variants = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};
