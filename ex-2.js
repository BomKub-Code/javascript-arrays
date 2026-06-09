const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1];
let alexHobbies = alex.hobbies;
let alexAndJamesAge = alex.age + employees[0].age;
console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);
