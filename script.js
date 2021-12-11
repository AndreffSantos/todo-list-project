// Constantes do scripts.
const input = document.querySelector('#texto-tarefa');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
// Todas as funções do script.

function adicionaTarefa() {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  // newLi.style.textTransform = 'capitalize';
  olListaTarefas.appendChild(newLi);
  input.value = '';
}

function selecionaTarefa(event) {
  const eTarget = event.target;
  console.log();
  if (document.querySelector('.selected') === null) {
    eTarget.classList.add('selected');
    eTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  } else {
    document.querySelector('.selected').style.backgroundColor = 'rgb(255,255,255)';
    document.querySelector('.selected').classList.remove('selected');
    eTarget.classList.add('selected');
    eTarget.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function riscarTarefa(event) {
  const eTarget = event.target;
  eTarget.classList.add('completed', 'completed::marker');
}

// Chama todas as funções
buttonCriarTarefa.addEventListener('click', adicionaTarefa);
olListaTarefas.addEventListener('click', selecionaTarefa);
olListaTarefas.addEventListener('dblclick', riscarTarefa);
