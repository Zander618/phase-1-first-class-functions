function receivesAFunction(callback){
    return(callback())
}

receivesAFunction(function () { return "I am defined"});

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}