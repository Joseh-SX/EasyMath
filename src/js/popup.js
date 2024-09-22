//CALCULOS MATEMATICOS

// Função para obter os valores de entrada
function inputValores() {
	const stringArray = document.getElementById('sequencia').value.split(' ');
	const numberArray = stringArray.map(str => parseFloat(str));
	return numberArray;
}

// Função para somar os valores
function somatoria(numberArray) {
	let soma = 0;
    for (i = 0; i < numberArray.length; i++){
        soma += numberArray[i]
    }
	return soma;
}

// Função para calcular a média
function media(numberArray) {
	let soma = somatoria(numberArray);
	let media = soma / numberArray.length;
	return media;
}

// Função para calcular a variância amostral
function variancia(numberArray) {
    console.log(numberArray);
	let m = media(numberArray);
	let variancia = numberArray.reduce((acumulador, numero) => acumulador + (numero - m) ** 2, 0) / (numberArray.length-1);
    console.log(variancia)
	return variancia;
}

// Função para calcular o desvio padrão
function desvPad(numberArray) {
	let varianciaValor = variancia(numberArray);
	let desvioPadrao = varianciaValor**0.5;
	return desvioPadrao;
}

//Função para calcular a moda
function moda(numberArray) {
    let comparador = 0;
    let moda = 0;

    for (let num of numberArray) {
        let x = numberArray.filter(item => item === num).length;
        if (x > comparador) {
            comparador = x;
            moda = num;
        }
    }
    return moda;
}


//TRATA OS ELEMENTNTOS INLINE ANTERIORES

document.addEventListener('DOMContentLoaded', 
    function() {
        // Associar a função main() ao botão de cálculo
        document.getElementById('botao').addEventListener('click', main);
    }
);

// Função que seleciona operação
function seletor(operacao, numberArray) {
	switch (operacao) {
		case 'Média':
		resultado = `Média: ${media(numberArray)}`;
		return resultado;

		case 'Somatória':
		resultado = `Somatória: ${somatoria(numberArray)}`;
		return resultado;

		case 'Variância':
		resultado = `Variância: ${variancia(numberArray)}`;
		return resultado;

		case 'Desvio Padrão':
		resultado = `Desvio Padrão: ${desvPad(numberArray)}`;
		return resultado;

		case 'Moda':
		resultado = `Moda: ${moda(numberArray)}`;
		return resultado;

		default:
		resultado = "Selecione uma operação válida.";
		return resultado;
		}
}

// Função principal que chama todas as outras
function main() {
	const numberArray = inputValores();
	const operacao = document.getElementById('operacao').value;
	let resultado = seletor(operacao, numberArray);
	document.getElementById('resultado').innerHTML = resultado;
}
