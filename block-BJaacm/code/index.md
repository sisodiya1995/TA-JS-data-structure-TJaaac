```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true  ,value copy by refrence (address is same)
- `user === newUser;` // true ,value copy by refrence (address is same)
- `user.name === newUser.name;` // true , value copy by refrence (address is same)
- `user.name == newUser.name;` //  true, value copy by refrence (address is same)
- `user.sibling == newUser.sibling;` //  true , value copy by refrence (address is same)
- `user.sibling === newUser.sibling;`// true , value copy by refrence (address is same)
- `user.sibling == allBrothers;`// false , value copy by refrence (address is not same)
- `user.sibling === allBrothers;`// false , value copy by refrence (address is not same)
- `brothersCopy === allBrothers;`// false , value copy by refrence (address is not same)
- `brothersCopy == allBrothers;`// false , value copy by refrence (address is not same)
- `brothersCopy == user.sibling;`//  true , value copy by refrence (address is same)
- `brothersCopy === user.sibling;` //  true , value copy by refrence (address is same)
- `brothersCopy[0] === user.sibling[0];`// true , value copy by refrence (address is same)
- `brothersCopy[1] === user.sibling[1];`//  true , value copy by refrence (address is same)
- `user.sibling[1] === newUser.sibling[1];`//  true , value copy by refrence (address is same)
