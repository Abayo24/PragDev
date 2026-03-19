const services = [
	{
		num: '01',
		name: 'Custom Software Development',
		desc: "Stop forcing your business into off-the-shelf tools that don't fit. We architect bespoke software matching your exact workflows, scaling with your growth, and giving you a competitive advantage competitors can't easily replicate.",
		tags: [
			'Bespoke Architecture',
			'Scalable Systems',
			'Clean Code',
			'API Development',
		],
	},
	{
		num: '02',
		name: 'Web Application Development',
		desc: "Lightning-fast, SEO-optimised web apps built with React, Next.js, and Node.js. Whether it's a SaaS platform, e-commerce solution, or internal portal — we build web products that convert visitors into loyal, paying customers.",
		tags: ['Next.js / React', 'Node.js', 'SEO-Ready', 'SaaS Platforms'],
	},
	{
		num: '03',
		name: 'Mobile App Development',
		desc: 'Native iOS & Android, or cross-platform with React Native and Flutter. We deliver polished mobile experiences that keep users engaged and drive real business outcomes — not just downloads that get deleted in a week.',
		tags: [
			'React Native',
			'Flutter',
			'iOS & Android',
			'M-Pesa Integration',
		],
	},
	{
		num: '04',
		name: 'UI/UX Design',
		desc: 'Great design is the difference between software people love and software they abandon. Intuitive, visually striking interfaces grounded in user research — because better UX directly translates to higher retention and more revenue.',
		tags: [
			'Figma Prototypes',
			'User Research',
			'Design Systems',
			'Usability Testing',
		],
	},
	{
		num: '05',
		name: 'Cloud Solutions',
		desc: 'Deploy with confidence. We architect, migrate, and manage cloud infrastructure on AWS, GCP, and Azure — ensuring your product is secure, highly available, and ready to handle sudden traffic spikes without breaking a sweat.',
		tags: [
			'AWS / GCP / Azure',
			'DevOps & CI/CD',
			'Containerisation',
			'Zero-Downtime',
		],
	},
	{
		num: '06',
		name: 'System Integration',
		desc: 'Siloed systems cost you time and money. We connect your CRM, ERP, payment gateways, and third-party APIs into one seamless data flow — so your team works smarter and customers experience zero friction at every touchpoint.',
		tags: ['API Integration', 'ERP / CRM', 'Data Pipelines', 'Automation'],
	},
];

export default function Services() {
	return (
		<section
			id='services'
			className='py-36 bg-ink relative overflow-hidden'
		>
			{/* Ghost number */}
			<span
				className='text-stroke-white-soft absolute bottom-[-40px] right-[-20px] font-display font-black leading-none tracking-tightest pointer-events-none select-none'
				style={{ fontSize: '28vw' }}
				aria-hidden
			>
				06
			</span>

			<div className='max-w-[1240px] mx-auto px-10'>
				{/* Header */}
				<div className='flex justify-between items-end mb-[72px] gap-10 flex-wrap'>
					<div className='reveal'>
						<span className='block font-mono text-[0.7rem] tracking-[0.15em] uppercase text-orange mb-5'>
							What We Build
						</span>
						<h2
							className='font-display font-extrabold leading-[0.95] tracking-tighter2 text-cream'
							style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
						>
							Services
							<br />
							<em className='not-italic font-light text-cream/40'>
								engineered
							</em>
							<br />
							for impact
						</h2>
					</div>
					<p className='reveal delay-2 max-w-[300px] text-[0.9rem] font-light text-cream/40 leading-[1.7] pb-2'>
						From concept to production — every layer of modern
						digital product development, done right.
					</p>
				</div>

				{/* List */}
				<div className='border-t border-cream/10 text-cream/40'>
					{services.map((svc, i) => (
						<div
							key={svc.num}
							className={`svc-row flex flex-col md:grid md:grid-cols-[80px_1fr_auto] items-start gap-4 md:gap-10 py-8 md:py-11 border-b border-cream/10 transition-all duration-300 relative reveal delay-${(i % 3) + 1} group`}
						>
							{/* Hover bg */}
							<div className='absolute inset-0 bg-orange/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

							{/* Number */}
							<span className='svc-num font-mono text-[0.72rem] tracking-[0.12em] text-cream/22 md:pt-1.5 transition-colors duration-300 group-hover:text-orange relative z-10'>
								{svc.num}
							</span>

							{/* Content */}
							<div className='relative z-10'>
								<h3
									className='font-display font-bold tracking-tighter3 text-cream leading-none mb-3.5'
									style={{
										fontSize:
											'clamp(1.4rem, 2.8vw, 2.4rem)',
									}}
								>
									{svc.name}
								</h3>
								<p className='text-[0.9rem] font-light text-cream/42 leading-[1.7] max-w-[520px]'>
									{svc.desc}
								</p>
								<div className='flex flex-wrap gap-2 mt-4'>
									{svc.tags.map((tag) => (
										<span
											key={tag}
											className='font-mono text-[0.65rem] tracking-[0.08em] px-3 py-1 rounded-full border border-cream/10 text-cream/32'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
              
							<span className='svc-arrow hidden md:block text-2xl text-orange pt-1 relative z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1'>
								↗
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
