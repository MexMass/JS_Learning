interface User {
    username : string;
    firstName : string;
    age : number;
    friends : User[];
}

let person: User = {
    username: 'bob123',
    firstName: 'Bob',
    age: 16,
    friends: []
};
