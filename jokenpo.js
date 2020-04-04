
     /** 
      * Variáveis de uso global das funções
     **/

var jogadorvenceu = 0;
var computadorvenceu = 0;
var jogadorEscolha = 0;
var placar = " ";
var corpo_tabela = document.querySelector("tbody");
var escolhaVezes = 0;


function escolherVezes(){
    /**
     * Função utilizada para a escolha quantidade de rodadas que terá o jogo. Essa escolha é
     * feita de acordo o checkbox escolhido
     **/
    if(document.getElementById("rodada3").checked == false && 
        document.getElementById("rodada7").checked == false && 
        document.getElementById("rodada10").checked == false){
            alert ("Selecione uma opção");
            escolhaVezes = 0;
        } else{ 
            if(document.getElementById("rodada3").checked==true)
            {
                escolhaVezes = 3;

            }else if (document.getElementById("rodada7").checked == true){
                escolhaVezes = 7;
            } else if (document.getElementById("rodada10").checked == true){
                escolhaVezes = 10;
            } 
        }
    return escolhaVezes;
}

function dataFormatada(){
    /**
     * Função utilizada para formatação da data
     **/
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
        hora = data.getHours();         
        min  = data.getMinutes();    
        seg     = data.getSeconds();
    return diaF+"/"+mesF+"/"+anoF+" "+hora+":"+min+":"+seg;
}

function jogar(escolha){
    /**
     * Função onde ocorre toda a dinâmica do jogo
     **/
    jogadorEscolha = escolha; 
    
    var sorteio = Math.floor(Math.random() * 3);
    switch (sorteio){
     /**
      * Nessa etapa do código é processado a função randômica para captura a escolha do computador
     **/
        case 0: 
            document.getElementById("pc").src="pcpedra.png";
            break;
        case 1: 
            document.getElementById("pc").src="pcpapel.png";
            break;
        case 2: 
             document.getElementById("pc").src="pctesoura.png";
             break;
    } 
    
    /**
     * Nessa etapa o ocorre o processo de escolha do jogador
     **/
    if((jogadorEscolha == 0 && sorteio == 0) ||
        (jogadorEscolha == 1 && sorteio == 1) ||
        (jogadorEscolha == 2 && sorteio == 2)){

           document.getElementById("placar").innerHTML="Rodada deu empate jogue novemente" + 
                    " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador " ;

    } else if((jogadorEscolha == 0  && sorteio == 2) ||
              (jogadorEscolha == 1 && sorteio == 0) ||
              (jogadorEscolha == 2  && sorteio == 1)){
                            
                jogadorvenceu++;
                document.getElementById("placar").innerHTML=  " Jogador " + jogadorvenceu + 
                        " X " + computadorvenceu + " Computador " ;

            } else {
                computadorvenceu++ 
                document.getElementById("placar").innerHTML=  " Jogador " + jogadorvenceu + 
                " X " + computadorvenceu + " Computador " ; 
              }
            

    /**
     * Nessa etapa ocorre a coparação de quantas rodadas serão aplicadas no jogo e que jogador venceu
     * ou se a rodada houve empate.
     **/
    if(jogadorvenceu == escolherVezes()){
        document.getElementById("placar").innerHTML="Jogador venceu a partida por:" + 
                " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador " ;
                placar = " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador ";
                var linha = document.createElement("tr");
                var campo_ganhador = document.createElement("th");
                var campo_data = document.createElement("th");
                var campo_placar = document.createElement("th");

                var texto_ganhador = document.createTextNode("Jogador");
                var texto_data = document.createTextNode(this.dataFormatada());
                var texto_placar = document.createTextNode(this.placar);
                
                campo_ganhador.appendChild(texto_ganhador);
                campo_data.appendChild(texto_data);
                campo_placar.appendChild(texto_placar)

                linha.appendChild(campo_ganhador);
                linha.appendChild(campo_data);
                linha.appendChild(campo_placar);

                corpo_tabela.appendChild(linha);
                jogadorvenceu =0;
                computadorvenceu=0;

    } else if (computadorvenceu == escolherVezes())  {
                document.getElementById("placar").innerHTML="Computador venceu a partida por :" + 
                " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador " ;
               
                placar = " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador ";
                var linha = document.createElement("tr");
                var campo_ganhador = document.createElement("th");
                var campo_data = document.createElement("th");
                var campo_placar = document.createElement("th");

                var texto_ganhador = document.createTextNode("Computador");
                var texto_data = document.createTextNode(this.dataFormatada());
                var texto_placar = document.createTextNode(this.placar);
                
                campo_ganhador.appendChild(texto_ganhador);
                campo_data.appendChild(texto_data);
                campo_placar.appendChild(texto_placar)

                linha.appendChild(campo_ganhador);
                linha.appendChild(campo_data);
                linha.appendChild(campo_placar);

                corpo_tabela.appendChild(linha); 
                 jogadorvenceu =0;
                 computadorvenceu=0;
      }         
}

function resetar() {
    /**
     * Função utilizada no onclik do botão resetar
     **/
                placar = " Jogador " + jogadorvenceu + " X " + computadorvenceu + " Computador ";
                var linha = document.createElement("tr");
                var campo_ganhador = document.createElement("th");
                var campo_data = document.createElement("th");
                var campo_placar = document.createElement("th");
                

                var texto_ganhador = document.createTextNode("Desistiu");
                var texto_data = document.createTextNode(this.dataFormatada());
                var texto_placar = document.createTextNode(this.placar);
                
                campo_ganhador.appendChild(texto_ganhador);
                campo_data.appendChild(texto_data);
                campo_placar.appendChild(texto_placar);

                linha.appendChild(campo_ganhador);
                linha.appendChild(campo_data);
                linha.appendChild(campo_placar);
              

                corpo_tabela.appendChild(linha); 
                jogadorvenceu =0;
                computadorvenceu=0;
                document.getElementById("pc").src="pc.png";
                document.getElementById("placar").innerHTML=  " Jogador " + jogadorvenceu + 
                        " X " + computadorvenceu + " Computador " ;
                
}

function contarLinhas(){
    /**
     * Função utilizada para contar quantas linha tem a tabela de Histórico
     **/
    var cont = 0;
    var table = document.getElementById( "table" );
    var tableArr = [];
for ( var i = 1; i < table.rows.length; i++ ) {
    tableArr.push({
        ganhador: table.rows[i].cells[0].innerHTML
    });
    cont++;
}

return cont;

}

function removeLinha() {
    /**
     * Função utilizada pelo botão excluir linha
     **/
    var i = " ";
    i= document.getElementById("campo").value;
    if(i==0){
        alert("Insira a linha que deseja excluir");
    }else if (i>contarLinhas()){
            alert("Não existe a linha");
     }else{ 
        document.getElementById('table').deleteRow(i);
        document.getElementById("campo").value=" ";      
      }
    
} 

 