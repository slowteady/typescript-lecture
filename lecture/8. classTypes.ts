class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("SCORE CANNOT BE NEGATIVE");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

const elton = new Player("Elton", "Stelle");

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful {
  constructor(public brand: string, public color: string) {}
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("prada", "black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {}
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
