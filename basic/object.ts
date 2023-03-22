// 1. 함수에서 받고 싶은 파라미터의 타입을 지정할 수 있다.
// 객체 내의 타입도 지정 가능하다.
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenkins" });

// 2. 객체 리턴값의 타입을 지정할 수 있다.
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: 34, y: 2 };
}

// 3. 객체 생성 후 함수의 파라미터로 넘겨주면, 지정된 타입만 검사하고 나머지는 추론된다.
const singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);

// 4. type alias를 이용하여 type을 변수처럼 사용할 수 있다.
type Point = {
  x: number;
  y: number;
};

function doublePoint(point: { x: number; y: number }): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// 5. 중첩 객체로도 type을 만들어 사용 가능하다.
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1234,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// 6. 물음표를 사용하면 선택적 프로퍼티로 사용 가능하다.
type Point2 = {
  x: number;
  y: number;
  z?: number;
};
const myPoint: Point2 = { x: 1, y: 3, z: 5 };

// 7. readonly 키워드를 사용하여 변경 불가능하게 설정할 수 있다.
type User = {
  readonly id: number;
  username: string;
};
const user: User = {
  id: 12345,
  username: "cat",
};

// 8. &를 사용하여 교차 타입을 만들 수 있다.
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type colorfulCircle = Circle & Colorful;

const happyFace: colorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9
}
