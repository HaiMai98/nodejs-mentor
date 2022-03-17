// Spread operator object
const obj1  = {
    name: 'HaiMT',
    email: 'haimt@gmail.com'
};

const obj2 = {
    age: 25,
    role: 'user'
}

const obj3 = {...obj1, ...obj2};
console.log('Spread Operator Object Example: ', obj3);

//Spread operator array
const arr1 = ['Hai', 'Hieu', 'Hoang', 'Hien', 'Hiep'];

const arr2 = ['Quang', 'Ha'];

const arr3 = [...arr1, ...arr2];
console.log('Spread Operator Array Example: ', arr3);
