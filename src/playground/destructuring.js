// DESTRUCTURING OBJECT
const person = {
    // name: 'Ify',
    age: 26,
    location: {
        city: 'Abuja',
        temp: 25,
    },
};

const { name = 'Peace', location } = person;

console.log(`My name is ${name}, and i'm from ${location.city}`);

const book = {
    title: 'Something interesting',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    },
};
const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName);

// DESTRUCTURING ARRAY
const item = [, , 600];

const [coffee = 'drink of your choice', small, medium, large] = item;
console.log(`A medium ${coffee} costs N${medium}`);
