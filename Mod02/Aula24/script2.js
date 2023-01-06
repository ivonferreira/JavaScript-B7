let cars = [
    {brand:'FIAT', year:2022},
    {brand:'BMW', year:2018},
    {brand:'Ferrari', year:2020}
]
/*
cars.sort((a,b) =>{ // Ordenar array com objeto dentro
    if (a.year > b.year){
        return 1;
    }else if(a.year < b.year){
        return -1;
    }else{
        return 0;
    }
});*/
cars.sort((a,b) => { // Ordenar array com objeto dentro forma mais simplificada
    return a.year - b.year
});
console.log(cars);

cars.sort((a,b)=> b.year - a.year); //Ordem inversa e ainda mais simplificada
console.log(cars);