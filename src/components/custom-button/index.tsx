import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children }: ButtonProps) => {
	return (
		<motion.button
			className='button-gradient group relative w-fit overflow-hidden'
			whileTap={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
		>
			<div className='m-[2px] bg-white px-8 py-2'>
				<div className='button-gradient absolute inset-0 translate-x-[-100%] translate-y-[100%] rotate-45 scale-[260%] rounded-full transition-transform duration-[400ms] group-hover:translate-x-[0%] group-hover:translate-y-[0%]' />
				<h3 className='relative z-10 font-adieuRegular text-lg font-medium text-primary duration-300 group-hover:text-white'>
					{children}
				</h3>
			</div>
		</motion.button>
	);
};

export default Button;
