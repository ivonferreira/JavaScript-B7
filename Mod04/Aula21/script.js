const defaultUser = {
    name: '',
    email:'',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Ivon',
    email: 'ivonferreira@gmail.com',
}

console.log(user1)

const adm1 = {
    ...defaultUser,
    name:'Admin Master',
    email: 'admin@master.com',
    level: 5,
    tipo:2
}
console.log(adm1)