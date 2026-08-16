import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Gestão Patrimonial",

    type: "professional",

    description:
      "Evolução de uma aplicação corporativa voltada ao gerenciamento do ciclo de vida de ativos, envolvendo modernização de fluxos, regras de negócio e integração entre diferentes módulos.",

    technologies: [
      "Java",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],

    role: [
      "Desenvolvimento e manutenção de APIs REST",
      "Implementação de regras de negócio e validações",
      "Desenvolvimento de interfaces web",
      "Controle de acesso e permissões",
      "Integração com banco de dados",
    ],

    highlights: [
      "Integração com legado",
      "Regras de negócio",
      "Controle de acesso",
    ],
  },

  {
    title: "Gestão Financeira",

    type: "professional",

    description:
      "Modernização e evolução de funcionalidades financeiras corporativas, envolvendo contas a pagar e receber, parcelamentos, validações e visualização de informações financeiras.",

    technologies: [
      "Java",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],

    role: [
      "Implementação de fluxos financeiros",
      "Migração e adaptação de regras de sistemas legados",
      "Desenvolvimento de validações financeiras",
      "Construção e manutenção de dashboards",
      "Integração entre frontend e backend",
    ],

    highlights: [
      "Sistemas legados",
      "Consistência de dados",
      "Dashboards",
    ],
  },

  {
    title: "Soluções Hospitalares",

    type: "professional",

    description:
      "Desenvolvimento e evolução de aplicações para apoio a processos clínicos e administrativos, incluindo integrações entre sistemas e modernização de funcionalidades existentes.",

    technologies: [
      "Java",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Oracle",
    ],

    role: [
      "Desenvolvimento de funcionalidades web",
      "Integração entre diferentes sistemas",
      "Análise e implementação de regras de negócio",
      "Manutenção e evolução de aplicações existentes",
      "Investigação e correção de problemas em produção",
    ],

    highlights: [
      "Integrações",
      "Sistemas corporativos",
      "Ambiente de produção",
    ],
  },
];