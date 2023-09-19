import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Phone } from 'lucide-react';
import { BurguerMenu } from '@/components/ui/burguer-menu';
import { Separator } from '@radix-ui/react-dropdown-menu';
// import INICIO_BG from '@/assets/img/perfil.jpg';

export default function Home() {
	return (
		<>
			<section
				id="inicio"
				className="flex gap-4 justify-center items-center flex-col bg-fixed w-full h-screen"
			>
				<div>
					<p className="text-xl">Olá, eu sou o</p>
					<h1 className="text-primary">Arthur Gabriel</h1>
				</div>
				<em className="border-b-primary border-b-2">Desenvolvedor Front-End</em>
				<div className="flex gap-4">
					<button className="bg-black px-6 py-4 rounded-full text-primary border-primary on-focus hover:bg-neutral-800">
						Baixar CV
					</button>
					<button className="bg-black px-6 py-4 rounded-full text-primary border-primary on-focus flex gap-2 hover:bg-neutral-800">
						<Phone
							aria-hidden="true"
							focusable="false"
						/>
						Whatssap
					</button>
				</div>
			</section>
			<section
				id="about-me"
				className="flex justify-center items-center flex-col bg-fixed w-full h-screen"
			>
				<h1>Outra seção</h1>
			</section>
		</>
	);
}
