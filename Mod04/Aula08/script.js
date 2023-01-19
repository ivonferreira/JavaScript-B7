class Person {
    static hands=2;
    age = 0;

    constructor(name) {
        this.name = name;
    }
    static sayHi(){
        console.log(`Oi eu sou ${this.name} e tenho ${Person.hands} mãos`)
    }
} 

let p1 = new Person('Ivon');

Person.sayHi();