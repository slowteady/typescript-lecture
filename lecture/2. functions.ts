// 1. 함수 파라미터에 타입 지정
function func(num: number) {
  return num * num;
}

// 2. 함수 파라미터에 맞는 타입의 아규먼트를 넣어줘야한다.
const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("OKAY", 123, false);

// 3. 기본 파라미터는 타입 뒤에 붙는다.
function greet(person: string = "stranger") {
  return `${person}`;
}

// 4. return값에도 타입을 붙이는 것이 좋다.
function square(num: number): number {
  return num * num;
}

// 5. 콜백함수의 인자의 타입을 추론을 한다.
const colors = ["red", "yellow"];
colors.map((color) => {});

// 6. void 타입을 통해 반환 실수를 체크할 수 있다.
function printTwice(msg: string): void {
  console.log(msg);
}


