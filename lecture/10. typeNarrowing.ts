// 1. typeof 키워드를 통한 Typeof Guards를 할 수 있다.
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// 2. if문을 통한 Truthiness Guards를 할 수 있다.
const el = document.getElementById("idk");
if (el) {
  // htmlElement
} else {
  // null
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      // string
    }
  } else {
    // undefined
  }
};

// 3. 삼중 등호 === 를 사용하여 Equality(동등) 좁히기를 할 수 있다.
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}
someDemo(3, "3");

// 4. in 키워드를 사용하여 프로퍼티 여부를 따져 타입 좁히기를 할 수 있다.
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

getRuntime({ title: "Amadeus", duration: 160 });
getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 });

// 5. instanceof 키워드를 이용하여 타입 좁히기를 할 수 있다.
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    date.toUTCString();
  } else {
    new Date(date).toUTCString();
  }
}

class User {
  constructor(public userame: string) {}
}
class Company {
  constructor(public name: string) {}
}
function printName(entity: User | Company) {
  if (entity instanceof User) {
  } else {
  }
}

// 6. 타입 명제를 이용하여 타입 좁히기를 할 수 있다.
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow";
  } else {
  }
}

// 7. 판별 유니온을 이용하여 타입 좁히기를 할 수 있다. 단, 객체 속성이 동일해야한다.
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink";
    case "cow":
      return "Mooo";
    case "rooster": {
      return "Cockadoodledoo";
    }
    // 8. default문에 never 타입으로 변수를 할당하여 소진되지 않은 케이스에 대해 구현을 강제할 수 있다.
    default:
      const _exhaustiveCheck: never = animal;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};
