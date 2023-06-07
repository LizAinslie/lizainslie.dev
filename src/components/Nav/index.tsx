import React, { FC } from 'react'
import styles from './styles.module.scss';

interface INavProps {
	color?: string;
	showBrand?: boolean;
	fixed?: boolean;
}

const Nav: FC<INavProps> = ({
	color = '#2d333b',
	showBrand = true,
	fixed = false,
}: INavProps) => {
	return (
		<nav
			className={styles.nav}
			style={{
				backgroundColor: color,
				...(fixed ? {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					zIndex: '300'
				} : {})
			}}
		>
			{showBrand ? 
				<a className={`${styles.item} ${styles.brand}`} href="/">
					Liz Ainslie
				</a>
			: ''}
			
			<a className={styles.item} href="/projects">
				Projects
			</a>

			<a className={styles.item} href="/blog">
				Blog
			</a>

			<a className={styles.item} href="/about">
				About
			</a>	
			
			<div className="flex-grow" />

			<a className={`${styles.item} ${styles.social}`} target="_blank" rel="noreferrer noopener" href="https://twitter.com/LizzyReborn">
				<span className={styles.srOnly}>Twitter</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
					<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
				</svg>
			</a>
			
			<a className={`${styles.item} ${styles.social}`} target="_blank" rel="noreferrer noopener" href="https://github.com/LizAinslie">
				<span className={styles.srOnly}>GitHub</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
					<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
				</svg>
			</a>

			<a className={`${styles.item} ${styles.social}`} target="_blank" rel="noreferrer noopener" href="https://instagram.com/LizAinslie16">
				<span className={styles.srOnly}>Instagram</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
					<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
				</svg>
			</a>

			<a className={`${styles.item} ${styles.social}`} target="_blank" rel="noreferrer noopener" href="https://twitch.tv/LizAinslie">
				<span className={styles.srOnly}>Twitch</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitch">
					<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
				</svg>
			</a>
		</nav>
	);
}

export default Nav;
