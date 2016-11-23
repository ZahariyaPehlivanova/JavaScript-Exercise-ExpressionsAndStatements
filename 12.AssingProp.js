function result([prop1,v1,prop2,v2,prop3,v3]){

    let obj = {};

    obj[prop1] = v1;
    obj[prop2] = v2;
    obj[prop3] = v3;

    console.log(obj);
}
result(['name', 'Pesho', 'age', '23', 'gender', 'male']);