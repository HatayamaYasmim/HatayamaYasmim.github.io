import { skillGroups } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiRedis,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import styles from "./Skills.module.css";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
    >
      <div className="container">
        <SectionTitle
          eyebrow="TECNOLOGIAS"
          title="Minha"
          highlight="stack"
          description="Tecnologias e ferramentas que utilizo para transformar requisitos em aplicações."
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={styles.card}
            >
              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className={styles.tags}>
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}