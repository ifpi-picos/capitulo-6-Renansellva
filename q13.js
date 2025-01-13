
function converterParaDolar(valorEmReais, taxaDeCambio) {
    if (taxaDeCambio <= 0) {
        return 'Erro: A taxa de câmbio deve ser maior que zero.';
    }
    return (valorEmReais / taxaDeCambio).toFixed(2);
}

const valorEmReais = parseFloat(prompt('Digite o valor em reais:'));


const valorEmDolares = converterParaDolar(valorEmReais, );

alert(`O valor em dólares é: $${valorEmDolares}`);
