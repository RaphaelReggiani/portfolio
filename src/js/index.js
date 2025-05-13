const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosOcultos = document.querySelector('.projetos-ocultos');

let projetosVisiveis = false;

botaoMostrarProjetos.addEventListener('click', () => {
  projetosVisiveis = !projetosVisiveis;

  if (projetosVisiveis) {
    mostrarProjetos();
  } else {
    esconderProjetos();
  }

  atualizarTextoBotao();
});

function mostrarProjetos() {
  projetosOcultos.style.display = 'flex';
}

function esconderProjetos() {
  projetosOcultos.style.display = 'none';
}

function atualizarTextoBotao() {
  botaoMostrarProjetos.textContent = projetosVisiveis ? 'Mostrar menos' : 'Mostrar mais';
}