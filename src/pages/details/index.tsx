import React from 'react';
import Image from 'next/image';
import elogo from '/public/Logoblue.png';
import Link from 'next/link';

const Details = () => {
	return (
		<section className='max-sm:bg-fit w-full bg-[url("https://free4kwallpapers.com/uploads/originals/2021/03/01/saturn-planet-illustration-wallpaper.jpg")] bg-cover p-10 max-sm:px-3 max-sm:py-5'>
			<nav className='flex w-full items-center justify-between '>
				<Image
					src={elogo}
					alt='club-logo'
					height={100}
					width={100}
					className='m-5'
				/>
				<Link href='/details/registration'>
					<button
						className='my-auto w-fit rounded-full bg-cyan-500 px-5 py-2 delay-200 duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500 hover:transition '
						type='submit'
					>
						<div className='text-xl font-bold text-white'>
							Register Now
						</div>
					</button>
				</Link>
			</nav>

			<div className='opacity-80 mx-auto shadow-2xl flex h-[100vh] w-full max-w-4xl rounded-2xl border-2 border-white bg-[#0A0233]'>
                <div className='flex flex-col gap-5 pl-16'>
                <div className='font-bold text-3xl underline text-white mt-5'>Template for Case study competition InsightX</div> 
               <span className='font-bold text-4xl text-white'>ERP</span>
                </div>
              
            </div>
		</section>
	);
};

export default Details;
