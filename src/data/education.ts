export interface EducationItem {
  id: string
  institution: string
  course: string
  period: string
  status: string
}

export const education: EducationItem = {
  id: 'pucpr',
  institution: 'Pontifícia Universidade Católica do Paraná (PUCPR)',
  course: 'Análise e Desenvolvimento de Sistemas',
  period: 'Julho de 2023 — Dezembro de 2026',
  status: 'Em andamento',
}

export interface Certification {
  id: string
  title: string
  institution: string
  year: string
  hours: string
}

export const certifications: Certification[] = [
  {
    id: 'powerbi-dashboards',
    title: 'Criação de Dashboards Dinâmicos em Power BI',
    institution: 'Alura',
    year: '2026',
    hours: '8h',
  },
  {
    id: 'sql-avancado',
    title: 'Microsoft SQL — Consultas Avançadas',
    institution: 'Alura',
    year: '2024',
    hours: '18h',
  },
  {
    id: 'sql-server',
    title: 'Formação de SQL Server',
    institution: 'Alura',
    year: '2022',
    hours: '60h',
  },
  {
    id: 'python3',
    title: 'Curso de Python 3 — Módulo 2',
    institution: 'Curso em Vídeo',
    year: '2022',
    hours: '40h',
  },
  {
    id: 'comunicacao',
    title: 'Comunicação e Oratória',
    institution: 'Escola Conquer',
    year: '2021',
    hours: '8h',
  },
  {
    id: 'inteligencia-emocional',
    title: 'Inteligência Emocional',
    institution: 'Escola Conquer',
    year: '2021',
    hours: '8h',
  },
]
