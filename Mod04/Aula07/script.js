class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
    sayHi (){
        console.log(`${this.name} Diz oi`)
    }
} 


class Student extends Person {
    constructor(name,id){
        super(name);
        this.id = id;
    }
    sayHello(){
        super.sayHi();
        console.log(`${this.name} é um estudante e diz oi!`)
    }
}

let p1 = new Student('Ivon',1);
p1.age = 38;
p1.sayHi();
console.log(`O nome do aluno é ${p1.name}, ele tem ${p1.age} anos de idade e sua id de matricula é ${p1.id}`)

let p2 = new Student('Deise',2);
p2.sayHello(); 
p2.age = 35;
console.log(`O nome do aluno é ${p2.name}, ele tem ${p2.age} anos de idade e sua id de matricula é ${p2.id}`)