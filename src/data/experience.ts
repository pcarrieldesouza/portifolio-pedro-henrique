export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  featured?: boolean
  activities: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ligga',
    company: 'Ligga Telecom',
    role: 'Analista de Dados Pleno',
    period: 'Junho de 2026 — Atual',
    location: 'Curitiba, PR',
    current: true,
    featured: true,
    activities: [
      'Desenvolvimento, implementação e otimização de processos ETL utilizando Pentaho (Kettle), integrando dados entre a API OData do SAP e bancos de dados PostgreSQL.',
      'Automação de fluxos de extração e carga de dados com scripts Python, incluindo tratamento de falhas de encoding, tipos de dados e formatação.',
      'Criação e otimização de consultas SQL em PostgreSQL e SQL Server para extração, transformação e carga, tratando inconsistências entre tabelas de staging.',
      'Desenvolvimento de scripts Python para automação de extração de dados via API e processamento de arquivos.',
      'Monitoramento de rotinas de ETL, identificação de falhas de carga e implementação de correções.',
      'Colaboração com áreas técnicas e de negócio para garantir integridade e qualidade dos dados usados em dashboards de Power BI e Grafana.',
      'Documentação de processos técnicos de ETL e rotinas de banco de dados para manutenção e continuidade.',
      'Monitoramento e ajuste de desempenho do banco de dados PostgreSQL, incluindo gerenciamento de permissões de usuários.',
    ],
  },
  {
    id: 'sicoob-sul',
    company: 'Sicoob Sul',
    role: 'Analista de Planejamento e Inovação Jr.',
    period: 'Novembro de 2024 — Maio de 2026',
    location: 'Curitiba, PR',
    featured: true,
    activities: [
      'Desenvolvimento de dashboards e datasets analíticos em Power BI.',
      'Criação de relatórios gerenciais em Excel para a diretoria.',
      'Planejamento e definição de metas.',
      'Desenvolvimento e automação de processos via RPA com Python e Power Automate.',
      'Criação e manutenção de consultas, views e procedures em SQL Server.',
      'Tratamento, transformação e consolidação de dados para indicadores estratégicos.',
      'Modelagem de dados para relatórios gerenciais e análises operacionais.',
      'Integração de informações entre diferentes bases e sistemas corporativos.',
      'Mapeamento, padronização e melhoria de processos internos.',
      'Manutenção de usuários via Active Directory (AD).',
    ],
  },
  {
    id: 'dental-med-sul',
    company: 'Dental Med Sul',
    role: 'Analista de Sistemas Jr.',
    period: 'Dezembro de 2022 — Novembro de 2024',
    location: 'Curitiba, PR',
    featured: true,
    activities: [
      'Desenvolvimento e manutenção de consultas SQL, views e procedures.',
      'Criação de dashboards e relatórios analíticos em Power BI.',
      'Estruturação de dados para análises operacionais e gerenciais.',
      'Apoio à implantação e integração do sistema ERP KORP na empresa MEDFIO.',
      'Suporte a usuários e análise de demandas de sistemas e infraestrutura.',
      'Manutenção de usuários via Active Directory (AD).',
      'Desenvolvimento de soluções de automação e inovação tecnológica.',
    ],
  },
  {
    id: 'gp-corp-negocios',
    company: 'GP Corp BR',
    role: 'Analista de Negócios SAP',
    period: 'Maio de 2022 — Novembro de 2022',
    location: 'Curitiba, PR',
    activities: [
      'Levantamento e análise de requisitos das áreas de negócio.',
      'Desenvolvimento de soluções voltadas à melhoria operacional.',
      'Suporte às áreas de negócio no uso do sistema SAP.',
      'Construção e manutenção de sites.',
      'Construção de consultas SQL e análise de dados.',
    ],
  },
  {
    id: 'gp-corp-comercial',
    company: 'GP Corp BR',
    role: 'Analista Comercial',
    period: 'Dezembro de 2021 — Maio de 2022',
    location: 'Curitiba, PR',
    activities: [
      'Mapeamento de regiões comerciais e de clientes.',
      'Inteligência de mercado.',
      'Construção de relacionamento com clientes.',
      'Liberação de pedidos.',
      'Controle de vendas e de planilhas.',
    ],
  },
  {
    id: 'nordica',
    company: 'Nórdica Veículos S.A.',
    role: 'Assistente Administrativo de Pós-Venda Jr.',
    period: 'Março de 2021 — Dezembro de 2021',
    location: 'Curitiba, PR',
    activities: [
      'Compra de peças para o estoque de todo o grupo Nórdica.',
      'Prospecção de clientes.',
      'Preenchimento de relatórios gerenciais e acompanhamento de performance dos vendedores.',
      'Alterações de cadastro de peças e análise de custos.',
    ],
  },
  {
    id: 'dbm',
    company: 'DBM Contact Center',
    role: 'Assistente de Atendimento ao Cliente',
    period: 'Novembro de 2019 — Fevereiro de 2021',
    location: 'Curitiba, PR',
    activities: [
      'Atendimento ao cliente e resolução de problemas.',
      'Participação em time de cadastro com foco em melhorar a experiência do cliente no site.',
    ],
  },
]
