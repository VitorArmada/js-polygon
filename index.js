// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

//Q1 -  criar um array de 10 numeros inteiros, randomizados entre 1 e 50
//print do array na consola

let random_array = Array.from({length: 10}, () => Math.floor(Math.random() * 50 + 1));

console.log(random_array);

//Q2 - agarrar no numero que esta a ser random e separar em 2 arrays, em pares e impares
let pair_array = [];
let odd_array = [];

for(let i = 0; i < random_array.length; i++){
  if(random_array[i] % 2 == 0 ){
    pair_array.push(random_array[i]);
  }
  else{
     odd_array.push(random_array[i]);
  }
}
console.log(pair_array);

console.log(odd_array);

//Q3 - agarra nos 2 arrays e mostres no browser em duas colunas lado a lado 
// cada coluna dos pares e dos imparers tem 50% do ecra
// os numeros impares lado esquerdo e pares do lado direito
// devem ser listado com uma unordered listado
// em vez de mostrar na vertical , mostrar na horizontal
// em cada list item vai ocupar a mesma % em termos de width 
// coluna dos pares deve ser azul background
// coluna dos impares deve ser background preto
// os numeros devem ser visiveis
// na lista dos pares tens de alterar o background do list item do azul da coluna e amarelo
// 

// 1 2 3 4

//  |   1      3   |   2      4   |    

// 1 2 3

//  |   1      3   |      2      |

const appDiv1 = document.getElementById('col_pair');

// adicionar os li dentro do ul com base em cada 

for(let i = 0; i < pair_array.length; i++){
  appDiv1.innerHTML += "<li>" + pair_array[i] + "</li>";
}

//appDiv1.innerHTML = pair_array;

const appDiv1 = document.getElementById('col_odd');

for(let i = 0; i < odd_array.length; i++){
  appDiv1.innerHTML += "<li>" + odd_array[i] + "</li>";
}

//Q4 - array inicial, certificar que um dos numeros se repita uma vez e um dos numeros que se repita pelo menos 3 vezes
let random_array1 = Array.from({length: 6}, () => Math.floor(Math.random() * 50 + 1));

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

// podia criar um ciclo para forcar a geracao do array ate nao ter duplicates
if(!hasDuplicates(random_array1))
{
  random_array1.push(random_array1[0]);
  random_array1.push(random_array1[1]);
  random_array1.push(random_array1[1]);
}

console.log(random_array1);





// upload para o git 




