/* Projeto Esperança — SPA acadêmica.
   Organização do arquivo:
   1. Templates          — funções que devolvem o HTML de cada rota
   2. Roteamento         — interceptação de links, histórico e render
   3. Menu               — comportamento do menu mobile
   4. Máscaras           — CPF, telefone e CEP
   5. Formulário         — envio, validação e feedback
   6. Armazenamento      — persistência dos cadastros no localStorage
   7. Feedback           — alertas e toast
*/

/* =====================================================
   1. TEMPLATES
   Cada função devolve uma string de HTML com o mesmo
   conteúdo e as mesmas classes das páginas originais,
   para que o style.css continue valendo sem alterações.
   ===================================================== */
var Templates = {
  inicio: function () {
    return '' +
      '<section class="hero">' +
        '<div class="container hero__grade">' +
          '<div class="hero__texto">' +
            '<h1>Transformando solidariedade em esperança</h1>' +
            '<p>O Projeto Esperança acredita que pequenas atitudes podem gerar grandes mudanças. Desenvolvemos ações sociais para apoiar famílias, incentivar a inclusão e criar novas oportunidades para pessoas em situação de vulnerabilidade.</p>' +
            '<div class="hero__acoes">' +
              '<a href="projetos.html" class="botao botao--primario" data-rota="projetos">Conheça nossos projetos</a>' +
              '<a href="cadastro.html" class="botao botao--secundario" data-rota="cadastro">Quero ajudar</a>' +
            '</div>' +
          '</div>' +
          '<div class="hero__imagem">' +
            '<img src="/imagens/banner.png" alt="Voluntários do Projeto Esperança participando de uma ação social">' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="secao" aria-labelledby="titulo-quem-somos">' +
        '<div class="container secao__conteudo secao__conteudo--texto">' +
          '<h2 id="titulo-quem-somos">Quem somos</h2>' +
          '<p>O Projeto Esperança é uma organização sem fins lucrativos criada com o propósito de conectar pessoas que desejam ajudar a iniciativas que fazem a diferença na comunidade. Atuamos por meio de projetos sociais, campanhas de arrecadação e ações de voluntariado.</p>' +
          '<p>Nosso trabalho busca oferecer apoio, incentivar a participação comunitária e contribuir para a construção de uma sociedade mais solidária e inclusiva.</p>' +
        '</div>' +
      '</section>' +

      '<section class="secao secao--destacada" aria-labelledby="titulo-missao">' +
        '<div class="container secao__conteudo secao__conteudo--texto">' +
          '<h2 id="titulo-missao">Nossa missão</h2>' +
          '<p>Promover ações que contribuam para melhorar a qualidade de vida de pessoas e famílias em situação de vulnerabilidade, fortalecendo a solidariedade e criando oportunidades de transformação social.</p>' +
        '</div>' +
      '</section>' +

      '<section class="secao" aria-labelledby="titulo-valores">' +
        '<div class="container">' +
          '<h2 id="titulo-valores">Nossos valores</h2>' +
          '<div class="grade-cartoes">' +
            criarCartaoValor('solidariedade', 'Solidariedade', 'Acreditamos que ajudar o próximo é uma responsabilidade compartilhada e que cada atitude pode fazer a diferença.') +
            criarCartaoValor('respeito', 'Respeito', 'Valorizamos cada pessoa, suas histórias, suas escolhas e sua individualidade.') +
            criarCartaoValor('transparencia', 'Transparência', 'Buscamos agir com responsabilidade e clareza em todas as nossas ações.') +
            criarCartaoValor('inclusao', 'Inclusão', 'Trabalhamos para construir oportunidades e promover a participação de todos.') +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="secao-numeros" aria-labelledby="titulo-numeros">' +
        '<div class="container">' +
          '<h2 id="titulo-numeros" class="visualmente-oculto">Projeto Esperança em números</h2>' +
          '<p class="secao-numeros__aviso">Números ilustrativos do nosso projeto acadêmico</p>' +
          '<dl class="lista-numeros">' +
            criarNumero('+500', 'Pessoas alcançadas') +
            criarNumero('+120', 'Voluntários cadastrados') +
            criarNumero('15', 'Ações realizadas') +
            criarNumero('8', 'Projetos ativos') +
          '</dl>' +
        '</div>' +
      '</section>' +

      '<section class="secao secao-cta" aria-labelledby="titulo-cta">' +
        '<div class="container secao-cta__conteudo">' +
          '<h2 id="titulo-cta">Faça parte dessa transformação</h2>' +
          '<p>Você também pode contribuir para transformar vidas. Seja como voluntário ou apoiador, sua participação pode ajudar nossas iniciativas a chegarem ainda mais longe.</p>' +
          '<a href="cadastro.html" class="botao botao--primario" data-rota="cadastro">Quero participar</a>' +
        '</div>' +
      '</section>' +

      '<section class="secao" aria-labelledby="titulo-contato">' +
        '<div class="container">' +
          '<h2 id="titulo-contato">Entre em contato</h2>' +
          '<div class="grade-contato">' +
            '<div>' +
              '<h3 class="visualmente-oculto">Informações de contato</h3>' +
              '<ul class="lista-contato">' +
                '<li><strong>E-mail:</strong> <a href="mailto:contato@projetoesperanca.org">contato@projetoesperanca.org</a></li>' +
                '<li><strong>Telefone:</strong> <a href="tel:+551699999999">(16) 99999-9999</a></li>' +
                '<li><strong>Endereço:</strong> Rua da Esperança, 100 — Centro</li>' +
                '<li><strong>Atendimento:</strong> Segunda a sexta-feira, das 8h às 17h</li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  },

  projetos: function () {
    return '' +
      '<section class="secao-topo-pagina">' +
        '<div class="container">' +
          '<h1>Nossos projetos</h1>' +
          '<p>Conheça algumas das iniciativas desenvolvidas pelo Projeto Esperança para apoiar nossa comunidade e criar novas oportunidades.</p>' +
        '</div>' +
      '</section>' +

      '<section class="secao" aria-label="Lista de projetos">' +
        '<div class="container lista-projetos">' +
          listaProjetos.map(criarProjeto).join('') +
        '</div>' +
      '</section>' +

      '<section class="secao secao--destacada" aria-labelledby="titulo-doacoes">' +
        '<div class="container">' +
          '<h2 id="titulo-doacoes">Sua contribuição faz a diferença</h2>' +
          '<p>As doações ajudam a manter nossas ações e permitem que os projetos alcancem mais pessoas. Cada contribuição pode ser direcionada para aquisição de alimentos, materiais educativos e recursos necessários para nossas atividades.</p>' +
          '<div class="grade-cartoes">' +
            listaDoacoes.map(criarCartaoDoacao).join('') +
          '</div>' +
          '<a href="cadastro.html" class="botao botao--primario" data-rota="cadastro">Quero contribuir</a>' +
        '</div>' +
      '</section>' +

      '<section class="secao secao-voluntariado" aria-labelledby="titulo-voluntariado">' +
        '<div class="container secao-voluntariado__grade">' +
          '<div class="secao-voluntariado__imagem">' +
            '<img src="/imagens/voluntario.png" alt="Grupo de voluntários reunido durante uma ação social">' +
          '</div>' +
          '<div class="secao-voluntariado__texto">' +
            '<h2 id="titulo-voluntariado">Seja voluntário</h2>' +
            '<p>Ser voluntário é dedicar tempo, conhecimento ou habilidades para contribuir com uma causa. No Projeto Esperança, existem diferentes formas de participação, de acordo com a disponibilidade e o interesse de cada pessoa.</p>' +
            '<ul class="lista-voluntariado">' +
              listaVoluntariado.map(function (item) {
                return '<li>' + item + '</li>';
              }).join('') +
            '</ul>' +
            '<a href="cadastro.html" class="botao botao--primario" data-rota="cadastro">Quero ser voluntário</a>' +
          '</div>' +
        '</div>' +
      '</section>';
  },

  cadastro: function () {
    return '' +
      '<section class="secao-topo-pagina">' +
        '<div class="container">' +
          '<h1>Faça parte do Projeto Esperança</h1>' +
          '<p>Preencha o formulário abaixo para demonstrar seu interesse em participar das nossas iniciativas. Suas informações serão utilizadas apenas para fins acadêmicos dentro deste projeto fictício.</p>' +
        '</div>' +
      '</section>' +

      '<section class="secao">' +
        '<div class="container container--estreito">' +
          '<div class="alerta alerta--info" role="note">' +
            '<p>Confira as informações antes de continuar.</p>' +
          '</div>' +

          '<div id="area-registros"></div>' +

          '<form class="formulario-cadastro" id="formulario-cadastro" novalidate>' +
            '<fieldset>' +
              '<legend>Dados pessoais</legend>' +
              criarCampo('nome', 'Nome completo', 'text', ' required minlength="3" maxlength="100" autocomplete="name"') +
              '<div class="campo">' +
                '<label for="cpf">CPF</label>' +
                '<input type="text" id="cpf" name="cpf" required inputmode="numeric" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" maxlength="14" aria-describedby="ajuda-cpf">' +
                '<p class="campo__ajuda" id="ajuda-cpf">Apenas o formato é validado, sem verificação de CPF real.</p>' +
              '</div>' +
              criarCampo('nascimento', 'Data de nascimento', 'date', ' required') +
              criarCampo('email', 'E-mail', 'email', ' required autocomplete="email"') +
              '<div class="campo">' +
                '<label for="telefone">Telefone</label>' +
                '<input type="tel" id="telefone" name="telefone" required inputmode="numeric" placeholder="(00) 00000-0000" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" maxlength="15" autocomplete="tel">' +
              '</div>' +
            '</fieldset>' +

            '<fieldset>' +
              '<legend>Endereço</legend>' +
              '<div class="campo">' +
                '<label for="cep">CEP</label>' +
                '<input type="text" id="cep" name="cep" required inputmode="numeric" placeholder="00000-000" pattern="\\d{5}-\\d{3}" maxlength="9" autocomplete="postal-code">' +
              '</div>' +
              criarCampo('endereco', 'Endereço', 'text', ' required autocomplete="address-line1"') +
              '<div class="campo campo--pequeno">' +
                '<label for="numero">Número</label>' +
                '<input type="number" id="numero" name="numero" required min="1">' +
              '</div>' +
              criarCampo('complemento', 'Complemento', 'text', ' autocomplete="address-line2"') +
              criarCampo('bairro', 'Bairro', 'text', ' required') +
              criarCampo('cidade', 'Cidade', 'text', ' required autocomplete="address-level2"') +
              '<div class="campo campo--pequeno">' +
                '<label for="estado">Estado</label>' +
                '<select id="estado" name="estado" required autocomplete="address-level1">' +
                  '<option value="">Selecione</option>' +
                  listaEstados.map(function (uf) {
                    return '<option value="' + uf.valor + '">' + uf.texto + '</option>';
                  }).join('') +
                '</select>' +
              '</div>' +
            '</fieldset>' +

            '<fieldset>' +
              '<legend>Como você deseja participar?</legend>' +
              '<p class="campo__ajuda">Você pode marcar mais de uma opção.</p>' +
              '<div class="opcoes-checkbox">' +
                listaInteresses.map(criarOpcaoInteresse).join('') +
              '</div>' +
            '</fieldset>' +

            '<fieldset>' +
              '<legend>Mensagem</legend>' +
              '<div class="campo">' +
                '<label for="mensagem">Conte-nos como gostaria de ajudar</label>' +
                '<textarea id="mensagem" name="mensagem" rows="5" maxlength="500"></textarea>' +
              '</div>' +
            '</fieldset>' +

            '<div class="campo-termos">' +
              '<input type="checkbox" id="termos" name="termos" required>' +
              '<label for="termos">Concordo em fornecer meus dados para fins de contato relacionados a este projeto acadêmico.</label>' +
            '</div>' +

            '<button type="submit" class="botao botao--primario botao--enviar">Enviar cadastro</button>' +

            '<p class="formulario-cadastro__feedback" id="feedback-formulario" role="status" aria-live="polite"></p>' +
          '</form>' +
        '</div>' +
      '</section>';
  }
};

/* Dados que alimentam os templates. Separá-los das funções evita
   repetir marcação quase idêntica para cada projeto ou cartão. */
var listaProjetos = [
  {
    imagem: 'projeto-1.png',
    alt: 'Voluntários distribuindo alimentos durante uma ação comunitária',
    badge: { texto: 'Ação social', cor: 'verde' },
    titulo: 'Mesa Solidária',
    descricao: 'O projeto Mesa Solidária busca contribuir com famílias em situação de vulnerabilidade por meio da arrecadação e distribuição de alimentos e produtos essenciais.',
    objetivo: 'combater a insegurança alimentar e aproximar pessoas dispostas a ajudar de famílias que precisam de apoio.',
    botao: 'Quero apoiar',
    invertido: false
  },
  {
    imagem: 'projeto-2.png',
    alt: 'Jovens participando de uma atividade educativa',
    badge: { texto: 'Projeto ativo', cor: 'azul' },
    titulo: 'Caminhos para o Futuro',
    descricao: 'O projeto oferece atividades educativas e oficinas voltadas ao desenvolvimento pessoal e à preparação de jovens para novas oportunidades.',
    objetivo: 'estimular o aprendizado, a autonomia e o desenvolvimento de novas habilidades.',
    botao: 'Conheça a iniciativa',
    invertido: true
  },
  {
    imagem: 'projeto-3.png',
    alt: 'Voluntários realizando atividades de apoio à comunidade',
    badge: { texto: 'Voluntariado', cor: 'marinho' },
    titulo: 'Rede de Apoio',
    descricao: 'A Rede de Apoio reúne voluntários para participar de ações comunitárias, campanhas de arrecadação e atividades de apoio realizadas pelo Projeto Esperança.',
    objetivo: 'fortalecer a participação da comunidade e ampliar o alcance das ações sociais.',
    botao: 'Seja voluntário',
    invertido: false
  }
];

var listaDoacoes = [
  { titulo: 'Alimentação', texto: 'Contribua para campanhas de arrecadação de alimentos e produtos essenciais.' },
  { titulo: 'Educação', texto: 'Ajude a disponibilizar materiais e recursos para nossas atividades educativas.' },
  { titulo: 'Ações comunitárias', texto: 'Contribua para a realização de eventos e iniciativas de apoio à comunidade.' }
];

var listaVoluntariado = [
  'Apoio em campanhas de arrecadação',
  'Organização de eventos',
  'Atividades educativas',
  'Divulgação das ações',
  'Apoio em ações comunitárias'
];

var listaEstados = [
  { valor: 'SP', texto: 'SP' },
  { valor: 'MG', texto: 'MG' },
  { valor: 'RJ', texto: 'RJ' },
  { valor: 'PR', texto: 'PR' },
  { valor: 'SC', texto: 'SC' },
  { valor: 'RS', texto: 'RS' },
  { valor: 'GO', texto: 'GO' },
  { valor: 'BA', texto: 'BA' },
  { valor: 'outros', texto: 'Outros' }
];

var listaInteresses = [
  { id: 'interesse-voluntario', valor: 'voluntario', texto: 'Quero ser voluntário' },
  { id: 'interesse-doacao', valor: 'doacao', texto: 'Quero realizar uma doação' },
  { id: 'interesse-projetos', valor: 'projetos', texto: 'Quero participar de projetos' },
  { id: 'interesse-informacoes', valor: 'informacoes', texto: 'Quero receber informações' }
];

function criarCartaoValor(modificador, titulo, texto) {
  return '<article class="cartao-valor cartao-valor--' + modificador + '">' +
    '<h3>' + titulo + '</h3>' +
    '<p>' + texto + '</p>' +
    '</article>';
}

function criarNumero(valor, rotulo) {
  return '<div class="lista-numeros__item">' +
    '<dt>' + valor + '</dt>' +
    '<dd>' + rotulo + '</dd>' +
    '</div>';
}

function criarProjeto(projeto) {
  return '<article class="projeto' + (projeto.invertido ? ' projeto--invertido' : '') + '">' +
    '<div class="projeto__imagem">' +
      '<img src="/imagens/' + projeto.imagem + '" alt="' + projeto.alt + '">' +
    '</div>' +
    '<div class="projeto__texto">' +
      '<span class="badge badge--' + projeto.badge.cor + '">' + projeto.badge.texto + '</span>' +
      '<h2>' + projeto.titulo + '</h2>' +
      '<p>' + projeto.descricao + '</p>' +
      '<p><strong>Objetivo:</strong> ' + projeto.objetivo + '</p>' +
      '<a href="cadastro.html" class="botao botao--primario" data-rota="cadastro">' + projeto.botao + '</a>' +
    '</div>' +
    '</article>';
}

function criarCartaoDoacao(item) {
  return '<article class="cartao-doacao">' +
    '<span class="badge badge--verde">Doação</span>' +
    '<h3>' + item.titulo + '</h3>' +
    '<p>' + item.texto + '</p>' +
    '</article>';
}

function criarCampo(id, rotulo, tipo, atributos) {
  return '<div class="campo">' +
    '<label for="' + id + '">' + rotulo + '</label>' +
    '<input type="' + tipo + '" id="' + id + '" name="' + id + '"' + (atributos || '') + '>' +
    '</div>';
}

function criarOpcaoInteresse(opcao) {
  return '<div class="opcao-checkbox">' +
    '<input type="checkbox" id="' + opcao.id + '" name="interesse" value="' + opcao.valor + '">' +
    '<label for="' + opcao.id + '">' + opcao.texto + '</label>' +
    '</div>';
}

/* =====================================================
   2. ROTEAMENTO
   ===================================================== */
var rotas = {
  inicio: { arquivo: 'index.html', titulo: 'Projeto Esperança — Juntos, transformamos solidariedade em oportunidades' },
  projetos: { arquivo: 'projetos.html', titulo: 'Nossos projetos — Projeto Esperança' },
  cadastro: { arquivo: 'cadastro.html', titulo: 'Cadastro — Projeto Esperança' }
};

/* Ao abrir o projeto direto do disco (file://), o navegador bloqueia
   history.pushState por questões de origem. Nesse caso a SPA usa o
   hash da URL (#/projetos) como rota, o que funciona nos dois modos. */
var usaPushState = window.location.protocol !== 'file:';

function iniciarRoteamento() {
  document.addEventListener('click', tratarCliqueNavegacao);

  window.addEventListener('popstate', function () {
    renderizarRota(rotaAtual(), false);
  });

  window.addEventListener('hashchange', function () {
    renderizarRota(rotaAtual(), false);
  });

  renderizarRota(rotaAtual(), false);
}

// Descobre a rota atual pela ordem: hash da URL -> nome do arquivo
// aberto -> atributo data-rota-inicial do <main>.
function rotaAtual() {
  var hash = window.location.hash.replace('#/', '').replace('#', '');
  if (rotas[hash]) return hash;

  var caminho = window.location.pathname.split('/').pop();
  for (var nome in rotas) {
    if (rotas[nome].arquivo === caminho) return nome;
  }

  var app = document.getElementById('app');
  var inicial = app ? app.getAttribute('data-rota-inicial') : null;
  return rotas[inicial] ? inicial : 'inicio';
}

// Um único listener no document cobre tanto os links fixos do cabeçalho
// quanto os links criados dinamicamente pelos templates.
function tratarCliqueNavegacao(evento) {
  var link = evento.target.closest('a[data-rota]');
  if (!link) return;

  var rota = link.getAttribute('data-rota');
  if (!rotas[rota]) return;

  evento.preventDefault();
  navegar(rota);
}

function navegar(rota) {
  if (usaPushState) {
    history.pushState({ rota: rota }, '', rotas[rota].arquivo);
  } else {
    window.location.hash = '#/' + rota;
    return; // o evento hashchange chama a renderização
  }

  renderizarRota(rota, true);
}

function renderizarRota(rota, rolarParaTopo) {
  var app = document.getElementById('app');
  if (!app || !rotas[rota]) return;

  app.innerHTML = Templates[rota]();
  document.title = rotas[rota].titulo;

  destacarLinkAtivo(rota);
  fecharMenu();

  if (rota === 'cadastro') {
    configurarMascaras();
    configurarFormulario();
    exibirRegistrosSalvos();
  }

  if (rolarParaTopo) {
    window.scrollTo(0, 0);
  }
}

function destacarLinkAtivo(rota) {
  var links = document.querySelectorAll('.navegacao__lista a[data-rota]');
  Array.prototype.forEach.call(links, function (link) {
    if (link.getAttribute('data-rota') === rota) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

/* =====================================================
   3. MENU
   ===================================================== */
function configurarMenuMobile() {
  var botao = document.getElementById('botao-menu');
  var menu = document.getElementById('menu-principal');

  if (!botao || !menu) return;

  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });
}

function fecharMenu() {
  var botao = document.getElementById('botao-menu');
  var menu = document.getElementById('menu-principal');

  if (!botao || !menu) return;

  menu.classList.remove('aberto');
  botao.setAttribute('aria-expanded', 'false');
}

/* =====================================================
   4. MÁSCARAS
   Cada máscara extrai somente os dígitos digitados e reconstrói o
   valor formatado a cada evento de input, o que permite apagar e
   editar normalmente sem "travar" o cursor em posições fixas.
   ===================================================== */
function configurarMascaras() {
  aplicarMascara('cpf', mascararCpf);
  aplicarMascara('telefone', mascararTelefone);
  aplicarMascara('cep', mascararCep);
}

function aplicarMascara(id, funcaoMascara) {
  var campo = document.getElementById(id);
  if (!campo) return;

  campo.addEventListener('input', function () {
    campo.value = funcaoMascara(campo.value);
  });
}

function somenteDigitos(valor) {
  return valor.replace(/\D/g, '');
}

function mascararCpf(valor) {
  var digitos = somenteDigitos(valor).slice(0, 11);

  if (digitos.length > 9) {
    return digitos.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  }
  if (digitos.length > 6) {
    return digitos.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  }
  if (digitos.length > 3) {
    return digitos.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }
  return digitos;
}

function mascararTelefone(valor) {
  var digitos = somenteDigitos(valor).slice(0, 11);

  if (digitos.length > 7) {
    return digitos.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
  }
  if (digitos.length > 2) {
    return digitos.replace(/(\d{2})(\d{1,5})/, '($1) $2');
  }
  if (digitos.length > 0) {
    return digitos.replace(/(\d{1,2})/, '($1');
  }
  return digitos;
}

function mascararCep(valor) {
  var digitos = somenteDigitos(valor).slice(0, 8);

  if (digitos.length > 5) {
    return digitos.replace(/(\d{5})(\d{1,3})/, '$1-$2');
  }
  return digitos;
}

/* =====================================================
   5. FORMULÁRIO E VALIDAÇÃO
   ===================================================== */
function configurarFormulario() {
  var formulario = document.getElementById('formulario-cadastro');
  var feedback = document.getElementById('feedback-formulario');

  if (!formulario) return;

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // A validação nativa do HTML5 (required, pattern, type) já cobre os
    // campos; aqui apenas exibimos o resultado, sem enviar dados a um
    // servidor.
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      definirAlerta(feedback, 'erro', 'Existem campos que precisam ser preenchidos corretamente.');
      return;
    }

    salvarCadastro(lerDadosFormulario(formulario));
    definirAlerta(feedback, 'sucesso', 'Cadastro realizado com sucesso! Esta é uma demonstração acadêmica — os dados ficam salvos apenas neste navegador.');
    mostrarToast('Cadastro enviado com sucesso!');
    formulario.reset();
    exibirRegistrosSalvos();
  });
}

