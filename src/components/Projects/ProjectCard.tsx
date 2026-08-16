import {
  FaGithub,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";

import { Project } from "@/types/project";

import styles from "./Projects.module.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const isProfessional =
    project.type === "professional";

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span
          className={`${styles.projectType} ${
            isProfessional
              ? styles.professional
              : styles.personal
          }`}
        >
          {isProfessional ? (
            <FiBriefcase />
          ) : (
            <FiCode />
          )}

          {isProfessional
            ? "Projeto profissional"
            : "Projeto pessoal"}
        </span>
      </div>

      <h3 className={styles.projectTitle}>
        {project.title}
      </h3>

      <p className={styles.description}>
        {project.description}
      </p>

      {project.role && (
        <div className={styles.role}>
          <h4>Minha atuação</h4>

          <ul>
            {project.role.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.highlights && (
        <div className={styles.highlights}>
          {project.highlights.map(
            (highlight) => (
              <span key={highlight}>
                {highlight}
              </span>
            ),
          )}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.technologies}>
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            ),
          )}
        </div>

        {(project.github || project.demo) && (
          <div className={styles.links}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub do projeto ${project.title}`}
              >
                <FaGithub />

                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Ver projeto

                <FiArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}