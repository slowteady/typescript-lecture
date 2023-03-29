// 1. 제네릭을 이용하여 타입을 설정할 수 있다.
const nums: Array<number> = []; // = const nums: number[] = [];
const colors: Array<string> = [];

// 2. 제네릭을 이용하여 Element 타입 지정이 가능하다.
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputEl);
inputEl.value = "Hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// 3. T는 Type을 의미, 함수 호출 타입과 리턴 타입이 같을 때 제네릭을 사용한다.
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<Cat>({name: "json", breed: "no"});

