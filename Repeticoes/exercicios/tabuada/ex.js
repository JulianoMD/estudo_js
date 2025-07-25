function botao() {
    let input_num = document.querySelector('#txtnum')
    let input_tab = document.querySelector('#seltab')

    let num = +input_num.value
    let tab = +input_tab.valur

    if (input_num.value.trim() === '') {
        alert('[ERRO] Preencha os dados do campo numero')
        return
    }
    input_tab.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${c * num}`
        input_tab.appendChild(item)
    }
}