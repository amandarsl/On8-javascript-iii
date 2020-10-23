// 1. Liste os números de 0 a 10 no console;
for(let i = 0; i<=10; i++){
    console.log(i);
}

// 2. Some somente os valores ímpares de uma lista de números;
let numbers = [1, 2, 3, 4, 5, 6];
let oddsTotal = numbers.reduce((total, value) => value%2 == 0 ? total : total + value, 0);
console.log(oddsTotal);

// 3. Liste a tabuada do 6 (do 1 ao 10);
const multiplicand = 6;
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    console.log(`${multiplicand} x ${multiplier} = ${multiplicand*multiplier}`) 
}

// 4. Crie uma lista de notas de provas;
let grades = [7.5, 10, 6, 8, 8.5, 7]

// 5. Some as todas as notas da lista de provas;
let gradesTotal = grades.reduce((total, grade) => total + grade, 0);
console.log(gradesTotal);

// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
const produtos = [
    {
        nome: 'arroz',
        comprado: true,
        valor: 4.50
    },
    {
        nome: 'alcatra',
        comprado: false,
        valor: 41.00
    },
    {
        nome: 'queijo coalho',
        comprado: true,
        valor: 29.00
    },
    {
        nome: 'pão de queijo',
        comprado: false,
        valor: 18.50
    },
    {
        nome: 'manga',
        comprado: true,
        valor: 5
    }
]

// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;
let produtosComprados = produtos.filter(produto => produto.comprado)
console.log(produtosComprados)

// 8. Some o total dos valores de itens da lista do mercado.
let somaPrecoProdutos = produtos.reduce((total, produto) => total + produto.valor, 0);
console.log(somaPrecoProdutos)

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']
let nomesFiltrados = nomes.filter(name => name.startsWith('A'))
console.log(nomesFiltrados)

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const confeitoAberto = confeito[0].slice(2, 3)

const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${confeito}`);
    }
}

console.log(pessoa.comer(confeitoAberto))