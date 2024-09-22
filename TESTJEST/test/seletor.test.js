const {seletor} = require('../seletor');

test('seletor deve retornar Média', function() {
    const operacao = "Média";
    const expectedArray = "Média: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});

test('seletor deve retornar Somatória', function() {
    const operacao = "Somatória";
    const expectedArray = "Somatória: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});

test('seletor deve retornar Variância', function() {
    const operacao = "Variância";
    const expectedArray = "Variância: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});

test('seletor deve retornar Desvio Padrão', function() {
    const operacao = "Desvio Padrão";
    const expectedArray = "Desvio Padrão: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});

test('seletor deve retornar moda', function() {
    const operacao = "Moda";
    const expectedArray = "Moda: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});

test('seletor deve retornar "Selecione uma operação válida."', function() {
    const operacao = "Moda";
    const expectedArray = "Moda: ";
    expect(seletor(operacao)).toEqual(expectedArray);
});
