function calcular() {
    const inputInicio = document.querySelector('#txtinicio');
    const inputFim = document.querySelector('#txtfim');
    const inputPasso = document.querySelector('#txtpasso');
    const res = document.querySelector('#res');

    const inicio = +inputInicio.value;
    const fim = +inputFim.value;
    let passo = +inputPasso.value;

    if (inputInicio.value.trim() === '' || inputFim.value.trim() === '' || inputPasso.value.trim() === '') {
        alert('[ERRO] Preencha todos os campos com algum valor')
        return
    }

    if (passo === 0) {
        alert('[ERRO] Para que haja uma contagem os passos não podem ser 0! Vamos considerar passo = 1')
        passo = 1
    }
    res.innerHTML = 'Contando: <br>';
    if (inicio < fim) {
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `➡️ ${c}`
        }
    } else {
        for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `➡️ ${c}`
        }
    }
    res.innerHTML += `🏁`
}