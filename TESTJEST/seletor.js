function seletor(operacao) {
	let resultado;

	switch (operacao) {
		case "Média":
		resultado = "Média: ";
		return resultado;

		case "Somatória":
		resultado = "Somatória: ";
		return resultado;

		case "Variância":
		resultado = "Variância: ";
		return resultado;

		case "Desvio Padrão":
		resultado = "Desvio Padrão: ";
		return resultado;

		case "Moda":
		resultado = "Moda: ";
		return resultado;
		}
}

module.exports = {
	seletor
};