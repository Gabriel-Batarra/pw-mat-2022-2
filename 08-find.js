const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// O método find() encontra o primeiro elemento de um vetor
// que corresponda ao retorno da função passada como parâmetro
let primeiroNegativo = numeros.find(n => n < 0)
