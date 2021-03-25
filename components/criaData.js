import {
    Tarefa
} from './criaTarefa.js'


export const criaData = (data) => {

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY');
    const dataTopo = document.createElement('li');
    const conteudo = `<p class="content-data">${dataMoment.format('DD/MM/YYYY')}</p>`


    dataTopo.innerHTML = conteudo

    tarefas.forEach(((tarefa, id) => {

        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        /* diff faz o calculo das datas, caso seja igual a 0 , coloca o conteudo em um bloco já existente*/
        const diff = dataMoment.diff(dia)
        if (diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa, id))
        }
    }))

    return dataTopo;
}