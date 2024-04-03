// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function beforeEach () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  };

 function destructivelyAppendCat(name){
    beforeEach()
    cats.push(name)
}
destructivelyAppendCat('Ralph')


console.log(cats)

function destructivelyPrependCat(name){
    beforeEach()
    cats.unshift(name)
}
destructivelyPrependCat('Bob')
console.log(cats)

function destructivelyRemoveLastCat(){
    beforeEach()
    cats.pop()
}
destructivelyRemoveLastCat()
console.log(cats)

function destructivelyRemoveFirstCat(){
    beforeEach()
    cats.shift()
}
destructivelyRemoveFirstCat()
console.log(cats)

function appendCat(name){
   beforeEach()
 const allCats = [...cats, name]   
 return allCats
}
appendCat('Broom')
console.log(cats)

function prependCat(name){
    beforeEach()
    const totCats = [name, ...cats]
    return totCats
}
prependCat('Arnold')
console.log(cats)

function removeLastCat(){
    beforeEach()
    const copyOfCats = cats.slice()
    copyOfCats.pop()
    return copyOfCats
}
removeLastCat()
console.log(cats)

function removeFirstCat(){
    beforeEach()
    const copyOfCats = cats.slice()
    copyOfCats.shift()
    return copyOfCats
}
removeFirstCat()
console.log(cats)




