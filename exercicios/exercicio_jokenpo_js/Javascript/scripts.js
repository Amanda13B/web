function jogada(opcaoJogador)
{
    //jogada do computador
    var sorteio = Math.floor(Math.random() * 3);
    var imagem;
    switch(sorteio)
    {
        case 0: imagem = "./Imagens/pedra.png";
                break;
        case 1: imagem = "./Imagens/papel.png";
                break;
        case 2: imagem = "./Imagens/tesoura.png";
                break;
    }
    var imgComputador = document.getElementById("computador");
    imgComputador.src = imagem;

    
    //jogada do player
    switch(opcaoJogador)
    {
        case 0: imagem = "./Imagens/pedra.png";
                break;
        case 1: imagem = "./Imagens/papel.png";
                break;
        case 2: imagem = "./Imagens/tesoura.png";
                break;
    }
    var imgJogador = document.getElementById("jogador");
    imgJogador.src = imagem;

    ComparaVencedor(sorteio, opcaoJogador);
}

var vitoriasComputador = 0;
var vitoriasJogador = 0;

function ComparaVencedor(jogadaComputador, jogadaPlayer){

        if(jogadaComputador == jogadaPlayer)
        {
                document.getElementById("resultado").innerHTML = "Empatou!";
        }
        else if((jogadaComputador == 0 && jogadaPlayer == 1) || (jogadaComputador == 1 && jogadaPlayer == 2) || (jogadaComputador == 2 && jogadaPlayer == 0))
        {
                document.getElementById("resultado").innerHTML = "Você Venceu!";
                vitoriasJogador ++;
        }
        else if((jogadaComputador == 0 && jogadaPlayer == 2) || (jogadaComputador == 1 && jogadaPlayer == 0) || (jogadaComputador == 2 && jogadaPlayer == 1))
        {
                document.getElementById("resultado").innerHTML = "Computador Venceu!";
                vitoriasComputador ++;
        }
        document.getElementById("pontuacao-computador").innerHTML = "Computador: " + vitoriasComputador.toString();
        document.getElementById("pontuacao-jogador").innerHTML = "Jogador: " + vitoriasJogador.toString();
}