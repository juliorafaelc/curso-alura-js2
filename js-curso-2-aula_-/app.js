//Novo jogo do Numero Secreto
var listaDeNumeros = [];
var numeroMaximo = 10;
var numeroSecreto = gerarNumeroAleatorio(numeroMaximo);
var tentativa = 1;

function exibirTextoNaTela(tag, texto){
  var campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela("h1", "Hora do Desafio");
  exibirTextoNaTela("p", `Escolha um numero entre 1 e ${numeroMaximo}`);
}

function verificarChute(){
  var chute = document.querySelector("input").value;
  var palavraTentativa = tentativa > 1 ? "tentativas!" : "tentativa!";

  if(chute == numeroSecreto){
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", `Achou o numero secreto '${numeroSecreto}', em ${tentativa} ${palavraTentativa}!`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else{
    if(chute > numeroSecreto){
      exibirTextoNaTela("h1", "Errou");
      exibirTextoNaTela("p", `O numero entre 1 e ${numeroMaximo} é menor. (${tentativa}ª ${palavraTentativa})`);
      tentativa++;
    } else{
      if(chute < numeroSecreto)
      exibirTextoNaTela("h1", "Errou");
      exibirTextoNaTela("p", `O numero entre 1 e ${numeroMaximo} é maior. (${tentativa}ª ${palavraTentativa})`);
      tentativa++;
    }
  }
  limparCampo()
}

function gerarNumeroAleatorio(numeroMaximo) {
  var numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
  var quantidadeElementosLista = listaDeNumeros.length;

  if(quantidadeElementosLista == numeroMaximo){
    listaDeNumeros = [];
  }

  if(listaDeNumeros.includes(numeroEscolhido)){
    gerarNumeroAleatorio(numeroMaximo)
  } else {
    listaDeNumeros.push(numeroEscolhido)
    console.log(listaDeNumeros)
  }
  return numeroEscolhido

}

// function sorteiaNumero(numeroMaximo){
//   var sorteios = [];
//   var tamanhoArray = 1;

//   while (tamanhoArray <= numeroMaximo) {
//     var numeroAleatorio = gerarNumeroAleatorio();
//     var achou = false;
//     for (var posicao = 0; posicao < sorteios.length; posicao++) {
//       if (sorteios[posicao] == numeroAleatorio) {
//         achou = true;
//         break;
//       }
//     }
//     if (achou == false) {
//       sorteios.push(numeroAleatorio);
//       tamanhoArray++;
//     }
//   }
//   return sorteios;
// }

function limparCampo(){
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio(numeroMaximo)
  limparCampo()
  tentativa = 1
  exibirMensagemInicial()
  console.log(numeroSecreto)
  document.getElementById("reiniciar").setAttribute("disabled", true)
}

exibirMensagemInicial()
console.log(numeroSecreto)