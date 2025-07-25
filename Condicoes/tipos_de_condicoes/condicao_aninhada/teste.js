var idade = 15
var resultado = null
console.log(`Você possui ${idade} anos de idade`)
if (idade < 16) {
    resultado = 'sem direito ao voto'
} else if (idade >= 65 || idade < 18) {
    resultado = 'voto não obrigatório'
} else {
    resultado = 'voto obrigatório'
}
console.log(`Logo faz parte do grupo de pessoas do ${resultado} no Brasil`)