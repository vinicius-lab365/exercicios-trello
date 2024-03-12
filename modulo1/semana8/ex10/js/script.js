function adicionarTarefa() {
    const novaTarefaInput = document.getElementById('novaTarefa');
    const novaTarefaTexto = novaTarefaInput.value.trim();

    if (novaTarefaTexto !== '') {
        const listaTarefas = document.getElementById('listaTarefas');

        const novaTarefaItem = document.createElement('li');
        novaTarefaItem.innerHTML = `
            <input type="checkbox" onchange="marcarComoConcluida(this)">
            <span>${novaTarefaTexto}</span>
            <button onclick="removerTarefa(this)">Remover</button>
        `;
        listaTarefas.appendChild(novaTarefaItem);

        // Limpa o campo de entrada
        novaTarefaInput.value = '';
    }
}

function marcarComoConcluida(checkbox) {
    const tarefaTexto = checkbox.nextElementSibling; // Pega o elemento de texto adjacente ao checkbox

    if (checkbox.checked) {
        tarefaTexto.classList.add('completed');
    } else {
        tarefaTexto.classList.remove('completed');
    }
}

function removerTarefa(botaoRemover) {
    const tarefaItem = botaoRemover.parentNode;
    const listaTarefas = tarefaItem.parentNode;

    // Remove o item da lista
    listaTarefas.removeChild(tarefaItem);
}

