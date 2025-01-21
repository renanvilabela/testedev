// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Dados de faturamento mensal por estado
    const faturamentoMensal = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    // Função para calcular os percentuais de representação
    function calcularPercentuais(faturamento) {
        const total = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);
        const percentuais = {};

        for (const estado in faturamento) {
            percentuais[estado] = (faturamento[estado] / total) * 100;
        }

        return { total, percentuais };
    }

    // Calcular os resultados
    const { total, percentuais } = calcularPercentuais(faturamentoMensal);

    // Preencher a tabela no HTML
    const tabelaFaturamento = document.getElementById('tabela-faturamento');
    for (const estado in faturamentoMensal) {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${estado}</td>
            <td>R$ ${faturamentoMensal[estado].toFixed(2)}</td>
            <td>${percentuais[estado].toFixed(2)}%</td>
        `;
        tabelaFaturamento.appendChild(linha);
    }

    // Atualizar o total de faturamento no rodapé da tabela
    document.getElementById('total-faturamento').textContent = `R$ ${total.toFixed(2)}`;
});