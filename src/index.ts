// typeNarrowing

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

