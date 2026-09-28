import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Projeto com 3 paginas HTML (index, projetos, cadastro).
// O Vite precisa saber que as 3 entram no build — por isso a
// configuracao de input abaixo.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(__dirname, 'index.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        cadastro: resolve(__dirname, 'cadastro.html'),
      },
    },
  },
})
