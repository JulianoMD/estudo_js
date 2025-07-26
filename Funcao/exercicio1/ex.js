let input_num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('#res')
let vetor = []

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}
function isLista(n, i) {
    if (i.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    /* if (vetor.includes(num)) {
        alert(`Numero já digitado`)
        return
    } else {
        return true
    }
    */
}
function isValido() {
    if (input_num.value.trim() === '') {
        return false
    } else {
        return true
    }
}

function adicionar() {
    let num = +input_num.value
    if (isNumero(num) && !isLista(num, vetor) && isValido()) {
        vetor.push(num)

        let item = document.createElement('option')
        item.text = `Valor ${num} salvo`
        tab.appendChild(item)

        input_num.value = ''
        res.innerHTML = ''
        input_num.focus()
    } else {
        alert(`Valor Inválido ou já digitado.`)
    }

}

function finalizar() {
    if (vetor.length === 0) {
        alert('Digite ao menos um valor')
    } else {
        /* Usando sem as funçoes
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for (let pos in vetor) {
            soma += vetor[pos]
            if (pos > maior) {
                maior = vetor[pos]
            }
            if (pos < menor) {
                menor = vetor[0]
            }
        }
        media = soma / vetor.length
        */
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${vetor.length} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior numero informado é ${maior(vetor)}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor(vetor)}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma(vetor)}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media(vetor)}`
    }
}

function maior(n) {
    return Math.max(...n)
}
function menor(n) {
    return Math.min(...n)
}
function soma(n) {
    let resultado = 0
    for (let i in n) {
        resultado += n[i]
    }
    return resultado
}
function media(n) {
    let soma = 0
    for (let i in n) {
        soma += n[i]
    }
    return soma / n.length
}
function recarregar() {
    location.reload()
}