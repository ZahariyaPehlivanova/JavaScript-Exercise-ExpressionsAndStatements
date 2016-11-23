function solve([p,i,n,t]) {

    [p,i,n,t] = [p,i,n,t].map(Number);
    i /= 100;
    let frequency = 12 / n;
    let result =  p * Math.pow(1 + i / frequency,frequency * t);

    console.log(result.toFixed(2));
}
solve([1500,4.3,3,6]);