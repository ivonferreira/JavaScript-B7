let carros = [
    {marca:"fiat",modelo:"Palio"},
    {marca:"fiat",modelo:"Uno"},
    {marca:"toyota",modelo:"Corolla"},
    {marca:"Ferrari",modelo:"F50"}
];


let carro = {
    marca:"Fiat",
    modelo:"Uno",
    peso:800,
    ligado: false,
    ligar:function(){
        console.log("Ligando o "+ this.modelo);
        this.ligado = true;
        console.log('VRUM, VRUM!')
    },
    acelerar:function(){
        if(this.ligado){
            console.log('VRUMMMMMMMM!')
        }else{
            console.log(`O ${this.modelo} não está ligado`)
        }
    }
}
console.log(carros[2]["modelo"])
console.log(carro["marca"]);
console.log(carro.ligado);
carro.acelerar();
carro.ligar();
console.log(carro.ligado);
carro.acelerar();