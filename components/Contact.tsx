'use client';
import Link from 'next/link';

export default function Contact() {
	return (
		<section id='contact' className='py-24 bg-ink'>
			<div className='flex flex-col items-center max-w-[1240px] mx-auto px-10'>
				<span className='block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-5 text-center reveal'>
					Get In Touch
				</span>
				<h2
					className='font-display font-extrabold tracking-tighter2 text-cream leading-[0.95] text-center mb-[72px] reveal delay-1'
					style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
				>
					Let&apos;s build
					<br />
					<em className='not-italic font-light text-cream/38'>
						something great.
					</em>
				</h2>
				<Link
					href='https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.'
					target='_blank'
					rel='noopener noreferrer'
					className='items-center px-7 py-[15px] rounded-[9px] bg-white text-orange font-bold text-[0.92rem] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-orange hover:text-white hover:-translate-y-0.5'
				>
					Start a Project Today ↗
				</Link>

				{/* Note */}
				<div className='mt-10 bg-lime/6 border border-lime/15 rounded-[10px] px-6 py-5'>
					<p className='font-display text-[0.92rem] font-bold text-lime mb-1.5'>
						✦ Currently accepting new projects
					</p>
					<p className='text-[0.82rem] text-cream/40 font-light leading-[1.65]'>
						We have limited capacity each quarter to ensure every
						client gets our full attention. Reach out early to
						secure your spot in our next sprint cycle.
					</p>
				</div>
			</div>
		</section>
	);
}
