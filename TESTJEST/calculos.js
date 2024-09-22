function inputValores(string) {
	const stringArray = string.split(' ');
	const numberArray = stringArray.map(str => parseFloat(str));
	return numberArray;
}

function somatoria(numberArray) {
	let soma = 0;
    for (i = 0; i < numberArray.length; i++){
        soma += numberArray[i]
    }
	return soma;
}

function media(numberArray) {
	let soma = somatoria(numberArray);
	let media = soma / numberArray.length;
	return media;
}

function variancia(numberArray) {
    console.log(numberArray);
	let m = media(numberArray);
	let variancia = numberArray.reduce((acumulador, numero) => acumulador + (numero - m) ** 2, 0) / (numberArray.length-1);
    console.log(variancia)
	return variancia;
}

function desvPad(numberArray) {
	let varianciaValor = variancia(numberArray);
	let desvioPadrao = varianciaValor**0.5;
	return desvioPadrao;
}

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

module.exports = {
	inputValores, somatoria, media, variancia, desvPad, moda
};