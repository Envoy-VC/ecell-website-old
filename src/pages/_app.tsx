import { type AppType } from 'next/dist/shared/lib/utils';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';
import Script from 'next/script';

import '@14islands/r3f-scroll-rig/css';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalCanvas style={{ zIndex: -1 }}>
				<ambientLight />
			</GlobalCanvas>
			<SmoothScrollbar disablePointerOnScroll={false}>
				{(bind) => (
					<div {...bind} className='h-screen'>
						<Component {...pageProps} />
					</div>
				)}
			</SmoothScrollbar>
			<Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js' />
		</>
	);
};

export default MyApp;
