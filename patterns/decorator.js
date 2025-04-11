class Car {
  constructor() {
    this.cost = function () {
      return 20000;
    };
  }
}

function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}

function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 2000;
  };
}

function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}

const car = new Car();

console.log(car.cost());

carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);

console.log(car.cost());

// function Car(name) {
//   this.name = name;
//   this.color = "White";
// }
// const tesla = new Car("Tesla");

// tesla.setColor = function (color) {
//   this.color = color;
// };

// tesla.setPrice = function (price) {
//   this.price = price;
// };

// tesla.setColor("black");
// tesla.setPrice(40000);

// console.log(tesla.color);
