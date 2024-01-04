'use client';
import React from 'react';
import elogo from '/public/Logoblue.png';
import Image from 'next/image';

const handleSubmit = () => {};
const Registration = () => {
	return (
		<section className='w-full bg-[url("https://free4kwallpapers.com/uploads/originals/2021/03/01/saturn-planet-illustration-wallpaper.jpg")] bg-cover p-10 max-sm:px-3 max-sm:py-5'>
			<div>
				<Image
					src={elogo}
					alt='club-logo'
					height={100}
					width={100}
					className='m-5'
				/>
			</div>
			<div className='ml-5'>
				<span className='text-4xl font-bold text-[#50FAFB] max-sm:text-2xl'>
					Registrations are open!
				</span>
				<p className='font-bold text-white'>
					Seats are limited register asap.
				</p>
			</div>
			<div className='mx-auto w-full max-w-7xl'>
				<div>
					<form
						onSubmit={handleSubmit}
						className='mx-5 my-10 flex flex-col gap-16 sm:mx-10'
					>
						<label className='flex flex-col gap-5 border-white'>
							<span className='text-3xl font-bold text-white shadow-2xl max-sm:text-2xl'>
								*Team Name:
							</span>
							<input
								className='rounded-full border border-white bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl '
								placeholder='Enter Your Team Name'
								required
								type='text'
							/>
						</label>
						<label className='flex flex-col gap-5 border-white'>
							<span className='text-3xl font-bold text-white max-sm:text-2xl'>
								*Team Leader [Member_1]:
							</span>
							<div className='grid grid-cols-2 flex-col gap-10 max-lg:flex'>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Name
									</span>
									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Name'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Email ID
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Email ID'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Phone Number
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='+91'
										type='number'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*College
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='College Name'
										type='text'
									/>
								</div>
							</div>
						</label>
						<label className='flex flex-col gap-5 border-white'>
							<span className='text-3xl font-bold text-white max-sm:text-2xl'>
								*Team Member_2:
							</span>
							<div className='grid grid-cols-2 flex-col gap-10 max-lg:flex'>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Name
									</span>
									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Name'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Email ID
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Email ID'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Phone Number
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='+91'
										type='number'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*College
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='College Name'
										type='text'
									/>
								</div>
							</div>
						</label>
						<label className='flex flex-col gap-5 border-white'>
							<span className='text-3xl font-bold text-white max-sm:text-2xl'>
								*Team Member_3:
							</span>
							<div className='grid grid-cols-2 flex-col gap-10 max-lg:flex'>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Name
									</span>
									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Name'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Email ID
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='Enter Your Email ID'
										type='text'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*Phone Number
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='+91'
										type='number'
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<span className='ml-3 text-2xl font-bold text-white max-sm:text-xl'>
										*College
									</span>

									<input
										className='w-full rounded-full border border-white  bg-slate-900 p-2 text-lg text-white opacity-75 sm:p-3 sm:text-xl'
										required
										placeholder='College Name'
										type='text'
									/>
								</div>
							</div>
						</label>
						<button
							className='mx-auto mb-5 w-fit rounded-full bg-cyan-500 px-5 py-2 delay-200 duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500 hover:transition '
							type='submit'
						>
							<div className='text-xl font-bold text-white'>
								Submit
							</div>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Registration;
