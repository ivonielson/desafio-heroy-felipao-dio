/*
Olá, me chamo Ivonielson, comecei fazer o curso de lógica de programação da dio.me.
Abaixo segue meu codigo para resolver o primeiro desafio.
Resolvi apresentar um codigo onde tem 4 Players na partida.
Tentarei usar todos os recursos ja estudados até o momento
*/
//Constante com o nome dos jogadores da partida
const jogadores = ["IvoShow", "IviNho", "Ivão", "Ivo"];
//Constante com niveis de xp
const niveisxp = [500, 1540, 10000, 15000];
//variavel de colocação do players, server para o ranck
let colocacao = 4
//Laço para pegar a posição de cada jogador e jogar na variavel i, depois popula as variaveis jogador, xp
    for (let i = 0; i < jogadores.length; i++) {
        let jogador = jogadores[i]
        let xp = niveisxp[i]
        let nivel
        
        //Para comparação, usei o switch, ficou um código mais elegante
        switch (true) {
            //Se XP for menor do que 1.000 = Ferro
            case xp < 1000:
                nivel = "Ferro"
                break;
            //Se XP for entre 1.001 e 2.000 = Bronze
            case xp >= 1001 && xp <= 2000:
                nivel = "Bronze"
                break
            //Se XP for entre 2.001 e 5.000 = Prata
            case xp >= 2001 && xp <= 5000:
                nivel = "Prata"
                break
            //Se XP for entre 5.001 e 7.000 = Ouro
            case xp >= 5001 && xp <= 7000:
                nivel = "Ouro"
                break
            //Se XP for entre 7.001 e 8.000 = Platina
            case xp >= 7001 && xp <= 8000:
                nivel = "Platina"
                break
            //Se XP for entre 8.001 e 9.000 = Ascendente
            case xp >= 8001 && xp <= 9000:
                nivel = "Ascendente"
                break
            //Se XP for entre 9.001 e 10.000= Imortal
            case xp >= 9001 && xp <= 10000:
                nivel = "Imortal"
                break
            //Se XP for maior ou igual a 10.001 = Radiante
            default:
                nivel = "Radiante"
                break;
        }
       
        //Menssagem
        console.log(`${colocacao}º lugar: O Herói de nome ${jogador} está no nível: ${nivel}`)
          //Comparação para mostra a menssagem de quem ganhou a partida
          if (xp > 10000) {
            //Mostro a menssagem do ganhador da partida
            console.log(`O Herói de nome ${jogador} é o ganhador da partida, ficou em ${colocacao}º lugar.`)
        }
        //Decremento a variavel de colocação
        colocacao--;
       
    }

