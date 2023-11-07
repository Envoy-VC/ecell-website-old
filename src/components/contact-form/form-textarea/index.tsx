import React from 'react';
import { Input, ConfigProvider } from 'antd';
import { TextAreaProps } from 'antd/es/input';

const FormTextareaInput = ({ ...props }: TextAreaProps) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					controlOutline: 'none',
					colorPrimaryHover: 'none',
					colorBgBase: '#f8f8f8',
					colorError: '#f0f0f0',
				},
				components: {
					Input: {
						hoverBorderColor: 'none',
						activeBorderColor: 'none',
						activeBg: '#f5f5f5',
					},
				},
			}}
		>
			<Input.TextArea
				{...props}
				size='large'
				className='!border-none'
				rows={6}
			/>
		</ConfigProvider>
	);
};

export default FormTextareaInput;
