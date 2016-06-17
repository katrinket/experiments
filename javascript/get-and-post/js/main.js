var someGlobalVariable=0;
function multiply(a,b){

    //make the result of function call = to some local variable (local means it only exists as this function runs glocal can be accessed everywhere)
    var someLocalVariable = veryComplicatedMAthLibraryThatMightBeDoingInterestingThings(a,b);

    console.log('someLocalVariable',someLocalVariable)

    someGlobalVariable +=someLocalVariable;
    console.log('Oh look its remebering thats because its global! someGlobalVariable',someGlobalVariable)
}


function veryComplicatedMAthLibraryThatMightBeDoingInterestingThings(a,b){

    return a*b
}

function kdogLog(stringToLog){
    console.log(new Date(),stringToLog);
}