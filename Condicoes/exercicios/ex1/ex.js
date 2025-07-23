function horario() {
    var photo = document.querySelector('img#imagem')
    var mensagem = document.querySelector('div#msg')
    var agora = new Date()
    var hora = agora.getHours()
    if (hora > 5 && hora < 12) {
        mensagem.innerHTML = `<strong>Bom dia</strong> são ${hora}`
        photo.src = 'img/morning.jpg'
        document.body.style.background = 'rgb(218	158	54	)'
    } else if (hora >= 12 && hora < 18) {
        mensagem.innerHTML = `<strong>Boa tarde</strong> são ${hora}`
        photo.src = 'img/afternoon.jpg'
        document.body.style.background = 'rgb(121	155	184	)'
    } else {
        mensagem.innerHTML = `<strong>Boa noite</strong> são ${hora} horas`
        photo.src = 'img/night.jpg'
        document.body.style.background = 'rgb(19	47	47	)'
        switch (hora) {
            case 0:
                mensagem.innerHTML = `<strong>Boa noite</strong> agora é ${hora} hora`
        }
    }
}