function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    for(let i in apples){
        if (apples[i]+a >= s && apples[i]+a <= t && a<s){
            appleCount++
        }
    }
    for (let j in oranges){
        if (oranges[j]+b <= t && oranges[j]+b >= s && t<b){
            orangeCount++
        }
    }
    console.log(appleCount) 
    console.log(orangeCount)
}
//countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
countApplesAndOranges(2,3,1,5,[-2],[-1])
/*
s = house start
t = house end
a = apple tree
b = orange tree
apples = array
orange = array 

calcs
apple[i]+a se maior que s conta +1, se não nao soma 
orange[i]+b se maior que t conta+1, se não não soma
retorna contador apple e contador orange
*/