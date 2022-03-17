//Example Object
const user = {
    username: 'HaiMT',
    age: 25,
    email: 'haimt@gmail.com',
    hobby: ['chess', 'music'],
};

//old use
const oldAge = user.age;
const oldEmail = user.email;
console.log('Old Use Example: ', oldAge, oldEmail);

//destructuring
const { age, email, username, hobby } = user;
console.log('Destructuring: ', age, email);