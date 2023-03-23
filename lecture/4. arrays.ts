// 1. 배열은 타입[] 형식으로 선언한다.
const activeUsers: string[] = [];
activeUsers.push("Tony");

const ageList: number[] = [45, 21, 11];
ageList[0] = 99;
ageList[0] = "123";

// 2. 생성한 타입도 배열 타입으로 지정할 수 있다.
const bools: boolean[] = [];
const coords: Point[] = [];
coords.push({ x: 23, y: 3 });
coords.push({ y: 3 });

// 3. 다차원 배열의 갯수만큼 []를 선언한다.
const board: string[][] = [["a", "b", "c"]];
