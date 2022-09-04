const botao_aumentar = document.getElementById("aumentar")
const botao_diminuir = document.getElementById("diminuir")
const botao_resetar = document.getElementById("resetar")
const res = document.getElementById('res')
var res_value = Number(res.value)

botao_aumentar.addEventListener('click', () => {
    res_value += 1
    res.innerText = res_value
    muda_cor()
})

botao_diminuir.addEventListener('click', () => {
    res_value -= 1
    res.innerText = res_value
    muda_cor()
})

botao_resetar.addEventListener('click', () => {
    res_value = 0
    res.innerText = res_value
    muda_cor()
})

function muda_cor() {
    if(res_value > 0){
        res.style.color = 'green'
    }else if(res_value < 0){
        res.style.color = 'red'
    }else{
        res.style.color = 'black'
    }
}