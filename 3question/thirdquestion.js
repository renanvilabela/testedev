// Caminho do arquivo JSON
const jsonFilePath = './dados.json';

// Carregar e processar os dados do JSON
fetch(jsonFilePath)
    .then(response => response.json())
    .then(faturamentoMensal => {
        // Filtrar dias com faturamento maior que 0
        const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

        // Obter o menor valor de faturamento
        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));

        // Obter o maior valor de faturamento
        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

        // Calcular a média mensal (excluindo dias com faturamento 0)
        const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        // Contar os dias com faturamento superior à média
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        // Atualizar o conteúdo do HTML com os resultados
        document.getElementById('menor-valor').textContent = `Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`;
        document.getElementById('maior-valor').textContent = `Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`;
        document.getElementById('dias-acima-media').textContent = `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`;
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
        document.body.innerHTML = '<h1>Erro ao carregar os dados.</h1>';
    });