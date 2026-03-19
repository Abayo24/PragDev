import Link from 'next/link';

const features = [
	{
		num: '01',
		title: 'Clean, Scalable Architecture',
		desc: 'We write code your future team can maintain and extend. Well-structured, documented, production-grade software that grows with your business and never becomes a liability.',
	},
	{
		num: '02',
		title: 'User-First Design Thinking',
		desc: 'Every decision starts with your end user in mind. We design products that feel effortless — because better UX translates directly to higher retention and more revenue.',
	},
	{
		num: '03',
		title: 'Fast, Predictable Delivery',
		desc: "Focused sprints, clear milestones, weekly demos. You always know what's being built, when it ships, and what comes next. No surprises, no scope creep, no excuses.",
	},
	{
		num: '04',
		title: 'Reliable Post-Launch Support',
		desc: "We don't disappear after go-live. Our support packages keep your product at peak performance — monitoring, updates, and a team that's always just a message away.",
	},
];

const ctaLinks = [
	{ href: 'https://wa.me/254769622996?text=Hello!%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20start%20a%20new%20project%20with%20you.', label: 'Start a conversation' },
	{ href: '#portfolio', label: 'Browse our portfolio' },
	{ href: '#process', label: 'See how we work' },
];

export default function WhyUs() {
	return (
		<section id='why' className='py-24 bg-cream-2 overflow-hidden'>
			<div className='max-w-[1240px] mx-auto px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center'>
					{/* Left */}
					<div className='reveal'>
						<span className='block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-5'>
							Why PragDev
						</span>
						<h2
							className='font-display font-extrabold tracking-tighter2 leading-[1.05] mb-7'
							style={{ fontSize: 'clamp(2rem, 3.8vw, 3.6rem)' }}
						>
							The standard we
							<br />
							<em className='not-italic font-light'>
								hold ourselves to
							</em>
						</h2>
						<p className='text-ink-muted font-light leading-[1.85] mb-10'>
							We measure our success by your outcomes. Quality
							code, on-time delivery, and reliable partnership —
							every single time, without exception.
						</p>

						<div className='flex flex-col gap-3'>
							{ctaLinks.map((l) => (
								<Link
									key={l.href}
									href={l.href}
									className='group flex items-center justify-between gap-5 px-6 py-[18px] border border-ink/12 rounded-lg bg-cream hover:bg-ink transition-all duration-200'
								>
									{/* Label: Changes color when group is hovered */}
									<span className='font-semibold text-[0.92rem] text-ink group-hover:text-cream transition-colors duration-200'>
										{l.label}
									</span>

									{/* Icon: Changes background and text when group is hovered */}
									<div className='w-9 h-9 rounded-lg bg-cream-2 flex items-center justify-center text-[1rem] text-ink transition-all duration-200 group-hover:bg-orange group-hover:text-white'>
										↗
									</div>
								</Link>
							))}
						</div>
					</div>

					{/* Right — numbered features */}
					<div className='reveal delay-2'>
						<div className='flex flex-col'>
							{features.map((f, i) => (
								<div
									key={i}
									className='flex gap-6 py-7 border-b border-ink/10 last:border-b-0 items-start'
								>
									<span className='font-display text-[2.8rem] font-black tracking-tightest leading-none text-cream-3 min-w-[60px] pt-1'>
										{f.num}
									</span>
									<div>
										<h3 className='font-display text-[1.15rem] font-bold tracking-tighter4 mb-2'>
											{f.title}
										</h3>
										<p className='text-[0.88rem] text-ink-muted font-light leading-[1.75]'>
											{f.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
