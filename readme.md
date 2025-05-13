# Validador de Cartão de Crédito em JavaScript

Este projeto contém uma função JavaScript que valida números de cartões de crédito utilizando o **Algoritmo de Luhn**, detecta o tipo de cartão (bandeira) e fornece feedback detalhado sobre a validade e o tipo do cartão.

## Funcionalidades

- **Validação do número do cartão**: Verifica se o número do cartão de crédito é válido usando o algoritmo de Luhn.
- **Detecção de bandeira do cartão**: Identifica a bandeira do cartão de crédito, como Visa, MasterCard, American Express, Discover, entre outros.
- **Exibição dos últimos 4 dígitos**: Mostra os últimos 4 dígitos do cartão para fins de segurança.
- **Validação de comprimento de número de cartão**: A função valida o comprimento do número de cartão, que varia dependendo da bandeira.

## Bandeiras Suportadas

A função suporta as seguintes bandeiras de cartões de crédito:

- **Visa**: Começa com 4 e pode ter 13 ou 16 dígitos.
- **MasterCard**: Começa com 5 seguido por 1-5 e tem 16 dígitos.
- **American Express (Amex)**: Começa com 34 ou 37 e tem 15 dígitos.
- **Discover**: Começa com 6 e tem 16 dígitos.
- **JCB**: Começa com 35 e tem 16 dígitos.
- **UnionPay**: Começa com 62 e pode ter entre 16 e 19 dígitos.
- **Diners Club**: Começa com 35(2[89]|[3-8][0-9]) e tem 14 dígitos.

## Como Funciona

1. **Algoritmo de Luhn**: A função valida se o número do cartão é válido usando o **Algoritmo de Luhn**, que é um método simples para validar números de cartões de crédito.
2. **Detecção de bandeira**: A função verifica o prefixo do número do cartão para determinar sua bandeira (Visa, MasterCard, etc.).
3. **Validação de comprimento**: A função valida se o número de cartão tem o comprimento correto de acordo com a bandeira.
4. **Exibição dos últimos 4 dígitos**: Para maior segurança, apenas os últimos 4 dígitos do cartão são retornados.

## Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/Leozinnh/card-bank-validator.git
```

### 2. Importe a função no seu código

```bash
const { validarCartao } = require('./caminho/para/validarCartao')
```

### 3. Exemplo de uso

```bash
// Número do cartão a ser validado
const numeroCartao = '4111 1111 1111 1111';

// Chame a função para validar o cartão
const resultado = validarCartao(numeroCartao);

// Verifique se o cartão é válido e exiba os resultados
if (resultado.valido) {
    console.log(`Cartão válido. Tipo: ${resultado.tipo}`);
    console.log(`Bandeira: ${resultado.bandeira}`);
    console.log(`Últimos 4 dígitos: ${resultado.ultimaParte}`);
} else {
    console.log(resultado.mensagem);  // Caso o cartão não seja válido
}
```

## Resultado esperado:
```bash
Cartão válido. Tipo: Visa
Bandeira: Visa
Últimos 4 dígitos: 1111
```

