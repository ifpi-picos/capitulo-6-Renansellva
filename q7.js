
let globalVar = "Eu sou uma variável global";

function exemploVariaveis() {
    
    let localVar = "Eu sou uma variável local";
    
    console.log("Dentro da função:");
    console.log("Global:", globalVar); 
    console.log("Local:", localVar);  
}


console.log("Fora da função:");
console.log("Global:", globalVar);

try {
    console.log("Local:", localVar);
} catch (error) {
    console.error("Erro ao acessar localVar:", error.message);
}
