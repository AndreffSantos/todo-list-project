// Constantes do scripts.
const input = document.querySelector('#texto-tarefa');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
const buttonApagarTarefas = document.querySelector('#apaga-tudo');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
// Todas as funções do script.

function adicionaTarefa() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  olListaTarefas.appendChild(newLi);
  input.value = '';
}

function selecionaTarefa(event) {
  const eTarget = event.target;
  if (document.querySelector('.selected') === null) {
    eTarget.classList.toggle('selected');
  } else if (eTarget === document.querySelector('.selected')) {
    eTarget.classList.toggle('selected');
  } else {
    document.querySelector('.selected').classList.remove('selected');
    eTarget.classList.toggle('selected');
  }
}

function riscarTarefa(event) {
  const eTarget = event.target;
  eTarget.classList.toggle('completed');
}

function apagarLista() {
  olListaTarefas.innerHTML = '';
}

function removerFinalizados() {
  const tarefasFinalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefasFinalizados.length; index += 1) {
    olListaTarefas.removeChild(tarefasFinalizados[index]);
  }
}

// Chama todas as funções
buttonCriarTarefa.addEventListener('click', adicionaTarefa);
olListaTarefas.addEventListener('click', selecionaTarefa);
olListaTarefas.addEventListener('dblclick', riscarTarefa);
buttonApagarTarefas.addEventListener('click', apagarLista);
buttonRemoverFinalizados.addEventListener('click', removerFinalizados);
