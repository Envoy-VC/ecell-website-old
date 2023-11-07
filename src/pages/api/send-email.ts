import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '~/env.mjs';
import nodemailer from 'nodemailer';
import { EmailProps } from '~/components/email-template';

interface ExtendedEmailProps extends EmailProps {
	html: string;
}

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'envoy1084@gmail.com',
		pass: env.NEXT_PUBLIC_PASSWORD,
	},
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	const body = JSON.parse(req.body) as ExtendedEmailProps;

	switch (method) {
		case 'POST': {
			const options = {
				from: body.email!,
				to: 'envoy1084@gmail.com',
				subject: 'Contact',
				html: body.html,
			};

			const data = await transporter.sendMail(options);
			if (data.accepted.length > 0) {
				return res.status(200).send({ success: true });
			} else {
				return res.status(400).send({ success: false });
			}
		}
		default:
			res.setHeader('Allow', ['POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};

export default handler;
