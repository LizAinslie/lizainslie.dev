import { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

export default function HomeHero() {
	return (
		<div className={styles.homeHeroWrapper}>
			<div className={styles.heroContent}>
				<div className={styles.heroContentInner}>
					<img src="/pfp.png" alt="My profile pic" className="w-56 md:w-80 h-56 md:h-80 rounded-full" />
					<div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8">
						<h1 className="text-6xl md:text-8xl font-display text-center md:text-left">Liz Ainslie</h1>
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
