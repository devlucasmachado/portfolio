const jogadas = document.querySelectorAll('.botao')

jogadas.forEach(function(array){
    array.addEventListener('click', jogada)
    function jogada(e) {
        let usuario_escolheu = ''
        const jogada_escolhida = e.currentTarget.classList
        if (jogada_escolhida.contains('pedra')) {
            usuario_escolheu = 'pedra'
        } else if (jogada_escolhida.contains('papel')) {
            usuario_escolheu = 'papel'
        } else {
            usuario_escolheu = 'tesoura'
        } const jokenpo = new jogo(usuario_escolheu).init()
    }  
})




class jogo{
    constructor(jogada_usuario){
        this.jogada_usuario = jogada_usuario
    }
    
    define_jogada_maquina(){
        let lista_jogadas = ['pedra', 'papel', 'tesoura']
        let jogada = lista_jogadas[getRandomInt(0, lista_jogadas.length)]
    
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
          }
        return jogada
    }

    retorna_vencedor(jogada_usuario, jogada_maquina){
        if(jogada_maquina == jogada_usuario){
            return 'empate'
        }else if(jogada_maquina == 'pedra' && jogada_usuario == 'tesoura'){
            return 'maquina'
        }else if(jogada_maquina == 'papel' && jogada_usuario == 'pedra'){
            return 'maquina'
        }else if(jogada_maquina == 'tesoura' && jogada_usuario == 'papel'){
            return 'maquina'
        }else{
            return 'usuario'
        }
    }
    
    altera_placar(resultado_rodada){
        const placar_usuario = document.getElementById('placar-usuario')
        const placar_maquina = document.getElementById('placar-maquina')
        if(resultado_rodada == 'maquina'){
            let valor_atual = Number(placar_maquina.value)
            placar_maquina.innerText = valor_atual + 1
        }else if(resultado_rodada == 'usuario'){
            let valor_atual = Number(placar_usuario.value)
            placar_usuario.innerText = valor_atual + 1
        }

        if(Number(placar_usuario.value) > Number(placar_maquina.value)){
            placar_usuario.style.color = "green"
            placar_maquina.style.color = 'red'
        }else if(Number(placar_maquina.value) > Number(placar_usuario.value)){
            placar_usuario.style.color = "red"
            placar_maquina.style.color = 'green'
        }else{
            placar_usuario.style.color = "blue"
            placar_maquina.style.color = 'blue'
        }
    }

    async oculta_opcoes(){
        const opcoes = document.getElementById('tabuleiro-jogadas')
        opcoes.style.display = 'none'

        setTimeout(() => {
            opcoes.style.display = 'flex'
        }, 3000);

    }

    async exibe_vencedor_e_versus(vencedor){
        const res_vencedor = document.getElementById('thcenter')
        const versus = document.getElementById('versus')
        res_vencedor.innerHTML = vencedor != 'empate'? vencedor + ' venceu!': vencedor
        versus.style.display = 'block'
        res_vencedor.style.display = 'block'

        setTimeout(() => {
            res_vencedor.style.display = 'none' 
            versus.style.display = 'none'

        }, 3000);

    }

    realiza_jogadas(jogada_usuario, jogada_maquina, vencedor){
        const img_usuario = document.createElement('img')
        const img_maquina = document.createElement('img')
        const lado_usuario = document.querySelector('.tabuleiro-esquerdo')
        const lado_maquina = document.querySelector('.tabuleiro-direito')
        img_usuario.setAttribute('src',`images/${jogada_usuario}.png` )
        img_maquina.setAttribute('src',`images/${jogada_maquina}.png`)
        img_usuario.setAttribute('id','img-user')
        img_maquina.setAttribute('id','img-maquina')
        lado_usuario.appendChild(img_usuario)
        lado_maquina.appendChild(img_maquina)
        let formatar_img_usuario = document.getElementById('img-user')
        let formatar_img_maquina = document.getElementById('img-maquina')
        formatar_img_usuario.style.height = '100%'; formatar_img_usuario.style.width = '100%' ; formatar_img_usuario.style.transform = 'rotate(90deg) translateY(-5vw)'
        formatar_img_maquina.style.height = '100%'; formatar_img_maquina.style.width = '100%' ; formatar_img_maquina.style.transform = 'rotate(-90deg) translateY(-5vw)'
        
        if(vencedor == 'maquina'){
            formatar_img_maquina.style.backgroundColor = 'rgba(0, 100, 0, .40)' ; formatar_img_maquina.style.borderRadius = '50%'
            formatar_img_usuario.style.backgroundColor = 'rgba(100, 0, 0, .40)' ; formatar_img_usuario.style.borderRadius = '50%'
        }else if(vencedor == 'usuario'){
            formatar_img_usuario.style.backgroundColor = 'rgba(0, 100, 0, .40)' ; formatar_img_usuario.style.borderRadius = '50%'
            formatar_img_maquina.style.backgroundColor = 'rgba(100, 0, 0, .40)' ; formatar_img_maquina.style.borderRadius = '50%'
        }else{
            formatar_img_usuario.style.backgroundColor = 'rgba(0, 0, 100, .40)' ; formatar_img_usuario.style.borderRadius = '50%'
            formatar_img_maquina.style.backgroundColor = 'rgba(0, 0, 100, .40)' ; formatar_img_maquina.style.borderRadius = '50%'
        }



        setTimeout(() => {
            lado_usuario.removeChild(img_usuario)
            lado_maquina.removeChild(img_maquina)
        }, 3000);

    }

    init(){
        const jogada_maquina = this.define_jogada_maquina()
        const vencedor = this.retorna_vencedor(this.jogada_usuario, jogada_maquina)
        this.oculta_opcoes()
        this.exibe_vencedor_e_versus(vencedor)
        this.realiza_jogadas(this.jogada_usuario, jogada_maquina, vencedor)
        this.altera_placar(vencedor)
    }
}

