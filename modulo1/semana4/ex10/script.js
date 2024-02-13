function validateAge() {
    let age = Number(prompt("Digite sua idade: "))
    
    if(age < 18) {
        alert("Você é menor de idade");
    } else {
        alert("Você é maior de idade");
    }
}

validateAge();
