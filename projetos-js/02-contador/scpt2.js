const res = document.getElementById('res')
const botoes = document.querySelectorAll('.botao')
var contagem = 0

botoes.forEach(function(botao) {
    botao.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if(styles.contains("aumentar")){
         contagem++
        }else if(styles.contains("diminuir")){
            contagem--
        }else{
            contagem = 0
        }
        if(contagem == 0){
            res.style.color = 'black'
        }else{
            contagem>0? res.style.color = 'green': res.style.color = 'red'
        }
        res.innerText = contagem
    })
})