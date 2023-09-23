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
