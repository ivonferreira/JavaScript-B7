function createPerson (name, lastname, age) {
    return {
        name,
        lastname,
        age
    }
}

let person1 = createPerson('Ivon','Ferreira',39);
let person2 = createPerson('Neto','Silva',42)
console.log(person1.name);
console.log(person2.lastname)