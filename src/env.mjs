import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {
		NEXT_PUBLIC_PASSWORD: z.string().min(1),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
