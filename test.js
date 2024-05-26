const arrayOfObjects = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    hobbies: ["reading", "gaming", "coding"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zip: "67890",
    },
    hobbies: ["hiking", "painting", "photography"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 35,
    address: {
      street: "789 Oak St",
      city: "Thirdtown",
      state: "TX",
      zip: "11112",
    },
    hobbies: ["cooking", "traveling", "music"],
  },
];


const test = arrayOfObjects.find(item => item.name === "John Doe")

const test2 = arrayOfObjects.map((item) => {
    if (item.age > 20) {
            return item
    }
})

console.log(test2);