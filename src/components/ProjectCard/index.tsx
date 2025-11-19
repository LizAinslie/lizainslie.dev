import type { FC } from "react";
import styles from "./styles.module.scss";
import type { CollectionEntry } from "astro:content";

interface IProjectCardProps {
  project: CollectionEntry<"projects">;
  link?: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
  project,
  link,
}: IProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      {project.data.image ? (
        <>
          <img
            className={styles.preview}
            src={project.data.image}
            alt={project.data.title}
          />
        </>
      ) : (
        <>
          <iframe
            className={styles.preview}
            src={project.data.site}
            title={project.data.title}
          ></iframe>
        </>
      )}
      <div className={styles.overlay}>
        <div className={styles.inner}>
          {link ? (
            <a href={link} className={styles.visitBtn}>
              View Project Page
            </a>
          ) : (
            <a
              href={
                project.data.site ??
                (project.data.github &&
                  `https://github.com/${project.data.github}`)
              }
              rel="noreferrer noopener"
              target="_blank"
              className={styles.visitBtn}
            >
              Open Project in New Tab
            </a>
          )}

          <div className={styles.info}>
            <div className={styles.paragraph}>
              <h4 className={styles.heading}>{project.data.title}</h4>
              {project.data.description ? (
                <p className={styles.body}>{project.data.description}</p>
              ) : (
                ""
              )}
              {project.data.client ? (
                <p className={styles.meta}>For {project.data.client}</p>
              ) : (
                ""
              )}
            </div>
            <div className={styles.space} />
            {project.data.github ? (
              <a
                className={styles.iconLink}
                rel="noreferrer noopener"
                target="_blank"
                href={`https://github.com/${project.data.github}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
