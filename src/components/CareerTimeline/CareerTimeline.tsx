import {
  FiBriefcase,
  FiBookOpen,
  FiMapPin,
} from "react-icons/fi";

import { SectionTitle } from "../SectionTitle/SectionTitle";

import styles from "./CareerTimeline.module.css";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
  highlights?: string[];
  technologies?: string[];
}

const experiences: TimelineItem[] = [
  {
    period: "2025 — Atual",
    title: "Desenvolvedora Full Stack",
    organization: "Medilab Sistemas",

    description:
      "Desenvolvimento e evolução de aplicações web corporativas, atuando em sistemas hospitalares, financeiros e de gestão patrimonial.",

    highlights: [
      "Desenvolvimento de interfaces e APIs REST",
      "Integração com sistemas e aplicações legadas",
      "Análise e implementação de regras de negócio",
      "Sustentação e correção de problemas em produção",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Oracle",
      "Firebird",
    ],
  },

  {
    period: "2024",
    title: "Estagiária de Desenvolvimento",
    organization: "Medilab Sistemas",

    description:
      "Desenvolvimento de soluções internas e aplicações hospitalares, participando da manutenção, integração e evolução de sistemas web.",

    highlights: [
      "Desenvolvimento com Java e JavaScript",
      "Integração de projetos Java Web",
      "Colaboração com diferentes setores no levantamento e evolução das soluções",
    ],

    technologies: [
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

const education: TimelineItem[] = [
  {
    period: "2025 — 2026",
    title: "Pós-graduação em Desenvolvimento Full Stack",
    organization: "Descomplica Faculdade Digital",

    description:
      "Especialização voltada ao desenvolvimento de aplicações e soluções Full Stack.",
  },

  {
    period: "2022 — 2024",
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "Estácio",

    description:
      "Formação superior em desenvolvimento de software, sistemas e tecnologia.",
  },

  {
    period: "2018 — 2021",
    title: "Gestão de Turismo",
    organization: "Estácio",
  },
];

export function CareerTimeline() {
  return (
    <section
      id="career"
      className={styles.career}
    >
      <div className="container">
        <SectionTitle
          eyebrow="TRAJETÓRIA"
          title="Experiência &"
          highlight="Formação"
          description="Um resumo da minha evolução profissional e acadêmica ao longo dos últimos anos."
        />

        <div className={styles.columns}>
          <TimelineColumn
            title="Experiência profissional"
            icon={<FiBriefcase />}
            items={experiences}
          />

          <TimelineColumn
            title="Formação acadêmica"
            icon={<FiBookOpen />}
            items={education}
          />
        </div>
      </div>
    </section>
  );
}

interface TimelineColumnProps {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
}

function TimelineColumn({
  title,
  icon,
  items,
}: TimelineColumnProps) {
  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <div className={styles.columnIcon}>
          {icon}
        </div>

        <h3>{title}</h3>
      </div>

      <div className={styles.timeline}>
        {items.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            className={styles.timelineItem}
          >
            <div className={styles.dot} />

            <span className={styles.period}>
              {item.period}
            </span>

            <h4>{item.title}</h4>

            <div className={styles.organization}>
              <strong>
                {item.organization}
              </strong>

              {item.location && (
                <span>
                  <FiMapPin />

                  {item.location}
                </span>
              )}
            </div>

            {item.description && (
              <p className={styles.description}>
                {item.description}
              </p>
            )}

            {item.highlights && (
              <ul className={styles.highlights}>
                {item.highlights.map(
                  (highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ),
                )}
              </ul>
            )}

            {item.technologies && (
              <div
                className={styles.technologies}
              >
                {item.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ),
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}