function dispayAge() { 

    if(true) {
        var age = 25;
    }

    alert(age)
 }

//dispayAge()

// Scoping (2)
//Global scope
//Function scope

// Scoping (1)
//let/const (Block scope)


// Redeclaration
var age = 15;

{
    var age = 18;
}

alert(age)


// vedio 3

const PI = 3.14
//alert(PI)


/* Constantes
1 - Array
2 - Object
3 - Function
4 - RegExp
*/

const countries = ['Maroc', 'Algérie', 'Tunisie']
countries.push('Egypte')
//console.table(countries)


const animal = {
    color: 'black',
    age: 2
}
document.write(JSON.stringify(animal)) // hadi kat3iha object oder arry katrdha 3la chekel JSON kit9ra 
// alert  = document
animal.owner = 'Jamaoui' // ajoute au animal
animal.type = 'dog'  // ajoute au animal 
//animal = {}

// const run =  function (value)
// const funtion run (value)
const displayAnimal = function (animal){
    document.write(JSON.stringify(animal))
}
displayAnimal(animal)

 // explaine :
const reg = new RegExp('/.../') 



// vedio 4 :

// arrow fonction
// default value 
// rest parameters

function somme(a, b){
    return a + b ;
}

const somme = function(a, b) {
    return a + b ;
}

// arrow fonction => 
const sunm = (a,b) => {
    
}

// function off on ligns :
const sum = (a , b) => a + b ; 

// one parameter : 
const sun = a => a  

document.write(somme(1,2))


// les valeurs par defaut fe arrow function : 
const run = (a=0 , b=1) => a + b ;
const string = (age="himar") => age 

document.write(run());
document.write(string());

//rest parameter
const suRest = (...numbers) => {        // hadi katred liya dakchi li 3tani clients 
   for (let i=0 ;i< numbers.length ;i++) {
    console.log(numbers[i]);
    
   }
}
document.write(suRest(1,2,3,4,5,));

// la somme par fonction :
const suRestt = (...numbers) => {        // hadi katred liya dakchi li 3tani clients 
   somme = 0 ;
    for (let i=0 ;i< numbers.length ;i++) {
        somme = somme + numbers[i];
        console.log(somme);
    
   }
}
document.write(suRestt(1,2,3,4,5,));


// vedio 5 : 
// template literales = est la concatination = + de string mit value

let nam = 'zaki'
let pre = 'mennis'
// this's old methods for concatination des value est str the new methods est template literales

let str = 'willcomen in die stadt' + nam+' '+ pre
let newStr = 'willcomen in die stadt' + nam+' '+ pre
document.write(str)

// the new methods 
let newStrr = ` willcomen in die stadt ${nam} ${pre}`   // ` `
document.write(newStrr)


//exeercices :
 
let age = 20 ;
let isadulte ='adulte';
if (18 < adulte) {
    isadult ='mineur'
}
let newSt = `${age< 18 ? 'Mineur' : 'Adulte'}`  // condtution bhal if 


// vedio 6 : 
//  Spread syntax (...)  = work on iterable

const countriess = ['Maroc' ,'Algerie' ,'Tunisie' ,'Egypte']

console.log(...countriess) // Maroc , Algerie ,Tunisie ,Egypte
console.log([...countriess]) // ghadii irda tablaux

const countriess2 = ['us' ,'germany' ,'china' ,'brazil']

// kifach ghadi njm3 jouje dyal tableux 
// Array merge : 
console.table([...countriess,countriess2])

// object :
const fruit = {
    name : 'appel',
    color : 'red'
}

const fruit2 = {
    name : 'appel',
    color : 'green',
    weight :  0.5,
}
console.log(fruit)
console.log(fruit2)

// ila baghiyin njmou khass darorii {} hit object n'pad iterable 
console.log({...fruit,fruit2}); // egal : fruit2 + ila mkynch chihaja fe fruit2 ki ajoutiha men fruit
console.log({...fruit2,fruit}); // egal : fruit + ila mkaynch chihaja fe fruit ki ajoutiha men fruit2


/// vedio 7 
// string function :
let fruitt = '   apple  ' ;
let kunder ='1';
//2015
fruitt.includes(/* kanktbou dakch li bghina n9lbou 3lih fe fruitt */)  // true / false
fruitt.startsWith(/* wach kibda be dak value li 3tihe i9lb 3lihe */)  // true / false
fruitt.endsWith(/* wach katsalii be dak value li 3tihe i9lb 3lihe */)  // true / false

// 2017
fruitt.padStart(4,'0')   // 0001 katzid lina '0' 3la lisser 
fruitt.padEnd(4,'0')   // 1000 katzid lina '0' 3la limen

//2019
fruitt.trim() // hadi katt heyed liya l'espace li kayne fe links und rechts 
fruitt.trimEnd() // hadi katt heyed liya l'espace ghir men end     = trimRihgt 
fruitt.trimStart() // hadi katt heyed liya l'espace ghir men start   = trimLeft

// 2022 
fruit.at() // ka i3tik indice li fe string   =behal hadii  fruit[]



// vedio 8 
// Array function      array  = est un tableau

let strr = 'Maroc,Egypte,Tunisie'
let aplphabets = 'ABC'
const countries1 = strr.split(':')

console.log(Array.from(str)) // kat3tik kola letter fe un case : "M","a","r","c".............etc
console.log(aplphabets.split(',')) // hadi ghir katfer9 lina bahd el hadat ,  bhal  "A","B","C"

//  bhgina indice the strr 
const keys = countries1.keys()

for( let key of keys){
    console.log(key)
}

// Search : 

