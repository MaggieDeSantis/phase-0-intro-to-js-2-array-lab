const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push("Ralph");
}

function destructivelyPrependCat(name){
  cats.unshift("Bob");
  }
  
function  destructivelyRemoveLastCat(){
    cats.pop(2)
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    var appendCat = [...cats,"Broom"];
    return appendCat;
}

function prependCat(name){
    var prependCat = ["Arnold",...cats];  
    return prependCat;
}

function removeLastCat(){
    var removeLastCat = cats.slice(0,cats.length-1);
    return removeLastCat;
}
function removeFirstCat(){
    var removeFirstCat = cats.slice(1)
    return  removeFirstCat;
}