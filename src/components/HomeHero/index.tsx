import { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

export default function HomeHero() {
	return (
		<div className={styles.homeHeroWrapper}>
			<div className={styles.heroContent}>
				<div className={styles.heroContentInner}>
					<img src="/pfp.png" alt="My profile pic" className="w-80 h-80 rounded-full" />
					<div className="flex flex-col ml-8">
						<h1 className="text-8xl font-display">Liz Ainslie</h1>
						<p className="text-3xl">Freelance & Hobbyist Full Stack Developer</p>
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
