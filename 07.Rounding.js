function result([num,precision]) {
    num = Number(num);
    precision = Number(precision);

    if(precision > 15){
       console.log(parseFloat(num.toFixed(15)));
    }
    else{
        console.log(parseFloat(num.toFixed(precision)));
    }
}
result([3.1415926535897932384626433832795,2]);