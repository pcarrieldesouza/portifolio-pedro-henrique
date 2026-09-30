export interface BIProject {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  dashboardUrl: string
  category: string
}

// ============================================================================
// ADICIONE SEUS PROJETOS REAIS DE POWER BI AQUI.
//
// Nenhum dashboard, nome de projeto ou indicador foi encontrado no currículo
// ou no Profile fornecidos — por isso este array começa vazio. Nada fictício
// foi inserido no lugar.
//
// Para cada projeto real, adicione um objeto seguindo o modelo abaixo:
//
// {
//   id: "identificador-unico",              // 1. nome/slug do dashboard
//   title: "Nome do dashboard",              // 1. nome de exibição
//   description: "O que o dashboard resolve, para qual área/negócio.",
//   technologies: ["Power BI", "SQL Server"], // 4. tecnologias usadas
//   image: "/images/projects/nome-arquivo.png", // 3. screenshot/capa do dashboard
//   dashboardUrl: "https://app.powerbi.com/...", // 2. URL real do relatório publicado
//   category: "Business Intelligence",       // usada nos filtros da seção Projetos
// }
//
// Coloque as imagens de capa em public/images/projects/.
// Se ainda não tiver a URL pública do Power BI, deixe dashboardUrl como ""
// — o card mostrará "Link em breve" automaticamente, sem simular um acesso.
// ============================================================================

export const projects: BIProject[] = [
  {
    id: 'xyz-clothes',
    title: 'XYZ Clothes',
    description:
      'Dashboard de gestão para uma rede de lojas de roupas, com indicadores operacionais, gerenciais e estratégicos de Vendas, Atendimento, Financeiro e Logística: total de vendas, ticket médio, vendas por loja e categoria, evolução de atendimentos, contas a pagar/receber e status de entregas.',
    technologies: ['Power BI', 'DAX', 'Power Query'],
    image: '/images/projects/xyz-clothes-vendas.png',
    dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmFjNDc5NGUtNGFlZS00MjQ1LTllYzktZjYxNGFhZjU3NTkwIiwidCI6IjdlZGVhNmFiLTUwMDctNDM3ZS1hYWEwLTAwYWRiZmVkMTBlYyJ9',
    category: 'Varejo',
  },
]
