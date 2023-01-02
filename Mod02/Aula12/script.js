 

 function addSquares(a,b){
    function square(x){ // função de escopo local, ou seja essa função só funciona dentro dessa outra função
        return x*x;
    }
    // const square = x => x*x;  //Podemos criar uma arrow function tb

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
 }
 console.log(addSquares(2,3));