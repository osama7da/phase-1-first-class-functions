function receivesAFunction(callback){
    console.log(callback())
}

function returnsANamedFunction (){ 
    let namedFunction = () => console.log("Heeeey , Im named function");
   return namedFunction;
}

function returnsAnAnonymousFunction (){
    return() => console.log("Hello, I am  An Anonymous Function")
}


