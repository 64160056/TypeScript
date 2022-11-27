type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car1: Car = {
    year: 2001,
    type: "Nissan",
    model: "XXX",
}
console.log(car1)