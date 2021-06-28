// Write your solution here!
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

/* OPTION 1 USING SLICES
function appendCat(name){
    const newArray = cats.slice(0);
    newArray.push(`${name}`);
    console.log(newArray);
    return newArray;
}
*/

//OPTION 2 USING SPREAD OPERATOR
function appendCat(name){
    const newArray = [...cats, `${name}`];
    console.log(newArray);
    return newArray;
}

appendCat("Broom");

function prependCat(name){
    const prependArray = [`${name}`, ...cats];
    console.log(prependArray);
    return prependArray;
}

prependCat("Arnold");

function removeLastCat(){
    const removeLast = cats.slice(0, -1);
    console.log(removeLast);
    return removeLast;
}

function removeFirstCat(){
    const removeFirst = cats.slice(1);
    console.log(removeFirst);
    return removeFirst;
}
