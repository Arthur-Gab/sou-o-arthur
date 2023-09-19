'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import {
	Root,
	Trigger,
	Portal,
	Content,
	Item,
	Separator,
} from '@radix-ui/react-dropdown-menu';

import { Menu, X } from 'lucide-react';

export function BurguerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLButtonElement | null>(null);

	function burguerShortCurt(event: KeyboardEvent) {
		if (event.altKey && event.key === '0') {
			menuRef.current?.focus();
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', burguerShortCurt);

		return () => {
			window.removeEventListener('keydown', burguerShortCurt);
		};
	}, []);

	return (
		<>
			<Root
				onOpenChange={() => {
					setIsOpen((prevState) => !prevState);
				}}
			>
				<Trigger
					aria-label="Abrir menu de navegação - Alt + 0 para focar no menu"
					className="rounded-full hover:bg-neutral-800 p-2 on-focus"
					ref={menuRef}
				>
					{isOpen ? (
						<X
							focusable="false"
							aria-hidden="true"
							className="text-primary"
						/>
					) : (
						<Menu
							focusable="false"
							aria-hidden="true"
							className="text-primary"
						/>
					)}
				</Trigger>
				<Portal>
					<Content className="w-screen flex flex-col items-center translate-y-6 px-2">
						<Item
							asChild
							className="rounded w-full text-center py-2 hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800"
						>
							<Link
								href={'#inicio'}
								aria-description="Navegue até a seção em que eu me introduzo"
							>
								Inicio
							</Link>
						</Item>
						<Separator className="bg-zinc-700 h-[1px] w-full" />
						<Item
							asChild
							aria-description="Navegue até a seção em que eu falo sobre mim"
							className="rounded w-full text-center py-2 hover:bg-zinc-800 focus:outline-none  focus:bg-zinc-800"
						>
							<Link href={'#about-me'}>Sobre mim </Link>
						</Item>
						<Separator className="bg-zinc-700 h-[1px] w-full" />
						<Item
							asChild
							aria-description="Navegue até a seção em que abordo minhas habilidades"
							className="rounded w-full text-center py-2 hover:bg-zinc-800 focus:outline-none  focus:bg-zinc-800"
						>
							<Link href={'#skills'}>O que eu faço</Link>
						</Item>
						<Separator className="bg-zinc-700 h-[1px] w-full" />
						<Item
							asChild
							className="rounded w-full text-center py-2 hover:bg-zinc-800 focus:outline-none  focus:bg-zinc-800"
						>
							<Link
								href={'#projects'}
								aria-description="Navegue até a seção em que eu coloco meus projetos em exibição"
							>
								Projetos
							</Link>
						</Item>
						<Separator className="bg-zinc-700 h-[1px] w-full" />
						<Item
							asChild
							className="rounded w-full text-center py-2 hover:bg-zinc-800 focus:outline-none  focus:bg-zinc-800"
						>
							<Link
								href={'#contact'}
								aria-description="Navegue até a seção de contatos para entrar em contato comigo"
							>
								Contato
							</Link>
						</Item>
					</Content>
				</Portal>
			</Root>
		</>
	);
}
