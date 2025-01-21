// Função para inverter a string sem usar funções prontas
function inverterString(str) {
    let resultado = '';
    // Laço para percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Evento para pegar o valor da string e inverter
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inverter').addEventListener('click', function() {
        const inputString = document.getElementById('entrada').value;
        const resultado = inverterString(inputString);
        document.getElementById('resultado').textContent = resultado;
    });
});