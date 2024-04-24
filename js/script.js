//! Function para quando clicar nos números , eles aparecerem na tela
function insert(num){
    //? Armazena na variável numero, o número escolhido 
    var numero = document.getElementById('resultado').innerHTML
    //? permite que outro numero seja adicionado , sem que quando você clique em outro número,ele apague o que já estava
    document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    //! limpar todo o campo
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    //! O método substring() é usado para extrair uma parte de uma string com base em índices específicos. No caso, estamos começando do índice 0 (primeiro caractere) e indo até o comprimento da string - 1. Isso basicamente remove o último caractere da string resultado.
}

function calcular(){
    let calculo = document.getElementById('resultado').innerHTML
    calculo = calculo.replace("^","**")
    calculo = calculo.replace("x","*")
    if(calculo){
        //! a função eval() é usada para avaliar a expressão matemática contida na string calculo e calcular o resultado. O resultado é então atribuído de volta ao elemento HTML com o ID "resultado", substituindo o conteúdo anterior.
        document.getElementById('resultado').innerHTML = eval(calculo)
    }
}
function raizQuadrada() {
    let resultado = document.getElementById('resultado').innerHTML;
    let raiz = Math.sqrt(eval(resultado));
    document.getElementById('resultado').innerHTML = raiz;
}
