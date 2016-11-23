function result([num]) {
    num = Number(num);

    let inch = Math.floor(num / 12);
    let feet = num % 12;
    console.log(`${inch}'-${feet}"`);
}
result([11]);