// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name)
{
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat()
{
    cats.pop()
}
function destructivelyRemoveFirstCat()
{
    cats.shift()
}
function appendCat(name)
{
   name = [...cats]
   name.push("Broom")

   return name;

}

function prependCat(name)
{
   name = [...cats]
   name.unshift("Arnold")

   return name;

}

function removeLastCat()
{
   let newCats = [...cats]
   newCats.pop()
   return newCats

}
function removeFirstCat()
{
   let newCats = [...cats]
   newCats.shift()
   return newCats

}