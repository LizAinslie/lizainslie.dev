import React, { FC } from 'react';
import styles from './styles.module.scss';

const NavHero: FC = () => {
	return (
		<footer className={styles.footer}>
			<p>&copy; {new Date().getFullYear()} Elizabeth Hazel Ainslie, all rights reserved.</p>
		</footer>
	);
}

export default NavHero;