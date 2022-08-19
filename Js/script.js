const elementoLista = document.querySelector('ul') //cria uma const para armazenar  a lista ul
const elementoInput = document.querySelector('input')//cosnt para armazenar os dados de entrada
const elementoBotao = document.querySelector('button')//cost para armazenar o evento do button

const tarefas = []//array para armazenar as tarefas

function mostraTarefas() {

    elementoLista.innerHTML = '';

     for (tarefa of tarefas) { //cada tarefa é um ítem do array
        const elementoTarefa = document.createElement('li') //cria elemento que vai dentro da "ul"
        const textoTarefa = document.createTextNode(tarefa) //cria um texto que vai na tarefa
        
        const elementolink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa) //posição da tarefa add
        const linkText = document.createTextNode('X') 
       
        elementolink.appendChild(linkText) //remove um link do array
        elementolink.setAttribute('href', '#') //da aparencia de link na tela, para remover o array

        elementolink.setAttribute('onclick', `deletaTarefa(${pos})`) //template string - essa fç será criada mais pra baixo
        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementolink)//pega o "Li" - adicionar nele o link criado - deleta tarefa
    }
}

mostraTarefas()

function addTarefa() { //será adicionada ao evento do botão
    const textoTarefa = elementoInput.value //quer só o valor que é digitado
    tarefas.push(textoTarefa)

    mostraTarefas()
    elementoInput.value = ''; //depois que recebe o elemento, limpa o campo do input
}

elementoBotao.setAttribute('onclick', 'addTarefa()')//criou um evento para o botão (onClick) e esse evento, chama a function addTarefas()

function deletaTarefa(pos) {
    tarefas.splice(pos, 1) //começa na posição que está e exclui apenas um ítem
    mostraTarefas() //após a exclusão, chama a fç mostra tarefas para reinderizar sem o ítem excluído
}