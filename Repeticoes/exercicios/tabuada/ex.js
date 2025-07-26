function botao() {
    let input_num = document.querySelector('#txtnum')
    let tab = document.querySelector('#seltab')

    let num = +input_num.value

    if (input_num.value.trim() === '') {
        alert('[ERRO] Preencha os dados do campo numero')
        return
    }
    tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${c * num}`
        tab.appendChild(item)
    }
}