function lerDadosFormulario(formulario) {
  var dados = {};
  var campos = formulario.querySelectorAll('input:not([type="checkbox"]), select, textarea');

  Array.prototype.forEach.call(campos, function (campo) {
    dados[campo.name] = campo.value;
  });

  var marcados = formulario.querySelectorAll('input[name="interesse"]:checked');
  dados.interesses = Array.prototype.map.call(marcados, function (item) {
    return item.value;
  });

  dados.enviadoEm = new Date().toISOString();
  return dados;
}

/* =====================================================
   6. ARMAZENAMENTO (localStorage)
   ===================================================== */
var CHAVE_CADASTROS = 'projetoEsperanca.cadastros';

// O acesso ao localStorage fica dentro de try/catch porque o navegador
// pode bloqueá-lo (modo privado ou cookies desativados) — nesse caso a
// aplicação continua funcionando, apenas sem persistir os dados.
function lerCadastros() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
  } catch (erro) {
    return [];
  }
}

function salvarCadastro(dados) {
  try {
    var cadastros = lerCadastros();
    cadastros.push(dados);
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
  } catch (erro) {
    mostrarToast('Não foi possível salvar os dados neste navegador.');
  }
}

function limparCadastros() {
  try {
    localStorage.removeItem(CHAVE_CADASTROS);
  } catch (erro) {
    return;
  }
}

