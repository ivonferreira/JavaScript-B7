class Person {
    age = 0;
    steps = 0;
    constructor(name){
       this.name = name;
    }
    takeAStep() {
        this.steps++;
    }
    setAge(newAge){
        if(typeof newAge == 'number'){
        this.age = newAge;
        }else{
            console.log('Erro! A idade precisa ser um número!')
        }
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAStep();
p2.setAge(32);
p3.setAge('ndind');

console.log(`P1 = ${p1.name} tem ${p1.age} anos e deu ${p1.steps} passos` );
console.log(`P2 = ${p2.name} tem ${p2.age} anos e deu ${p2.steps} passos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos e deu ${p3.steps} passos`);