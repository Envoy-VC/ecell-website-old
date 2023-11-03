import React from 'react';
import { useMenuStore } from '~/stores';
import { motion, AnimatePresence } from 'framer-motion';

import FloatingMenu from '~/components/menu';

const Path = (props: any) => (
	<motion.path
		fill='transparent'
		strokeWidth='3'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
);

export const MenuToggle = () => {
	const { isOpen, setOpen } = useMenuStore();
	return (
		<>
			<div className='fixed right-0 z-[2] m-[1.5rem] flex h-12 w-12 items-center justify-center rounded-full bg-none bg-white cursor-pointer'>
				<button onClick={() => setOpen(!isOpen)}>
					<motion.svg
						width='28'
						height='28'
						viewBox='0 0 23 23'
						animate={isOpen ? 'open' : 'closed'}
						className='ml-[2px] mt-[3px] w-full max-w-[24px] sm:max-w-[28px]'
					>
						<Path
							variants={{
								closed: { d: 'M 2 2.5 L 20 2.5' },
								open: { d: 'M 3 16.5 L 17 2.5' },
							}}
						/>
						<Path
							d='M 2 9.423 L 20 9.423'
							variants={{
								closed: { opacity: 1 },
								open: { opacity: 0 },
							}}
							transition={{ duration: 0.1 }}
						/>
						<Path
							variants={{
								closed: { d: 'M 2 16.346 L 20 16.346' },
								open: { d: 'M 3 2.5 L 17 16.346' },
							}}
						/>
					</motion.svg>
				</button>
			</div>
			<AnimatePresence mode='wait'>
				{isOpen && <FloatingMenu />}
			</AnimatePresence>
		</>
	);
};