function exibirRegistrosSalvos() {
  var area = document.getElementById('area-registros');
  if (!area) return;

  var cadastros = lerCadastros();

  if (cadastros.length === 0) {
    area.innerHTML = '';
    return;
  }

  var ultimo = cadastros[cadastros.length - 1];
  area.innerHTML = '<div class="alerta alerta--sucesso" role="note">' +
    '<p>Existem ' + cadastros.length + ' cadastro(s) salvos neste navegador. Último envio: ' +
    (ultimo.nome || 'sem nome') + '. ' +
    '<button type="button" class="botao-limpar" id="limpar-registros">Limpar registros salvos</button></p>' +
    '</div>';

  var botao = document.getElementById('limpar-registros');
  if (botao) {
    botao.addEventListener('click', function () {
      limparCadastros();
      exibirRegistrosSalvos();
      mostrarToast('Registros removidos deste navegador.');
    });
  }
}

/* =====================================================
   7. FEEDBACK (alertas e toast)
   ===================================================== */

// Transforma o parágrafo de feedback (que já possui aria-live) em uma
// caixa de alerta, reaproveitando o mesmo elemento para os dois estados
// possíveis em vez de criar uma segunda lógica de mensagens.
function definirAlerta(elemento, tipo, mensagem) {
  if (!elemento) return;

  elemento.textContent = mensagem;
  elemento.classList.remove('alerta--sucesso', 'alerta--erro');
  elemento.classList.add('alerta', 'alerta--' + tipo);
}

var elementoToast = null;
var mensagemToast = null;
var temporizadorToast = null;

function configurarToast() {
  elementoToast = document.getElementById('toast');
  mensagemToast = document.getElementById('toast-mensagem');

  if (!elementoToast) return;

  var botaoFechar = document.getElementById('toast-fechar');
  if (botaoFechar) {
    botaoFechar.addEventListener('click', ocultarToast);
  }

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && elementoToast.classList.contains('toast--visivel')) {
      ocultarToast();
    }
  });
}

function mostrarToast(mensagem) {
  if (!elementoToast || !mensagemToast) return;

  mensagemToast.textContent = mensagem;
  elementoToast.classList.add('toast--visivel');

  // Reinicia o temporizador a cada chamada, para não fechar antes da
  // hora caso o toast seja disparado mais de uma vez seguida.
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(ocultarToast, 5000);
}

function ocultarToast() {
  if (!elementoToast) return;
  elementoToast.classList.remove('toast--visivel');
  clearTimeout(temporizadorToast);
}

/* ---------- Inicialização ---------- */
document.addEventListener('DOMContentLoaded', function () {
  configurarMenuMobile();
  configurarToast();
  iniciarRoteamento();
});
