import React from 'react';
import { Form } from 'antd';
import { render } from '@react-email/render';
import { message } from 'antd';

import FormInput from './form-input';
import FormTextareaInput from './form-textarea';
import Button from '../custom-button';
import EmailTemplate from '../email-template';

interface FormState {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

const ContactForm = () => {
	const [form] = Form.useForm<FormState>();
	const [messageApi, contextHolder] = message.useMessage({ top: 84 });

	const [sending, setIsSending] = React.useState<boolean>(false);

	const onFinish = async (values: FormState) => {
		try {
			setIsSending(true);
			const html = render(<EmailTemplate {...values} />, {
				pretty: true,
			});
			const res = await fetch('/api/send-email', {
				method: 'POST',
				body: JSON.stringify({ ...values, html: html }),
			});
			const json = (await res.json()) as { success: boolean };
			if (!json.success) throw new Error('Something went wrong.');
			messageApi.success('Sent successfully!');
			form.resetFields();
		} catch (error) {
			console.log(error);
		} finally {
			setIsSending(false);
		}
	};
	return (
		<Form
			name='contact_form'
			initialValues={{ remember: true }}
			onFinish={onFinish}
			className='flex flex-col gap-1'
			form={form}
			disabled={sending}
		>
			{contextHolder}
			<div className='flex w-full flex-row gap-4'>
				<div className='flex w-full flex-col'>
					<div className='text-sm font-medium uppercase text-slate-600 sm:text-[1rem]'>
						First name
					</div>
					<Form.Item
						name='firstName'
						rules={[
							{
								required: true,
								message: 'First Name is required',
							},
						]}
					>
						<FormInput placeholder='Richard' />
					</Form.Item>
				</div>
				<div className='flex w-full flex-col'>
					<div className='text-sm font-medium uppercase text-slate-600 sm:text-[1rem]'>
						Last name
					</div>
					<Form.Item name='lastName'>
						<FormInput placeholder='Hendricks' />
					</Form.Item>
				</div>
			</div>
			<div>
				<div className='flex w-full flex-col'>
					<div className='text-sm font-medium uppercase text-slate-600 sm:text-[1rem]'>
						Email Address
					</div>
					<Form.Item
						name='email'
						rules={[
							{
								type: 'email',
								message: 'Not valid E-mail',
							},
							{
								required: true,
								message: 'E-mail is required',
							},
						]}
					>
						<FormInput placeholder='richard@piedpiper.in' />
					</Form.Item>
				</div>
			</div>
			<div>
				<div className='flex w-full flex-col'>
					<div className='text-sm font-medium uppercase text-slate-600 sm:text-[1rem]'>
						Message
					</div>
					<Form.Item
						name='message'
						rules={[
							{
								required: true,
								message: 'Message is required',
							},
						]}
					>
						<FormTextareaInput placeholder='Your message ' />
					</Form.Item>
				</div>
			</div>
			<div className='mx-auto my-4'>
				<Button type='submit'>Send</Button>
			</div>
		</Form>
	);
};

export default ContactForm;
