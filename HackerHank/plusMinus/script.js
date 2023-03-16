function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    let c = 0;
    for(let i in arr){
        c++
        if (arr[i]>0){
            pos+=1;
        }else if(arr[i]==0){
            zer+=1;
        }else if(arr[i]<0){
            neg+=1;
        }
    }
    let posRatio = pos/c
    let negRatio = neg/c
    let zerRatio = zer/c
    console.log(posRatio.toFixed(6))
    console.log(negRatio.toFixed(6))
    console.log(zerRatio.toFixed(6))
    
}

let vetor = [-4, 3, -9, 0, 4, 1];
plusMinus(vetor)
