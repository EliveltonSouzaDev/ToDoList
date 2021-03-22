import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'
import {
    carregaTarefa
} from './carregaTarefa.js'


export const handleNovoItem = (evento) => {

    evento.preventDefault()



    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    /*pega os dados dos inputs*/
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    /*pega input data e formata*/
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')

    /* verifica dados dos inputs*/
    if (valor == "" || valor == undefined || dataFormatada == "Invalid date" ) {
        alert("Preencha os campos corretamente!");
        input.value = " "
        dataFormatada = " "
        return false;
    }

    const concluida = false

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }
    /*junta os dados do locastorage e do que o usuario adicionar*/
    const tarefasAtualizadas = [...tarefas, dados]

    /*transforma os dados em string*/
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
}

export const Tarefa = ({
    valor,
    horario,
    concluida
}, id) => {

    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${horario} * ${valor}</p>`

    if (concluida) {
        tarefa.classList.add('done')
    }

    tarefa.classList.add('task')


    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa

}