import React, { FC } from 'react';
import Nav from '../Nav';
import styles from './styles.module.scss';

interface INavHeroProps {
	color?: string;
	fixedNav?: boolean;
}

const NavHero: FC<INavHeroProps> = ({ color, fixedNav, children }) => {
	return (
		<header className={styles.navHero}>
			<Nav {...{color, fixed: fixedNav}} />
			<div className={styles.content} style={{
				backgroundColor: color ?? undefined,
			}}>
				{children}
			</div>
		</header>
	);
}

export default NavHero;
