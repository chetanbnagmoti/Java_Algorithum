function fibonacciSequence() {

    let a ,b ,c;
    a=0;
    b=1;
    console.log(a ,b);
    for(let i=1;i<10;i++){
        let c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
    
    
}

fibonacciSequence();