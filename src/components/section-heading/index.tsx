import React from 'react';
import { motion, stagger, useAnimate, animate } from 'framer-motion';

interface SectionHeadingProps {
	title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
	const [scope, animate] = useAnimate();

	const onHover = () => {
		animate([
			['.letter', { y: -64 }, { duration: 0.2, delay: stagger(0.05) }],
			['.letter', { y: -4 }, { duration: 0.000001 }],
		]);
	};

	const splitSentence = (sentence: string) => {
		return sentence.split('').map((char) => {
			if (char === ' ') {
				return ' ';
			}
			return char;
		});
	};

	return (
		<div ref={scope} className='animateUnderline'>
			<span className='sr-only'>{title}</span>
			<motion.div
				className='block h-[3.75rem] overflow-hidden font-adieuRegular text-5xl font-bold leading-[3.75rem] text-textPrimary sm:text-6xl'
				aria-hidden
				onHoverStart={onHover}
			>
				{splitSentence(title).map((letter, index) => {
					if (letter === ' ') {
						return (
							<span
								className='inline-block w-4'
								key={`${letter}-${index}`}
							></span>
						);
					} else
						return (
							<span
								data-letter={letter}
								className='letter relative inline-block h-[3.75rem] leading-[3.75rem] after:absolute after:left-0 after:top-full after:h-[3.75rem] after:content-[attr(data-letter)]'
								key={`${letter}-${index}`}
							>
								{letter}
							</span>
						);
				})}
			</motion.div>
		</div>
	);
};

export default SectionHeading;
