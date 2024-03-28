import { FC } from 'react'
import styles from './styles.module.scss';

interface IProjectCardProps {
    title: string;
    site: string;
	description?: string;
	client?: string;
    github?: string;
    image?: string;
    tags?: string[];
    link?: string;
}

const ProjectCard: FC<IProjectCardProps> = ({ title, site, description, client, github, tags, image, link }: IProjectCardProps) => {
	return (
		<div className={styles.projectCard}>
            {image ? <>
                <img className={styles.preview} src={image} alt={title} />
            </> : <>
                <iframe className={styles.preview} src={site} title={title}></iframe>
            </> }
            <div className={styles.overlay}>
                <div className={styles.inner}>
                    {link ? 
                        <a href={link} className={styles.visitBtn}>
                            View Project Page
                        </a>
                    :
                        <a href={site} rel='noreferrer noopener' target='_blank' className={styles.visitBtn}>
                            Open Project in New Tab
                        </a>
                    }

                    <div className={styles.info}>
                        <div className={styles.paragraph}>
                            <h4 className={styles.heading}>{title}</h4>
                            {description ? <p className={styles.body}>{description}</p> : ''}
                            {client ? <p className={styles.meta}>For {client}</p> : ''}
                        </div>
                        <div className={styles.spacer} />
                        {github ? <a className={styles.iconLink} rel='noreferrer noopener' target='_blank' href={`https://github.com/${github}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a> : ''}
                    </div>
                </div>
            </div>
        </div>
	);
}

export default ProjectCard;
