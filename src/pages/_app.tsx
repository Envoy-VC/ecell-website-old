import { type AppType } from 'next/dist/shared/lib/utils';
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';

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
		</>
	);
};

export default MyApp;
