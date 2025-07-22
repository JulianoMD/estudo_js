var agora = new Date()
var dia = agora.getDate()
var mes = agora.getMonth()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Hoje é dia ${dia} do mês ${mes}, são ${hora} hora e ${minutos} minutos`)
if (hora < 12 && hora > 5) {
    console.log(`Bom dia`)
} else if (hora <= 17 && hora >= 12) {
    console.log('Boa tarde')
} else if (hora > 17 && hora < 0) {
    console.log('Boa noite')
} else {
    console.log('Boa Madrugada')
}