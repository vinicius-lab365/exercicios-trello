// Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.

const student1  = {
    name: "Vinícius Bitencourt Pereira",
    age: 29,
    nationality: "Brasileiro",
    profession: "Programador",

    showData() {
        console.log(`Nome: ${this.name} \nIdade: ${this.age} \nNacionalidade: ${this.nationality} \nProfissão: ${this.profession}`);
    }
}

const student2  = {
    name: "Maria Green",
    age: 32,
    nationality: "Americana",
    profession: "Vendedora",

    showData() {
        console.log(`Nome: ${this.name} \nIdade: ${this.age} \nNacionalidade: ${this.nationality} \nProfissão: ${this.profession}`);
    }
}

const student3  = {
    name: "Bob Brown",
    age: 17,
    nationality: "Canadense",
    profession: "Advogado",

    showData() {
        console.log(`Nome: ${this.name} \nIdade: ${this.age} \nNacionalidade: ${this.nationality} \nProfissão: ${this.profession}`);
    }
}

student1.showData();
console.log();

student2.showData();
console.log();

student3.showData();
console.log();
