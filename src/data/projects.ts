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

export const projects: BIProject[] = []
