import type { Variants } from 'framer-motion';

interface TextVariantProps {
	y: number;
	delay?: number;
	duration?: number;
}

export const textVariants = ({
	y,
	delay,
	duration,
}: TextVariantProps): Variants => {
	return {
		hidden: {
			opacity: 0,
			y: y || 200,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'tween',
				duration: duration || 0.4,
				delay: delay || 0,
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
