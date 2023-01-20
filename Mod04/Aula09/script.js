class Person {
    static hands=2;
    age = 0;

    constructor(name) {
        this.name = name;
    }
    
} 
 function createPerson(name,age){ //factory
    let p = new Person(name);
    p.age = age;
    return p;
 }

let p1 = createPerson("Ivon", 38);
console.log(`O nome da pessoa é ${p1.name} e sua idade é de ${p1.age} anos`);