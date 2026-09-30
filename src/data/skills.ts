export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'bi',
    title: 'Business Intelligence',
    skills: ['Microsoft Power BI', 'DAX', 'Power Query', 'Excel Avançado'],
  },
  {
    id: 'database',
    title: 'Banco de Dados',
    skills: ['SQL Server', 'PostgreSQL', 'SQL', 'Views e Procedures', 'Modelagem de Dados'],
  },
  {
    id: 'data-engineering',
    title: 'Engenharia e Integração de Dados',
    skills: [
      'Pentaho Data Integration (Kettle)',
      'ETL / ELT',
      'APIs / OData',
      'Integração de Dados',
      'Qualidade e Governança de Dados',
    ],
  },
  {
    id: 'automation',
    title: 'Automação e Programação',
    skills: ['Python', 'Pandas', 'Power Automate', 'RPA', 'Automação de Processos'],
  },
  {
    id: 'systems',
    title: 'Sistemas e Ferramentas',
    skills: ['SAP Business One', 'KORP ERP', 'Active Directory', 'Grafana'],
  },
]
