import {
  HiCodeBracket,
  HiCircleStack,
  HiRectangleStack,
} from "react-icons/hi2";
import { profile } from "@/data/profile";
import styles from "./About.module.css";
import { SectionTitle } from "../SectionTitle/SectionTitle";

const areas = [
  {
    icon: HiCodeBracket,
    title: "Frontend",
    description:
      "Interfaces modernas, responsivas e focadas na experiência do usuário.",
  },
  {
    icon: HiRectangleStack,
    title: "Backend",
    description:
      "APIs, integrações, regras de negócio e arquitetura de aplicações.",
  },
  {
    icon: HiCircleStack,
    title: "Dados & Persistência",
    description:
      "Persistência, modelagem e integração com bancos de dados.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className={styles.about}
    >
      <div className="container">
        <SectionTitle
          eyebrow="SOBRE MIM"
          title="Mais do que"
          highlight="código"
          description="Gosto de compreender o problema antes de escolher a solução."
        />

        <div className={styles.content}>
          <div className={styles.text}>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.areas}>
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className={styles.card}
                >
                  <div className={styles.icon}>
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{area.title}</h3>

                    <p>
                      {area.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}