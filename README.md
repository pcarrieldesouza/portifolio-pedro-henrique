# Portfólio — Pedro Henrique Carriel de Souza

Portfólio profissional (Analista de Dados / Business Intelligence), construído com React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Rodar localmente

Pré-requisito: Node.js 18+ instalado.

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`. O build de produção pode ser testado com:

```bash
npm run build
npm run preview
```

## O que ainda falta preencher

1. **Projetos de Power BI** — o arquivo [`src/data/projects.ts`](src/data/projects.ts) está vazio de propósito: nenhum dashboard, nome de projeto ou URL foi encontrado no currículo/Profile fornecidos, então nada foi inventado. Para cada dashboard real, adicione um objeto ao array seguindo o modelo comentado no próprio arquivo (nome, descrição, tecnologias, imagem de capa em `public/images/projects/`, e a URL real do Power BI publicado). Enquanto `dashboardUrl` estiver vazio, o card mostra "Link em breve" em vez de um link fictício.
2. **URL pública do site** — depois do deploy, atualize:
   - `siteUrl` em [`src/config/site.ts`](src/config/site.ts)
   - `og:url`, `og:image`, `twitter:image` e `<link rel="canonical">` em [`index.html`](index.html)

   com o endereço real gerado pela Vercel (ex.: `https://seu-projeto.vercel.app`).
3. **E-mail de contato** — confirmado como `pcarrieldesouza@gmail.com` em [`src/config/site.ts`](src/config/site.ts) (o e-mail do arquivo Profile do LinkedIn estava desatualizado). Troque ali se preferir usar outro.

## Estrutura

```
src/
  components/   componentes de UI (Navbar, Hero, About, Experience, Projects, ProjectCard, Skills, Education, Contact, Footer, icons)
  data/         conteúdo estruturado (experience.ts, skills.ts, education.ts, projects.ts)
  config/       site.ts — nome, headline, links (LinkedIn, GitHub, e-mail)
public/
  images/       pedro-henrique.jpeg (foto do Hero), og-cover.png (imagem de compartilhamento), projects/ (capas dos dashboards)
```

## Deploy na Vercel

1. Crie um repositório no GitHub e envie o código:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com), faça login com sua conta GitHub.
3. Clique em **Add New → Project**, selecione o repositório recém-criado.
4. A Vercel detecta automaticamente o preset Vite (build command `npm run build`, output `dist`) — não é preciso alterar nada.
5. Clique em **Deploy**. Em cerca de 1 minuto, a Vercel gera o endereço público (ex.: `https://seu-projeto.vercel.app`).
6. Volte ao passo "O que ainda falta preencher" acima e atualize `siteUrl` e as tags Open Graph com esse endereço; depois faça commit e push — a Vercel republica automaticamente a cada push na branch `main`.

Alternativa: o arquivo `netlify.toml` já está configurado caso prefira publicar na [Netlify](https://netlify.com) (Add new site → Import from Git → mesmo repositório).

## Compartilhar no LinkedIn

1. **Adicionar o link ao perfil**: no LinkedIn, vá em *Editar perfil → Seção "Informações de contato"* e adicione o endereço do site em "Site", ou crie um item em **Destaques** (Featured) apontando para o link, com uma imagem de capa.
2. **Publicar como post**: cole o link do portfólio em uma nova publicação no LinkedIn — a prévia (título, descrição e imagem `og-cover.png`) deve aparecer automaticamente graças às tags Open Graph configuradas em `index.html`. Se a prévia não atualizar de imediato, use o [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) colando a URL do site para forçar o LinkedIn a reler os metadados.

## Tecnologias

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · lucide-react
