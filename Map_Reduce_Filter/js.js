/* 
    Map (Mepear item por item do Array)
        - Criar um novo array com a mesma quantidade de itens do array original.
        - O novo array você pode alterar o que quiser em relação ao array original.
        - Você tem acesso a 3 dados:
            - Item por Item do array
            - Posição atual do Array
            - Array Completo

    Reduce(Reduzir o Agray a um único valor)
        - Reduz um array inteiro a um ÚNICO valor
            - Você tem acesso a 4 dados:
                - Acumulador
                - Valor Atual
                - Posição atual
                - Array Completo
                
    Filter(Filtrar O array)
    - Cria um novo array filtrando os valores desejados do array Original
    - Você tem acesso a 3 dados:
        - Item por Item do array
        - Posição atual do Array
        - Array Completo
*/


const numeros = [1, 2, 3, 4, 5]

const map = numeros.map((numero, index, array_completo) => { // (valor do array, posicao do array, array completo)
    //    console.log(numero)
    //    console.log(index)
    //    console.log(array_completo)
})

// CRIA UM NOVO ARRAY FORMATANDO A MOEDA DANDO UM DESCONTO DE 10% NOS PRODUTOS    

const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "Smart TVLG 55", preco: 2799.00, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 20 },
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
    { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 },
]

const novos_produtos = produtos.map(produto => {

    const novo_preco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    // TERNARIO = If / Else    ? = if / = else

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novo_preco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade,
    }
})
console.log(novos_produtos)

// REDUCE

const valores = [1, 2, 3, 4, 5]

const soma = valores.reduce((acumular, atual) => {
    const total = acumular + atual

    return total
})

// QUAL SERÁ O FATURAMENTO, SE VENDER TODO O ESTOQUE 

const total_vendas = produtos.reduce((acumulador, produto) => {

    return acumulador + (produto.preco * produto.quantidade)
}, 0)

console.log(total_vendas.toLocaleString('pt-br', {
    style: 'currency', currency: 'BRL'
}))

// FILTER

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = array.filter(numero => {
    return numero % 2 === 0
})

// FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO

const promocao = produtos.filter(produto => produto.temDesconto)

// ADICIONAR + 10 EM CADA PRODUTO
// FILTAR SÓ OS EM PROMOÇÃO
// SABER QUAL O FATURAMENTO SE VENDERMOS TODOS EM PROMOÇÃO  

const faturamento_total = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 }
})
    .filter(produto => produto.temDesconto)
    .reduce((acumulador, produto) => acumulador + produto.quantidade * produto.preco, 0,)

console.log(faturamento_total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))