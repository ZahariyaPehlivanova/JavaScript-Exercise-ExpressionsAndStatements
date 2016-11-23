function result([day,month,year]){
    [day, month, year] = [day, month, year].map(Number);

    let date = new Date(year, month - 1, 0);

    console.log(date.getDate());
}
result(['17', '3', '2002']);