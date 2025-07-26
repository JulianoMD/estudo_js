let input_num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('#res')
let vetor = []

function adicionar() {
    let num = +input_num.value
    if (input_num.value.trim() === '') {
        alert(`[ERRO] digite um valor valido`)
        return
    }
    if (num < 1 || num > 100) {
        alert(`Digite um valor entre 1 e 100`)
        return
    }
    if (vetor.includes(num)) {
        alert(`Numero já digitado`)
        return
    }

    vetor.push(num)

    let item = document.createElement('option')
    item.text = `Valor ${num} salvo`
    tab.appendChild(item)

    input_num.value = ''
    res.innerHTML = ''
}

function finalizar() {
    if (vetor.length === 0) {
        alert('Digite ao menos um valor')
        return
    }
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${vetor.length} numeros cadastrados.</p>`
    res.innerHTML += `<p>O maior numero informado é ${maior(vetor)}.</p>`
    res.innerHTML += `<p>O menor valor informado é ${menor(vetor)}.</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma(vetor)}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media(vetor)}`
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
    media = 0
    memory = 0
    for (let i in n) {
        memory = i + n[i]
    }
    media = memory / n.length
    return media
}
function recarregar() {
    location.reload()
}