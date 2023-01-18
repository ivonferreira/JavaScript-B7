class Person {
    _age = 10;
    steps = 0;
    constructor(firstName , lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }
    takeAStep() {
        this.steps++;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    get age(){
        return this._age;
    }
}

let p1 = new Person("João","Silva");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro","Souza");

console.log(`P1 = ${p1.fullName} tem ${p1.age} anos e deu ${p1.steps} passos` );
console.log(`P2 = ${p2.fullName} tem ${p2.age} anos e deu ${p2.steps} passos`);
console.log(`P3 = ${p3.fullName} tem ${p3.age} anos e deu ${p3.steps} passos`);