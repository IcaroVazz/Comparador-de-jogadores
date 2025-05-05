let titulos_jogador1 = 0;
let titulos_jogador2 = 0;
let nome_jogador1 = '';
let nome_jogador2 = '';
let GA_jg1 = 0;
let GA_jg2 = 0;

function Player1(){
    nome_jogador1 = prompt("Digite o nome de um jogador:");
    
    if (nome_jogador1 !== 'mateusinho') {
        let nome2 = prompt(`O jogador ${nome_jogador1} já jogou na várzea? (sim/não)`);
        
        if (nome2.toLowerCase() !== "sim") {
            alert('Então ele nem entra na discussão.');
            return;
        } 
        
        GA_jg1 = parseInt(prompt(`Quantos gols/assistências o jogador ${nome_jogador1} fez?`)) || 0;
        titulos_jogador1 = parseInt(prompt(`Quantos títulos o jogador ${nome_jogador1} tem?`)) || 0;
        alert('Agora o próximo passo é selecionar o jogador 2.');
    }
}

function Player2(){
    nome_jogador2 = prompt("Digite o nome de um jogador:");
    
    if (nome_jogador2 !== 'mateusinho') {
        let nome2 = prompt(`O jogador ${nome_jogador2} já jogou na várzea? (sim/não)`);
        
        if (nome2.toLowerCase() !== "sim") {
            alert('Então ele nem entra na discussão.');
            return;
        } 
        
        GA_jg2 = parseInt(prompt(`Quantos gols/assistências o jogador ${nome_jogador2} fez?`)) || 0;
        titulos_jogador2 = parseInt(prompt(`Quantos títulos o jogador ${nome_jogador2} tem?`)) || 0;
        alert('AGORA COMPARE OS DOIS JOGADORES CLICANDO NO BOTÃO ABAIXO!');
    }
}


function Resultado() {
    alert("Devido aos dados fornecidos, irei fazer a comparação e direi qual é o maior e melhor jogador.");
    
    if (titulos_jogador1 > titulos_jogador2 && GA_jg1 > GA_jg2) {
        alert(`O jogador ${nome_jogador2} é bom, porém, de acordo com os fatos, o jogador ${nome_jogador1} é melhor.`);
    } 
    else if (titulos_jogador1 < titulos_jogador2 && GA_jg1 < GA_jg2) {
        alert(`O jogador ${nome_jogador1} é bom, porém, de acordo com os fatos, o jogador ${nome_jogador2} é melhor.`);
    } 
    else if (titulos_jogador1 > titulos_jogador2 && GA_jg1 < GA_jg2) {
        if (titulos_jogador1 - titulos_jogador2 >= 2) {
            alert(`Apesar de ${nome_jogador2} ter mais GA, ${nome_jogador1} tem muito mais títulos e é o melhor.`);
        } else {
            alert(`A disputa entre ${nome_jogador1} e ${nome_jogador2} está equilibrada.`);
        }
    } 
    else if (titulos_jogador1 < titulos_jogador2 && GA_jg1 > GA_jg2) {
        if (GA_jg1 - GA_jg2 >= 10) {
            alert(`Apesar de ${nome_jogador2} ter mais títulos, ${nome_jogador1} tem um desempenho ofensivo muito superior e é o melhor.`);
        } else {
            alert(`A disputa entre ${nome_jogador1} e ${nome_jogador2} está equilibrada.`);
        }
    } 
    else {
        alert('Os jogadores estão equilibrados, então a comparação fica subjetiva.');
    }
}

v