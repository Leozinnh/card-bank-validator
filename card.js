function validarCartao(cartao) {
    // Remover espaços e caracteres não numéricos
    cartao = cartao.replace(/\D/g, '');

    // Validar se o número do cartão tem entre 13 e 19 dígitos
    if (cartao.length < 13 || cartao.length > 19) {
        return { valido: false, mensagem: 'Número de cartão inválido.' };
    }

    // Algoritmo de Luhn para validação do cartão
    let soma = 0;
    let deveDobrar = false;
    for (let i = cartao.length - 1; i >= 0; i--) {
        let digito = parseInt(cartao.charAt(i), 10);
        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        soma += digito;
        deveDobrar = !deveDobrar;
    }

    // Se a soma não for múltipla de 10, o cartão é inválido
    if (soma % 10 !== 0) {
        return { valido: false, mensagem: 'Número do cartão inválido.' };
    }

    // Detectar tipo do cartão com base no prefixo e comprimento
    let tipo = '';
    let bandeira = '';
    if (/^4/.test(cartao)) {
        tipo = 'Visa';
        bandeira = 'Visa';
        if (cartao.length === 13 || cartao.length === 16) {
            bandeira = 'Visa';
        } else {
            return { valido: false, mensagem: 'Número de cartão Visa inválido.' };
        }
    } else if (/^5[1-5]/.test(cartao)) {
        tipo = 'MasterCard';
        bandeira = 'MasterCard';
        if (cartao.length === 16) {
            bandeira = 'MasterCard';
        } else {
            return { valido: false, mensagem: 'Número de cartão MasterCard inválido.' };
        }
    } else if (/^3[47]/.test(cartao)) {
        tipo = 'American Express';
        bandeira = 'American Express';
        if (cartao.length === 15) {
            bandeira = 'American Express';
        } else {
            return { valido: false, mensagem: 'Número de cartão American Express inválido.' };
        }
    } else if (/^6/.test(cartao)) {
        tipo = 'Discover';
        bandeira = 'Discover';
        if (cartao.length === 16) {
            bandeira = 'Discover';
        } else {
            return { valido: false, mensagem: 'Número de cartão Discover inválido.' };
        }
    } else if (/^35/.test(cartao)) {
        tipo = 'JCB';
        bandeira = 'JCB';
        if (cartao.length === 16) {
            bandeira = 'JCB';
        } else {
            return { valido: false, mensagem: 'Número de cartão JCB inválido.' };
        }
    } else if (/^62/.test(cartao)) {
        tipo = 'UnionPay';
        bandeira = 'UnionPay';
        if (cartao.length >= 16 && cartao.length <= 19) {
            bandeira = 'UnionPay';
        } else {
            return { valido: false, mensagem: 'Número de cartão UnionPay inválido.' };
        }
    } else if (/^35(2[89]|[3-8][0-9])/.test(cartao)) {
        tipo = 'Diners Club';
        bandeira = 'Diners Club';
        if (cartao.length === 14) {
            bandeira = 'Diners Club';
        } else {
            return { valido: false, mensagem: 'Número de cartão Diners Club inválido.' };
        }
    } else {
        bandeira = 'Desconhecido';
    }

    return {
        valido: true,
        mensagem: 'Número de cartão válido.',
        tipo: tipo,
        bandeira: bandeira,
        ultimaParte: cartao.slice(-4) // Exibe os últimos 4 dígitos para segurança
    };
}

// Exemplo de uso
const numeroCartao = '4111 1111 1111 1111';
const resultado = validarCartao(numeroCartao);

if (resultado.valido) {
    console.log(`Cartão válido. Tipo: ${resultado.tipo}`);
    console.log(`Bandeira: ${resultado.bandeira}`);
    console.log(`Últimos 4 dígitos: ${resultado.ultimaParte}`);
} else {
    console.log(resultado.mensagem);
}
