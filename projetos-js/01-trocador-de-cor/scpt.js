var botao = document.getElementById('botao')

botao.addEventListener('click', troca_cor)

function troca_cor() {
    let colors = ['red', 'green', 'ciano', 'yellow', 'purple','blue', 'darkred', 'grey', 'darkgrey', 'black', 'aqua']
    let corpo = document.getElementById('principal')
    corpo.style.background = colors[gera_num()]
    
    function gera_num() {
        let min = 0
        let max = Number(colors.length)
        return Math.floor(Math.random() * (max-min + 1)) + min
    }
}