let botao_verifica = window.document.getElementById('verifica_idade')

botao_verifica.addEventListener('click', monta_mensagem)

function monta_mensagem(ano_informado) {
    oculta_imagens()
    var mensagem = document.getElementById('mensagem')
    ano_informado = verifica_ano_informado()
    var idade = calula_idade(ano_informado)

    var tp_pessoa = retorna_tipo_pessoa(idade)

    if(ano_informado != false && idade != false && tp_pessoa != false){
        mensagem.innerHTML = `Você é <strong>${tp_pessoa}</strong> e tem <strong>${idade}</strong> anos <br/>`

        exibe_imagem(tp_pessoa)
        oculta_paragrafo()
    }


}

function oculta_paragrafo() {
    var p =  document.getElementById('final')
    p.style.display = 'none'
}

function oculta_imagens() {
    var imagens = document.querySelectorAll(".imagens > div > img")
    var mensagem = document.getElementById('mensagem')
    mensagem.innerText = ''
    console.log(imagens[0].id)
    imagens.forEach(iterar_imagens)
    function iterar_imagens(element, index, array){
        imagem = document.getElementById(array[index].id)
        imagem.style.display = 'none'
    }
}

function verifica_ano_informado() {
    var ano_informado = document.getElementById('iano')
    ano_informado = ano_informado.value
    
    if(ano_informado == ''){
        window.alert('Favor preencher o ano de nascimento')
        return false
    } else if(ano_informado > Number(new Date().getFullYear()) || ano_informado < 1930){
        window.alert('Favor inserir um ano valido')
    } else {
        return ano_informado
    }

}

function calula_idade(ano_nascimento) {
    var ano_atual = Number(new Date().getFullYear())
    var idade = null
    if(ano_nascimento != false) {
        idade = ano_atual - ano_nascimento
        return idade
    } else {
        return false
    }
}

function retorna_tipo_pessoa(idade) {
    var sexo_m = document.getElementById('isexom').checked
    var sexo_f = document.getElementById('isexof').checked

    if(sexo_f == false && sexo_m == false){
        return false
    }
    
    if(sexo_m != false || sexo_f != false){

        if(idade <= 13 && sexo_f == true){
            return 'uma menina'
        }else if (idade <= 13 && sexo_m == true){
            return 'um menino'
        }
        else if(idade <= 18 && sexo_m ==true){
            return 'um adolescente'
        }else if(idade <= 18 && sexo_f ==true){
            return 'uma adolescente'
        }else if(idade <= 50 && sexo_m ==true){
            return 'um homem'
        }else if(idade <=50 && sexo_f ==true){
            return 'uma mulher'
        }else if(idade > 50 && sexo_m ==true){
            return 'um senhor'
        }else if(idade > 50 && sexo_f ==true){
            return 'uma senhora'
        }else{
            return false
        }}
}

function exibe_imagem(tp_pessoa) {
    switch(tp_pessoa){
        case 'um menino':
            var foto = document.getElementById('h-crianca')
            foto.style.display = 'inline'
            foto.style.padding = '5px'
            break;

        case 'uma menina':
            var foto = document.getElementById('m-crianca')
            foto.style.display = 'inline'
            foto.style.padding = '5px'
            break;

        case 'um adolescente':
        var foto = document.getElementById('h-adolescente')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;

        case 'uma adolescente':
        var foto = document.getElementById('m-adolescente')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;

        case 'um homem':
        var foto = document.getElementById('h-adulto')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;

        case 'uma mulher':
        var foto = document.getElementById('m-adulta')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;

        case 'um senhor':
        var foto = document.getElementById('h-idoso')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;

        case 'uma senhora':
        var foto = document.getElementById('m-idosa')
        foto.style.display = 'inline'
        foto.style.padding = '5px'
        break;
            
    }
}

//comandos que descobri depois
//document.createElement
//document.setAttribute