import './globals.css';

import type { Metadata } from 'next';

import { poppins } from '@/styles/fonts';
import { MainNavigation } from '@/components/MainNav';

export const metadata: Metadata = {
	title: 'Arthur Gabriel - Front-End Portifolio',
	description:
		'Bem-vindo ao meu cantinho virtual! Este é o lugar onde compartilho minha jornada criativa e profissional. Navegue pelo meu portfólio para explorar meu trabalho anterior e projetos atuais',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<MainNavigation />
				{children}
			</body>
		</html>
	);
}
