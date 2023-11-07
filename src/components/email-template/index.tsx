import * as React from 'react';
import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from '@react-email/components';

export interface EmailProps {
	firstName?: string;
	lastName?: string;
	email?: string;
	message?: string;
}

export const EmailTemplate = ({
	firstName = 'Richard',
	lastName = 'Hendricks',
	email = 'richard@piedpiper.in',
	message = 'hello',
}: EmailProps): React.JSX.Element => {
	const fullName = `${firstName} ${lastName}`;
	const previewText = `Read ${fullName}'s review`;
	return (
		<Html>
			<Head />
			<Preview>{previewText}</Preview>

			<Body style={main}>
				<Section style={main}>
					<Container style={container}>
						<Section style={logoContainer}>
							<Img
								src='https://i.ibb.co/sHhKwqt/Group-5.jpg'
								width='96'
								height='96'
								alt='E-Cell Logo'
							/>
						</Section>
						<Section>
							<Img
								src={`https://api.dicebear.com/7.x/fun-emoji/png?seed=${email}`}
								width='96'
								height='96'
								alt={fullName}
								style={userImage}
							/>
						</Section>
						<Section style={{ paddingBottom: '20px' }}>
							<Row>
								<Text style={heading}>
									Here's what {fullName} wrote
								</Text>
								<Text style={review}>{message}</Text>
							</Row>
							<Link href={`mailto:${email}`} style={emailLink}>
								{email}
							</Link>
						</Section>

						<Hr style={hr} />

						<Section>
							<Row>
								<Text style={footer}>
									SIC, APJ Abdul Kalam Block (CSE Building),
									NIT Agartala
								</Text>
							</Row>
						</Section>
					</Container>
				</Section>
			</Body>
		</Html>
	);
};

export default EmailTemplate;

const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '2rem auto',
	padding: '20px 0 48px',
	width: '580px',
};

const logoContainer = {
	marginBottom: '4rem',
};

const userImage = {
	margin: '0 auto',
	marginBottom: '16px',
	borderRadius: '50%',
};

const heading = {
	fontSize: '32px',
	lineHeight: '1.3',
	fontWeight: '700',
	color: '#484848',
};

const paragraph = {
	fontSize: '18px',
	lineHeight: '1.4',
	color: '#484848',
};

const review = {
	...paragraph,
	padding: '24px',
	backgroundColor: '#f2f3f3',
	borderRadius: '4px',
};

const emailLink = {
	fontSize: '14px',
	color: '#9ca299',
	textDecoration: 'underline',
};

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
};

const footer = {
	color: '#9ca299',
	fontSize: '14px',
	marginBottom: '10px',
};
