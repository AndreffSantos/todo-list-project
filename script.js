// Constantes do scripts.
const input = document.querySelector('#texto-tarefa');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
const buttonApagarTarefas = document.querySelector('#apaga-tudo');
const buttonRemoverFinalizados = document.querySelector('#remover-finalizados');
const buttonSalvarTarefas = document.querySelector('#salvar-tarefas');
const string1 = 'CONTENT-';
const string2 = 'CLASS-';
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
  localStorage.clear();
}

function removerFinalizados() {
  const tarefasFinalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefasFinalizados.length; index += 1) {
    olListaTarefas.removeChild(tarefasFinalizados[index]);
  }
}

function capturaLista(lista) {
  for (let index = 0; index < lista.length; index += 1) {
    const valor1 = string1.concat(index);
    const valor2 = string2.concat(index);
    localStorage.setItem(valor1, lista[index].textContent);
    localStorage.setItem(valor2, lista[index].className);
  }
}

function salvarLista() {
  const lista = document.querySelectorAll('li');
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.toggle('selected');
    capturaLista(lista);
  } else {
    capturaLista(lista);
  }
}

// Chama todas as funções
buttonCriarTarefa.addEventListener('click', adicionaTarefa);
olListaTarefas.addEventListener('click', selecionaTarefa);
olListaTarefas.addEventListener('dblclick', riscarTarefa);
buttonApagarTarefas.addEventListener('click', apagarLista);
buttonRemoverFinalizados.addEventListener('click', removerFinalizados);
buttonSalvarTarefas.addEventListener('click', salvarLista);

const tam = localStorage.length;
if (tam > 0) {
  for (let index = 0; index < tam / 2; index += 1) {
    const newLi = document.createElement('li');
    const valor1 = string1.concat(index);
    newLi.innerText = localStorage[valor1];
    const valor2 = string2.concat(index);
    if (localStorage[valor2] !== '') {
      newLi.className = localStorage[valor2];
    }
    olListaTarefas.appendChild(newLi);    
  }
}
