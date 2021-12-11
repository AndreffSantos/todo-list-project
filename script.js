// Constantes do scripts.
const input = document.querySelector('#texto-tarefa');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
// Todas as funções do script.
function adicionaTarefa() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  newLi.style.textTransform = 'capitalize';
  olListaTarefas.appendChild(newLi);
  input.value = '';
}

function selecionaTarefa(event) {
  const elementTarget = event.target;
  elementTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Chama todas as funções
buttonCriarTarefa.addEventListener('click', adicionaTarefa);
olListaTarefas.addEventListener('click', selecionaTarefa);
