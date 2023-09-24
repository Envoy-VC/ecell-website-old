import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children }: ButtonProps) => {
	return (
		<motion.button
			className='group relative w-fit overflow-hidden border-[2px] border-primary bg-white px-8 py-2'
			whileTap={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
		>
			<div className='button-gradient absolute inset-0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-[260%] rounded-full transition-transform duration-300 group-hover:translate-x-[0%] group-hover:translate-y-[0%]' />
			<h3 className='relative z-10 font-adieuRegular text-lg font-medium text-primary duration-300 group-hover:text-white'>
				{children}
			</h3>
		</motion.button>
	);
};

export default Button;
