function verificar() {
    const data = new Date()
    const anoAtual = data.getFullYear()
    const inputAno = document.querySelector('#txtano')
    const res = document.querySelector('#res')

    if (inputAno.value.length === 0 || inputAno.value > anoAtual || inputAno.value < anoAtual - 130) {
        window.alert('[ERRO] Digite um ano de nascimento válido.')
        return
    }

    const sexo = document.getElementsByName('radsex')
    const idade = anoAtual - Number(inputAno.value)
    let genero = ''
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.classList.add('foto-centralizada')

    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/crianca_masculino.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adolescente_masculino.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'img/homem.jpg')
        } else {
            img.setAttribute('src', 'img/idoso.jpg')
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/crianca_feminino.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adolescente_feminino.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'img/mulher.jpg')
        } else {
            img.setAttribute('src', 'img/idosa.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}