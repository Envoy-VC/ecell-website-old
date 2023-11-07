import React from 'react';
import { Input, ConfigProvider, InputProps } from 'antd';

const FormInput = ({ ...props }: InputProps) => {
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
			<Input {...props} size='large' className='!border-none' />
		</ConfigProvider>
	);
};

export default FormInput;
