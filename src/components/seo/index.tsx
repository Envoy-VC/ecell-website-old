import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title='E-Cell NIT-A'
			description='Empowering young entrepreneurs at NIT Agartala. Nurturing innovation and fostering a thriving startup ecosystem.'
			openGraph={{
				url: 'https://www.ecellnita.co',
				title: 'E-Cell NIT-A',
				description:
					'Empowering young entrepreneurs at NIT Agartala. Nurturing innovation and fostering a thriving startup ecosystem.',
				images: [
					{
						url: 'https://i.ibb.co/WyGBvGT/OG.png',
						width: 1200,
						height: 630,
						alt: 'E-Cell NIT-A OG Image',
						type: 'image/png',
					},
				],
				siteName: 'E-Cell NIT-A',
			}}
			twitter={{
				handle: '@Envoy_1084',
				site: '@ecellnita',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export default SEO;
