1.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: '2021'
};
console.log(car.year);


2.
const person = {
    name: 'Như',
    address: {
        street: 'Nguyen Thai Binh',
        city: 'HCM',
        country: 'VN',
    },
};
console.log(person.address.street);


3.
const student = {
    name: 'Như',
    grades: {
        math: '8',
        english: '7',
    }
};
console.log(student["grades"]["math"]);


4.
const settings = {
volume: '50',
brightness: '60'
};
settings.volume = '80';
console.log(settings.volume);


5.
const bike = {};
 bike["color"] = 'green'
 console.log(bike);


6. 
const employee = {
    name: 'Như',
    age: '31',
};
delete employee.age;
console.log(employee);


7.
const school = {
    classA: ["An","Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
};
console.log("Class A gồm:",school.classA);
console.log("Class B gồm:",school.classB);