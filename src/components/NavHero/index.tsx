import React, { FC } from 'react';
import Nav from '../Nav';
import styles from './styles.module.scss';

interface INavHeroProps {
	color?: string;
}

const NavHero: FC<INavHeroProps> = ({ color, children }) => {
	return (
		<header className={styles.navHero}>
			<Nav {...{color}} />
			<div className={styles.content} style={{
				backgroundColor: color ?? undefined,
			}}>
				{children}
			</div>
		</header>
	);
}

export default NavHero;
