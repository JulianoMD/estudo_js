var now = new Date()
var day = now.getDay()

switch (day) {
    case 0:
        console.log('Domingo')
        day = 'Domingo'
        break
    case 1:
        console.log('Segunda')
        day = 'Segunda'
        break
    case 2:
        console.log('Terça')
        day = 'Terça'
        break
    case 3:
        console.log('Quarta')
        day = 'Quarta'
        break
    case 4:
        console.log('Quinta')
        day = 'Quinta'
        break
    case 5:
        console.log('Sexta')
        day = 'Sexta'
        break
    case 6:
        console.log('Sâbado')
        day = 'Sâbado'
        break
    default:
        console.log('[ERRO] Dia inválido')
}
console.log(`Hoje é ${day}`)