// resposta correta
function kangaroo(x1, v1, x2, v2) {
    const count = (x2 - x1)/(v1 - v2)
    const soDu = (x2 -x1)% (v1-v2)
    if  ( count> 0 && soDu ===0)
    {
        return "YES"
    }else{
        return "NO"
    }}

    //Minha tentativa
    /*let kang1Pos = x1;
    let kang2Pos = x2;
    if (x2>x1 && v2>v1){
        return 'NO'
    }else{
    while (true){
        kang1Pos +=v1;
        kang2Pos +=v2;
         if (kang1Pos = kang2Pos){
            return 'YES';
            break
        }
    }
}}*/
//kangaroo(0,2,5,3)
//kangaroo(0,3,4,2)
console.log(kangaroo(21,6,47,3))