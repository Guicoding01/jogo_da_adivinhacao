let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto &#x1F648');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    /*
    let armazenar = document.getElementById('valores');
    armazenar.innerHTML = chute
    */  
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou Miseravel!');''
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1','errou idiota &#x1F921')
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        espera();
        
        
    }


}



function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

/* acumulador de tentativas */

function espera(){
    
    if(tentativas == 11){
        setTimeout(()=>{
            document.getElementById('chute').setAttribute('disabled', true)
            document.getElementById('campo').setAttribute('disabled', true)
            exibirTextoNaTela('h1','chances esgotadas &#x1F921')
            exibirTextoNaTela('p', 'Tente amanhã , Será liberado novamente após 24hrs ');
            limparCampo();
        },1000)
    }
}
