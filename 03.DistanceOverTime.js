function solve([first,second,time]) {
    let speed1 = Number(first);
    let speed2 = Number(second);
    let T = Number(time);

    let dist1 = (speed1 * T) / 3600;
    let dist2 = (speed2 * T) / 3600;
    let result = Math.abs(dist1 - dist2);
    console.log(result * 1000);
}
solve([0,60,3600]);