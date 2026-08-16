export interface SkillGroup {
    title: string;
    description: string;
    skills: string[];
}

export const skillGroups: SkillGroup[] = [
    {
        title: "Frontend",
        description: "Interfaces modernas, responsivas e componentizadas.",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "MUI",
            "Tailwind",
            "Bootstrap",
        ],
    },
    {
        title: "Backend",
        description: "APIs, regras de negócio e integrações entre sistemas.",
        skills: [
            "Java",
            "Spring Boot",
            "Node.js",
            "REST APIs",
        ],
    },
    {
        title: "Dados",
        description: "Modelagem, consultas e persistência de dados.",
        skills: [
            "PostgreSQL",
            "Oracle",
            "Firebird"
        ],
    },
    {
        title: "Ferramentas, Build & Infra",
        description: "Desenvolvimento, versionamento e ambientes de aplicação.",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Jenkins",
            "Tomcat",
            "Vite",
            "Postman"
        ],
    },
];