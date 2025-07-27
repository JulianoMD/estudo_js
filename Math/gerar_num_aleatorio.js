// Numeros aleatorios
// Entre 50 e 100

const min = 50;
const max = 100;

let random_num = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random_num);

// Nomes
// Sorteio de Nomes
(function () {
    const rand = (min, max) => Math.floor(Math.random() * (max + min + 1) + min);
    const nomes = ["Ingrid", "Barbara", "Sarah", "Leticia", "Ana", "Pietra"];
    console.log(nomes[rand(0, nomes.length)]);
})();