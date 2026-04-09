'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
	{ href: '#about', label: 'About' },
	{ href: '#services', label: 'Services' },
	{ href: '#portfolio', label: 'Work' },
	{ href: '#process', label: 'Process' },
	{ href: '#testimonials', label: 'Clients' },
	{ href: '#contact', label: 'Contact' },
];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-[900] px-6 md:px-10 transition-all duration-300 ${
					scrolled
						? 'bg-cream/92 backdrop-blur-xl border-b border-ink/10 saturate-150'
						: 'bg-transparent'
				}`}
			>
				<div className='flex items-center justify-between h-[72px] w-full max-w-[1240px] mx-auto'>
					{/* Logo */}
					<Link
						href='#'
						className='flex items-center gap-2.5 no-underline group'
					>
						<div className='w-24 h-auto px-3 py-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
							<img
								src='/logo.png'
								alt='PragDev Logo'
								className='object-contain'
							/>
						</div>
						<span className='font-display font-extrabold text-[1.15rem] tracking-tighter3 text-orange transition-colors duration-300 group-hover:text-orange/90'>
							PragDev Softwares
						</span>
					</Link>

					{/* Desktop links */}
					<ul className='hidden md:flex items-center gap-0.5 list-none'>
						{links.map((l) => (
							<li key={l.href}>
								<Link
									href={l.href}
									/* Note: You might want to change text-ink-muted to text-cream/70 if your Hero background is dark */
									className='text-sm font-medium text-ink-muted hover:text-ink hover:bg-cream-2 px-4 py-2 rounded-[7px] transition-all duration-200 tracking-[-0.01em]'
								>
									{l.label}
								</Link>
							</li>
						))}
					</ul>

					{/* CTA */}
					<div className='hidden md:block'>
						<Link
							href='https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.'
							className='bg-ink text-cream text-sm font-semibold px-6 py-[11px] rounded-lg tracking-[-0.02em] transition-all duration-200 hover:bg-orange hover:-translate-y-0.5 inline-flex items-center gap-2'
						>
							Start a Project <span>↗</span>
						</Link>
					</div>

					{/* Hamburger */}
					<button
						className='md:hidden flex flex-col gap-[5px] bg-transparent border-none p-1'
						onClick={() => setOpen(!open)}
						aria-label='Toggle menu'
					>
						<span
							className={`w-[22px] h-0.5 bg-lime rounded-sm transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
						/>
						<span
							className={`w-[22px] h-0.5 bg-lime rounded-sm transition-all duration-300 ${open ? 'opacity-0' : ''}`}
						/>
						<span
							className={`w-[22px] h-0.5 bg-lime rounded-sm transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				className={`md:hidden fixed top-[72px] inset-x-0 bottom-0 bg-cream z-[890] px-6 pt-8 flex-col gap-1 border-t border-ink/10 transition-all duration-300 ${open ? 'flex' : 'hidden'}`}
			>
				{links.map((l) => (
					<Link
						key={l.href}
						href={l.href}
						onClick={() => setOpen(false)}
						className={`font-display text-[2rem] font-bold text-ink hover:text-orange py-3 border-b border-ink/10 tracking-tighter2 transition-colors duration-200 ${l.href === '#contact' ? 'text-orange' : ''}`}
					>
						{l.label} {l.href === '#contact' ? '↗' : ''}
					</Link>
				))}
			</div>
		</>
	);
}
