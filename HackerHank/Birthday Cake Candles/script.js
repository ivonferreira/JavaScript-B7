function birthdayCakeCandles(candles) {
    let tallest = Math.max(...candles);
    let tallestCount = 0;
    for (let i in candles){
        if (candles[i]==tallest){
            tallestCount++;
        }
    }
    return tallestCount;

}
let vetor = [3,2,1,3,4,4,1,3,4,2,1,4,3,3,3];
birthdayCakeCandles(vetor)