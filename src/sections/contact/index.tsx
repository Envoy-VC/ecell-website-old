import React from 'react';
import Image from 'next/image';
import ContactImage from '../../../public/contact-image.webp';
import { ContactForm, SocialLinks } from '~/components';

const Contact = () => {
	return (
		<section className='flex h-screen items-center' id='reach-out'>
			<div className='contactFormShadow mx-auto flex w-full max-w-screen-xl flex-col rounded-xl lg:flex-row'>
				<div className='w-full basis-1/2'>
					<div className='object-cover px-3 lg:px-0'>
						<Image
							alt='Contact Image'
							src={ContactImage.src}
							priority
							width={500}
							height={600}
							className='h-[40vh] w-full rounded-t-xl object-cover lg:h-[70vh] lg:rounded-bl-xl lg:rounded-tr-[0px]'
						/>
					</div>
				</div>
				<div className='w-full basis-1/2'>
					<div className='flex h-full flex-col gap-8 p-8'>
						<div className='text-4xl font-semibold'>Contact Us</div>
						<ContactForm />
						<div className='mx-auto w-full max-w-[200px]'>
							<SocialLinks />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
