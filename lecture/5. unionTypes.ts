import Point from './3. object';

// 1. | 기호로 유니온 타입을 이용하여 여러개의 타입을 설정할 수 있다.
let age: number | string = 21;
age = 23;
age = "24";

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// 2. 함수 파라미터에 유니온 타입을 사용할 수 있다.
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

// 3. 타입 좁히기를 사용하여 타입스크립트가 자동으로 타입 처리하게 도울 수 있다.
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// 4. 여러 타입을 사용하는 배열의 경우, 괄호로 유니온 타입을 사용한다.
const union: (string | number)[] = [123, "asd"];

// 5. 기본 값을 할당하여 사용할 값을 제한할 수 있다.
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

  const day: DayOfWeek = "Monday";
