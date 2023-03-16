function staircase(n) {
    for (let i=0; i < n ; i++){
        let c = n-(n-(i+1))
        console.log(" ".repeat(n-c)+"#".repeat(c));
    }

}
staircase(6);