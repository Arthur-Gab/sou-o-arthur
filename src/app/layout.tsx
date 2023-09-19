import './globals.css';

import type { Metadata } from 'next';

import { poppins } from '@/styles/fonts';

export const metadata: Metadata = {
	title: 'Eu sou o Arthur',
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
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
