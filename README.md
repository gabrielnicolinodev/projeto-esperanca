# Projeto Esperança

Site institucional da **Projeto Esperança**, uma ONG fictícia criada para
projeto acadêmico. A plataforma apresenta a missão da organização, seus
projetos sociais e um formulário de cadastro para voluntários e doadores.

## Funcionalidades

- **Página inicial** com apresentação da ONG, valores institucionais e
  números ilustrativos de impacto
- **Página de projetos** com detalhes das iniciativas (Mesa Solidária,
  Caminhos para o Futuro e Rede de Apoio) e áreas de doação
- **Formulário de cadastro** com validação nativa de campos, máscaras
  automáticas (CPF, telefone e CEP) e persistência dos dados no
  `localStorage` do navegador
- **SPA com roteamento próprio**: navegação entre as três páginas sem
  recarregar, com suporte a botão "voltar" do navegador
- **Design responsivo** com 5 breakpoints e menu mobile
- **Acessibilidade**: skip link, foco visível, ARIA labels,
  `prefers-reduced-motion` e navegação por teclado

## Tecnologias

- HTML5 semântico
- CSS3 (Grid Layout, Custom Properties, `color-mix`)
- JavaScript (Vanilla JS, sem frameworks)
- [Vite](https://vitejs.dev) como bundler e servidor de desenvolvimento

## Como executar localmente

Requer [Node.js](https://nodejs.org) 18+.

```bash
npm install     # instala as dependências
npm run dev     # inicia o servidor de desenvolvimento
```

Para gerar a versão de produção (pasta `dist/`):

```bash
npm run build
npm run preview
```

## Estrutura do projeto

    ├── index.html          Página inicial
    ├── projetos.html       Projetos e doações
    ├── cadastro.html       Formulário de cadastro
    ├── css/style.css       Estilos (tokens, layout, responsividade)
    ├── js/script.js        Templates, roteamento, máscaras e formulário
    ├── public/imagens/     Imagens do site
    └── vite.config.js      Configuração do Vite (multi-page app)

## Deploy

O site está hospedado na Vercel e é atualizado automaticamente a cada
push na branch `main`.

## Aviso

Projeto fictício desenvolvido para fins educacionais. Os dados do
formulário são armazenados apenas no navegador do usuário e não são
enviados a nenhum servidor.
