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

// 4. jsx문법에서는 <></> 를 사용하므로 TypeScript의 제네릭 문법과 혼동될 수 있다.
// 따라서 제네릭에 후행 쉼표(,) 를 붙여 구분한다.
const getRandomElement = <T,>(list: T[]): T => {
  return list[0];
}

// 5. 여러개의 타입을 선언할 수 있다.
function merge<T,U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  }
}

const comboObj = merge({name: 'colt' }, { pets: ["blue", "elton"] });
// = merge<{name: string}, {pets: string[]}>({name: 'colt' }, { pets: ["blue", "elton"] });

// 6. extends 키워드를 통해 타입을 제한할 수 있다.
function merge2<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2
  }
}

// 7. 기본 파라미터 타입을 설정할 수 있다.
function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums2 = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

// 8. 클래스에 제네릭을 사용할 수 있다.
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

