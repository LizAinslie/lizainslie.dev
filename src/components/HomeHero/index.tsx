import styles from './styles.module.scss';

export default function HomeHero() {
	return (
		<div className={styles.homeHeroWrapper}>
			<div className={styles.heroContent}>
				<div className={styles.heroContentInner}>
					<div className="flex-1 flex justify-end">
						<img src="/pfp.png" alt="My profile pic" className="w-56 md:w-80 h-56 md:h-80 rounded-full" />
					</div>
					<div className="flex flex-col flex-1 md:items-start mt-8 md:mt-0 md:ml-8">
						<h1 className="flex text-6xl md:text-8xl font-display text-center md:text-left justify-center md:justify-start">
							Liz Ainslie
							<div id='discordBox' className={styles.discordTag}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 test-gray-100 mr-2 select-none"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m8 17-.55 2C5.5 18.5 3.5 17.5 2 16.27 2 11 3.5 7.5 5 5c0 0 2.5-1 4.5-1l.5 1.36a4.82 4.82 0 0 1 4 .14l.5-1.5c2 0 4.5 1 4.5 1 1.5 2.5 3 6 3 11.27A14.68 14.68 0 0 1 16.55 19L16 17" />
									<path d="M7.5 16.5c.73.5 2 1.5 4.5 1.5s3.77-1 4.5-1.5" />
									<circle cx="9" cy="12" r="1" />
									<circle cx="15" cy="12" r="1" />
								</svg>
								<div className="opacity-0 transition-opacity duration-300 whitespace-nowrap" id='discordUserBox'>
									<span id='discordUsername'></span>
								</div>
							</div>
						</h1>
						<p className="text-3xl text-center md:text-left mt-4 md:mt-0">Freelance & Hobbyist Full Stack Developer</p>
					</div>
				</div>

				<a href='/about' className={styles.bottomBtn}>
					About me
				</a>
			</div>
			<canvas id='animationCanvas' className={styles.canvas}></canvas>
		</div>
	);
}
