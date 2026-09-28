# Projeto Esperança — com Vite

## Estrutura de pastas

    projeto-esperanca/
    ├── index.html          <- página inicial
    ├── projetos.html
    ├── cadastro.html
    ├── css/style.css
    ├── js/script.js
    ├── public/
    │   └── imagens/        <- COLOQUE AQUI suas imagens
    │       ├── logo.png
    │       ├── banner.png
    │       ├── projeto-1.png
    │       ├── projeto-2.png
    │       ├── projeto-3.png
    │       └── voluntario.png
    ├── package.json
    └── vite.config.js

> **Importante:** copie sua pasta `imagens/` (logo, banner, projeto-1/2/3,
> voluntario) para dentro de `public/imagens/`. O Vite só copia para o
> build o que está em `public/`.

## Como rodar

Requer [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
# 1. Entre na pasta do projeto
cd projeto-esperanca

# 2. Instale as dependências (cria node_modules)
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Acesse o endereço que aparecer no terminal (normalmente
`http://localhost:5173`).

## Build de produção

```bash
npm run build      # gera a pasta dist/ otimizada (minificada)
npm run preview    # serve a pasta dist/ para testar o build
```

## O que mudou em relação à versão sem bundler

1. **HTML na raiz** (antes estavam em `html/`): o Vite funciona melhor assim.
2. **Caminhos relativos**: `../css/style.css` virou `./css/style.css`,
   `../js/script.js` virou `./js/script.js`.
3. **`<script type="module">`**: obrigatório para o Vite processar o JS.
4. **Imagens em `public/imagens/`** e referenciadas como `/imagens/...`
   (tanto no HTML quanto nos templates do `script.js`).
5. **`vite.config.js`** declara as 3 páginas como entradas do build
   (multi-page app).

O `style.css` e a lógica do `script.js` não foram alterados — só os
caminhos das imagens.
