// Constantes do scripts.
const input = document.querySelector('#texto-tarefa');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const olListaTarefas = document.querySelector('#lista-tarefas');
//Todas as funções do script.
function adicionaTarefa() {
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    olListaTarefas.appendChild(newLi);
    input.value = '';
}

buttonCriarTarefa.addEventListener('click', adicionaTarefa);

