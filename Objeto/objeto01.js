let amigo = {
    nome: 'José',
    sexo: 'Mas',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)