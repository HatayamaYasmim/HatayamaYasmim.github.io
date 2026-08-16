import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  HiArrowDown,
} from "react-icons/hi2";

import { profile } from "@/data/profile";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
    >
      <div className={`container ${styles.content}`}>
        <div className={styles.information}>
          <div className={styles.available}>
            <span />

            Disponível para novas oportunidades
          </div>

          <p className={styles.eyebrow}>
            {profile.eyebrow}
          </p>

          <h1>
            Olá, eu sou{" "}
            <span>{profile.name}</span>.
          </h1>

          <h2>{profile.role}</h2>

          <p className={styles.description}>
            {profile.description}
          </p>

          <div className={styles.actions}>
            <a
              href="#about"
              className={styles.primaryButton}
            >
              Conheça meu trabalho

              <HiArrowDown size={18} />
            </a>
          </div>

          <div className={styles.social}>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageGlow} />

          <div className={styles.imageWrapper}>
            <img
              src="images/profile.png"
              alt="Yasmim"
            />
          </div>

          <div className={styles.codeBadge}>
            <span>&lt;/&gt;</span>

            <div>
              <strong>Full Stack</strong>
              <small>Developer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}