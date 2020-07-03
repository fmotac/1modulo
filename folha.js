let nome = prompt("Digite o nome do funcionario: ")

function pagamento(salario, salarioFamilia, auxilioEscola, auxilioFarmacia) {
    let total = salario + salarioFamilia + auxilioEscola + auxilioFarmacia
    return total
}

let resultado = pagamento(1000, 100, 50, 50)

function desconto(salarioTotal) {
    let inss = salarioTotal * 0.11
    let vt = salarioTotal * 0.06
    let desc = 0

    if (salarioTotal < 2499) {
        desc = 0
    } else if (salarioTotal > 2500 && salarioTotal < 4999) {
        desc = salarioTotal * 0.15
    } else {
        desc = salarioTotal * 0.275
    }
    let salarioLiquido = salarioTotal - (inss + vt + desc)
    return salarioLiquido

}

let resultadoFinal = desconto(resultado)

alert("Nome: " + nome + " Salario Liquido : " + resultadoFinal)