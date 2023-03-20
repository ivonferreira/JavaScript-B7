function createPerson (name, lastname, age) {
    return {
        name,
        lastname,
        age,
        getFullName() {
            return `${this.name} ${this.lastname}`;
        }
    }
}




let person1 = createPerson('Ivon','Ferreira',39);
let person2 = createPerson('Neto','Silva',42)
console.log(person1.getFullName());
console.log(person2.lastname)