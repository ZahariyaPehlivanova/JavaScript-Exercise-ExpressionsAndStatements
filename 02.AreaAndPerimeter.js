function solve([x,y]) {
    let w = Number(x);
    let h = Number(y);
    let area = w * h;
    let perimiter = (2 * w) + (2 * h);
    console.log(area);
    console.log(perimiter);
}
solve([2,2]);