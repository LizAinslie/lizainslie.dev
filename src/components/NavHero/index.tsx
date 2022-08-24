import React, { FC, ReactNode } from 'react';
import Nav from '../Nav';
import styles from './styles.module.scss';

interface INavHeroProps {
	color?: string;
	fixedNav?: boolean;
	full?: boolean;
	background?: string;
	children: ReactNode;
}

const NavHero: FC<INavHeroProps> = ({
	color,
	fixedNav,
	background,
	full = false,
	children
}: INavHeroProps) => {
	return (
		<header className={styles.navHero}>
			<Nav {...{color, fixed: fixedNav}} />
			<div className={styles.content} style={{
				backgroundColor: background ?? color ?? undefined,
				height: full ? '100vh' : 'auto'
			}}>
				{children}
			</div>
		</header>
	);
}

export default NavHero;
