function solve([x1,y1,z1,x2,y2,z2]) {
    x1  = Number(x1);
    y1 = Number(y1);
    z1  = Number(z1);
    x2 = Number(x2);
    y2  = Number(y2);
    z2 = Number(z2);

    let x = x2-x1;
    let y = y2-y1;
    let z = z2-z1;

    let distance = Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)) + (Math.pow(z, 2)));
    console.log(distance);
}
solve([-7,-4,3,17,6,2.5]);