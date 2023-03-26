// 1. interface를 사용하여 타입을 지정할 수 있다.
interface Dog {
  name: string;
  age: number;
}

const myDog:Dog = {
  name: "Candy",
  age: 14
}

// 2. 메소드의 타입도 지정할 수 있다.
interface Product {
  name: string,
  price: number,
  applyDiscount(discount: number): number;
}

const shoes = {
  name: "Blue Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  }
}

console.log(shoes.applyDiscount(0.4));

// 3. interface는 상속 받아서 확장할 수 있다.
interface Computer extends Product {
  spec: string 
}

const win95: Computer = {
  name: "Win95",
  price: 1000,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
  spec: "I3"
}

// 4. 다중 상속도 가능하다.
interface Robot extends Computer, Dog {

}

// 5. Types VS Interface
// Interfacesms 객체에 사용되고, Types는 리터럴에 사용된다.