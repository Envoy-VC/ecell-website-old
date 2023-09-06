import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {
		// NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
