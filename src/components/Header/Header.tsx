"use client";

import { useState } from "react";
import {
    HiBars3,
    HiXMark,
} from "react-icons/hi2";
import { profile } from "@/data/profile";
import styles from "./Header.module.css";

const menuItems = [
    {
        label: "Início",
        href: "#home",
    },
    {
        label: "Sobre",
        href: "#about",
    },
    {
        label: "Trajetória",
        href: "#career",
    },
    {
        label: "Projetos",
        href: "#projects",
    },
    {
        label: "Tecnologias",
        href: "#skills",
    },
];

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <a
                    href="#home"
                    className={styles.logo}
                    onClick={closeMenu}
                >
                    <span>H</span>atayama
                    <strong>.</strong>
                </a>

                <nav
                    id="main-navigation"
                    className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""
                        }`}
                >
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        className={styles.mobileContact}
                        href={profile.links.linkedin}
                    >
                        Vamos conversar
                    </a>
                </nav>
                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label={
                        menuOpen
                            ? "Fechar menu"
                            : "Abrir menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? (
                        <HiXMark size={25} />
                    ) : (
                        <HiBars3 size={25} />
                    )}
                </button>
            </div>
        </header>
    );
}