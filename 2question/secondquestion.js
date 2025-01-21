document.addEventListener('DOMContentLoaded', function () {
    function isFibonacci(num) {
        let a = 0, b = 1;

        if (num === 0 || num === 1) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }

        while (b <= num) {
            let next = a + b;
            a = b;
            b = next;

            if (b === num) {
                return `O número ${num} pertence à sequência de Fibonacci.`;
            }
        }

        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }

    document.getElementById('fibonacciForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const numero = parseInt(document.getElementById('numero').value);

        if (isNaN(numero)) {
            document.getElementById('resultado').textContent = 'Por favor, insira um número válido.';
            return;
        }

        const resultado = isFibonacci(numero);
        document.getElementById('resultado').textContent = resultado;
    });
});