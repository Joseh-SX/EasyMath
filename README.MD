# Extensão de Cálculos Estatísticos para Google Chrome

## Descrição
Esta extensão de Google Chrome foi desenvolvida para realizar cálculos estatísticos diretamente a partir de uma interface pop-up. A extensão permite ao usuário inserir uma sequência de números separados por espaço e, com base na operação selecionada, calcular:

- Somatória
- Média
- Variância
- Desvio Padrão
- Moda

## Funcionalidades

### Cálculos Estatísticos:
- O usuário pode selecionar uma operação e inserir uma sequência de números separados por espaço.
- As operações disponíveis incluem:
    - **Somatória**: Soma todos os números da sequência.
    - **Média**: Calcula a média aritmética dos números.
    - **Variância**: Calcula a variância da sequência.
    - **Desvio Padrão**: Calcula o desvio padrão da sequência.
    - **Moda**: Identifica o valor que mais se repete na sequência.

## Estrutura de Arquivos
1. **popup.html**:
    - Interface gráfica com campos de entrada para os números e opções de seleção de operação.
    - Também exibe o resultado do cálculo.
2. **popup.js**:
    - Contém a lógica de processamento das operações matemáticas.
    - Inclui as funções de cálculo (somatória, média, variância, desvio padrão e moda).
3. **style.css**:
    - Arquivo CSS que define a aparência da interface do usuário no pop-up da extensão.

## Como Usar

### Instalação:
1. Faça o download da extensão para o seu navegador.
2. No Google Chrome, vá até `chrome://extensions/` e ative o Modo de Desenvolvedor.
3. Carregue a extensão manualmente clicando em "Carregar sem compactação" e selecionando a pasta onde os arquivos estão armazenados.

### Uso:
1. Clique no ícone da extensão para abrir o pop-up.
2. Digite uma sequência de números separados por espaço no campo de texto.
3. Selecione a operação desejada.
4. O resultado será exibido imediatamente abaixo do botão "Enter".

## Requisitos Técnicos
- Google Chrome (versão 80 ou superior)

## Possíveis Melhorias Futuras
- Implementar novos cálculos, como mediana e percentis.
- Adicionar um histórico de cálculos.


Diagrama de classes

            +----------------------+
            |       Browser        |
            +----------------------+
            | easyMath()           |
            +----------------------+
                       |
                       |
                       v
            +----------------------+
            |      EasyMath        |
            +----------------------+
            | selector()           |
            | inputValores()       |
            +----------------------+
              |                   |
              |                   _____
              v                        v
            +--------------------+    +----------------------+
            |      selector      |    |    inputValores      |
            +--------------------+    +----------------------+
            | somatoria()        |    | selector()           |
            | media()            |    | inputValores()       |
            | variancia()        |    +----------------------+
            | desvPad()          |
            | moda()             |
            +--------------------+
