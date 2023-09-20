import Link from 'next/link';
import { Phone } from 'lucide-react';

// import INICIO_BG from '@/assets/img/perfil.jpg';

export default function Home() {
	return (
		<>
			<section
				id="inicio"
				className="flex gap-4 justify-center items-center flex-col bg-fixed w-full h-screen"
			>
				<div>
					<p className="text-xl text-primary-foreground">Olá, eu sou o</p>
					<h1 className="text-primary">Arthur Gabriel</h1>
					<em className=" text-neutral-300">Desenvolvedor Front-End</em>
				</div>
				<div className="flex gap-4">
					<button className="bg-black px-6 py-4 rounded-full text-primary border-primary on-focus hover:bg-neutral-800">
						Baixar CV
					</button>
					<Link
						href="https://wa.me/+5531995409388/}"
						target="_blank"
						className="bg-black px-6 py-4 rounded-full text-primary border-primary on-focus flex gap-2 hover:bg-neutral-800"
						aria-description="Inicie uma conversa comigo pelo whatssap"
					>
						<Phone
							aria-hidden="true"
							focusable="false"
						/>
						Whatssap
					</Link>
				</div>
			</section>
			<section
				id="about-me"
				className="flex justify-center gap-12 items-center flex-col bg-fixed w-full h-screen container mx-auto p-4"
			>
				<div className="relative">
					<p className="absolute opacity-5 max-sm:text-6xl sm:text-8xl text-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 block w-screen">
						SOBRE MIM
					</p>
					<h1 className="text-center relative before:border-b-2 before:border-b-primary before:w-6/12 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2">
						Um pouco sobre mim
					</h1>
				</div>

				<div className="text-center text-lg space-y-3 text-neutral-300">
					<p>
						Posso dizer que o meu ponto forte é o <em>Front-End</em>
					</p>
					<p>
						Gosto bastante de desenvolver interfaces, desde a prototipagem no{' '}
						<em>Figma</em> até a implementação da interface com <em>React.js</em> ou{' '}
						<em>Next.js</em>
					</p>
					<p>
						Mas meus planos é me tornar um <em>Back-End</em> e conseguir desenvolver
						aplicações completas, utilizando dos padrões{' '}
						<em>
							<abbr title="Arquitetura Model View Control">MVC</abbr>
						</em>{' '}
						e <em>API RESTful</em> ou <em>GraphQL</em>
					</p>
				</div>
			</section>
		</>
	);
}
