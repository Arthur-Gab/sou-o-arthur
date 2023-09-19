import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { BurguerMenu } from './ui/burguer-menu';

export function MainNavigation() {
	return (
		<header className="p-4 bg-neutral-900 border-b-primary border-b-2 flex-none fixed w-screen">
			<nav className="flex justify-between items-center">
				{/* Logo */}
				<Link
					href="/"
					className="rounded-full focus:px-2 on-focus text-2xl"
				>
					Arthur.jsx
				</Link>

				{/* Social Medias */}
				<ul className="flex gap-4 items-center">
					<li className="rounded-full hover:bg-neutral-800 flex">
						<Link
							href="https://www.linkedin.com/in/art2354/"
							aria-label="Visite o meu perfil no Linkedin"
							target="_blank"
							className="rounded-full p-2 on-focus"
						>
							<Linkedin
								focusable="false"
								aria-hidden="true"
							/>
						</Link>
					</li>
					<li className="rounded-full hover:bg-neutral-800 flex">
						<Link
							href="https://www.linkedin.com/in/art2354/"
							aria-label="Visite o meu perfil no Github"
							target="_blank"
							className="rounded-full p-2 on-focus"
						>
							<Github
								focusable="false"
								aria-hidden="true"
							/>
						</Link>
					</li>
					<li>
						<BurguerMenu />
					</li>
				</ul>
			</nav>
		</header>
	);
}
