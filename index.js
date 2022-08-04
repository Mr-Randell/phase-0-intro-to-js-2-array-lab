// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newcats = [...cats ,"Broom"];
    return newcats;
}

function prependCat(name) {
    const newcats = ["Arnold", ...cats];
    return newcats;
}

function removeLastCat() {
    const newcats = [...cats];
    return newcats.splice(0, 2);
}

function removeFirstCat() {
    const newcats = [...cats];
    return newcats.splice(1, 3);
}