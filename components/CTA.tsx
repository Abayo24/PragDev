import Link from 'next/link';

export default function CTA() {
	return (
		<section id='cta' className='bg-orange relative overflow-hidden'>
			{/* Ghost text */}
			<span
				className='text-stroke-white-soft absolute right-[-40px] top-1/2 -translate-y-[52%] font-display font-black tracking-tightest leading-none pointer-events-none select-none whitespace-nowrap'
				style={{ fontSize: '20vw' }}
				aria-hidden
			>
				BUILD
			</span>

			<div className='max-w-[1240px] mx-auto px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-16 py-20 flex-wrap reveal'>
					<h2
						className='font-display font-extrabold tracking-tighter2 text-white leading-[0.95] relative z-10'
						style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
					>
						Your next product
						<br />
						starts with a
						<br />
						<em className='not-italic font-light opacity-70'>
							conversation.
						</em>
					</h2>

					<div className='relative z-10 flex flex-col gap-3.5 items-start lg:items-end'>
						<p className='text-[0.9rem] text-white/70 max-w-[260px] font-light leading-[1.65] lg:text-right'>
							Whether you have a detailed spec or just a rough
							idea — we'll help you figure out what to build and
							how to win.
						</p>
						<Link
							href='https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] bg-white text-orange font-bold text-[0.92rem] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-ink hover:text-white hover:-translate-y-0.5'
						>
							Start a Project Today ↗
						</Link>
						<Link
							href='mailto:pragdev.softwares@gmail.com'
							className='inline-flex items-center gap-2.5 px-7 py-[15px] rounded-[9px] border border-white/35 text-white font-semibold text-[0.92rem] transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5'
						>
							pragdev.softwares@gmail.com
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
