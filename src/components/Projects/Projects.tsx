
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import styles from "./Projects.module.css";
import { projects } from "@/data/projects";

export function Projects() {
  const professionalProjects =
    projects.filter(
      (project) =>
        project.type === "professional",
    );

  const personalProjects =
    projects.filter(
      (project) =>
        project.type === "personal",
    );

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className="container">
        <SectionTitle
          eyebrow="PROJETOS"
          title="Experiência em"
          highlight="prática"
          description="Alguns dos projetos e desafios que fizeram parte da minha trajetória profissional e pessoal."
        />

        {professionalProjects.length > 0 && (
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <div>
                <span className={styles.groupLabel}>
                  EXPERIÊNCIA PROFISSIONAL
                </span>

                <h3>
                  Projetos profissionais
                </h3>
              </div>

              <p>
                Os projetos profissionais são
                apresentados de forma resumida,
                preservando informações internas e
                confidenciais das empresas envolvidas.
              </p>
            </div>

            <div className={styles.grid}>
              {professionalProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ),
              )}
            </div>
          </div>
        )}

        {personalProjects.length > 0 && (
          <div
            className={`${styles.group} ${styles.personalGroup}`}
          >
            <div className={styles.groupHeader}>
              <div>
                <span className={styles.groupLabel}>
                  PROJETOS AUTORAIS
                </span>

                <h3>
                  Projetos pessoais
                </h3>
              </div>

              <p>
                Projetos desenvolvidos fora do
                ambiente profissional, com código
                disponível para consulta quando
                aplicável.
              </p>
            </div>

            <div className={styles.grid}>
              {personalProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}