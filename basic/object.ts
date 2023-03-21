// 1. 함수에서 받고 싶은 파라미터의 타입을 지정할 수 있다.
// 객체 내의 타입도 지정 가능하다.
function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jenkins"});

// 2. 객체 리턴값의 타입을 지정할 수 있다.
let coordinate: {x: number, y: number} = {x: 34, y: 2};

function randomCoordinate(): {x: number, y: number} {
    return {x: 34, y: 2}
}

// 3. 객체 생성 후 함수의 파라미터로 넘겨주면, 지정된 타입만 검사하고 나머지는 추론된다.
const singer = {first: "Mick", last: "Jagger", age: 473};
printName(singer);