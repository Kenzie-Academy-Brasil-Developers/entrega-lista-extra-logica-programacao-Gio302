function calculateSalary(salarioFixo, comissao) {
    if (comissao > 1200) {
        return ((5 / 100) * comissao + salarioFixo)
    }
    return ((3 / 100) * comissao + salarioFixo)
}

console.log(calculateSalary(1500, 1200))

function cashMachine(valorDoSaque, valorDoSalario, valorDasVendas) {
    let salario = calculateSalary(valorDoSalario, valorDasVendas)
    let saque = valorDoSaque
    let notas = {
        200: 0,
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
    }

    if (valorDoSaque > salario) {
        return `Saldo atual é de R$${salario}, valor insuficiente para sacar R$${valorDoSaque}`
    }

    if (saque % 2 !== 0) {
        notas[5] += 1
        saque -= 5
    }

    for (saque; saque >= 200; saque -= 200, notas[200] += 1){}
    for (saque; saque >= 100; saque -= 100, notas[100] += 1){}
    for (saque; saque >= 50; saque -= 50, notas[50] += 1){}
    for (saque; saque >= 20; saque -= 20, notas[20] += 1){}
    for (saque; saque >= 10; saque -= 10, notas[10] += 1){}
    for (saque; saque >= 2; saque -= 2, notas[2] += 1){}

    let resposta = []
    for (let key in notas) {
        console.log(notas[key])
        if (notas[key] > 0) {
            if (notas[key] === 1) {
                resposta.push(`${notas[key]} nota de R$${key}`)
            } else {
                resposta.push(`${notas[key]} notas de R$${key}`)
            }
        }
    }
    return `Notas sacadas: ${resposta.join(", ")}, Saldo Atual: R$${salario - valorDoSaque}`
}

console.log(cashMachine(10,50,100))

function calculateStock(estoqueAtual, estoqueMax, estoqueMin) {
    let quantidadeMedia = (estoqueMax + estoqueMin) / 2
    if (estoqueAtual >= quantidadeMedia) {
        return "Não efetuar compra"
    }
    return "Efetuar compra"
}
console.log(calculateStock(50,5000,30))

function calculateAge(anoNascimento, anoAtual) {
    let idade = anoAtual - anoNascimento
    let meses = idade * 12
    let dias = idade * 365
    let semanas = dias / 7

    return `A idade dessa pessoa em anos é ${idade} anos, a idade dessa pessoa em meses é ${meses} meses, a idade dessa pessoa em dias é ${dias} dias, a idade dessa pessoa em semanas é ${parseInt(semanas)} semanas`
}
console.log(calculateAge(1999,2022))

let matrizQuadrada =
    [[9, 5, 4],
    [2, 4, 8],
    [7, 8, 9]]

function getDiagonal(matriz) {
    let contando = matriz.length
    let resultado = []
    for (let i = 0; i< contando; i++){
        resultado.push(matriz[i][i])
    }
    return resultado
}
 console.log(getDiagonal((matrizQuadrada)))
