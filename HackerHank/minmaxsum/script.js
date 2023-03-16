function miniMaxSum(arr) {
    let sum = 0;
    let maxSum = 0;
    let minSum = 0;
    for (let i in arr){
        sum +=arr[i]}
        for (let c in arr){
        if (arr[c] == Math.min(...arr)){
            minSum = sum - Math.max(...arr)
        }if(arr[c] == Math.max(...arr)){
            maxSum = sum - Math.min(...arr)
            }
    }
    console.log(`${minSum} ${maxSum}`)
}
let vetor = [5,5,5,5,5]
miniMaxSum(vetor)