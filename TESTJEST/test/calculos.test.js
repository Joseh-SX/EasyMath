const {inputValores, somatoria, media, variancia, desvPad, moda} = require('../calculos');

test('inputValores converte string para array de números corretamente', function() {
    const inputString = '1 2 3 4 5 6 7 8 9 0';
    const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(inputValores(inputString)).toEqual(expectedArray);
});

test('somatoria soma uma sequência de números', function() {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = 21;
    expect(somatoria(numberArray)).toEqual(expectedOutput);
});

test('media deve fornecer o valor médio de uma sequência numérica', function() {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = 3.5;
    expect(media(numberArray)).toEqual(expectedOutput);
});

test('variância deve fornecer o valor referente aos numeros aplicado a sua fórmula', function() {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = 3.5;
    expect(variancia(numberArray)).toEqual(expectedOutput);
})

test('desvPad deve fornecer o valor referênde ao cálculo do desvio padrão da sequência fornecida', function() {
    const numberArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = 1.8708286933869707;
    expect(desvPad(numberArray)).toEqual(expectedOutput); 
});

test('moda deve fornecer o valor que mais se repete', function() {
    const numberArray = [1, 1, 3, 4, 5, 6];
    const expectedOutput = 1;
    expect(moda(numberArray)).toEqual(expectedOutput);
});
