import { a } from "./m";
console.log(a);
interface test{
    name: string;
    age: number;
    say(): void;
    // [property: string]:number;
}
type test1={
    name: string;
    age: number;
}
interface test2 extends test {
    render(): void;
}
// const obj:test = {name: "ww",age: 10};

class Test implements test {
    constructor(public name: string, public age: number) {
        // this.name = name;
        // this.age = age;
    }
    get _name(): string {console.log('Huoq变脸和');
     return this.name; };
    set _name(value: string) {console.log('事整子');
     this.name = value;}
    
    // name: string;
    // age: number;
    say(): void {
        throw new Error("Method not implemented.");
    }
    
}
const Tss = new Test('haha', 20);
Tss._name = 'testsdas'
console.log(Tss._name);






abstract class Student {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
  name: string;
  age: number;
//   protected _id: number = 1;
protected _id: number =1
  static a = "student";
  test = "sda";
  abstract say():void
}
class Dog extends Student {
  constructor(name: string, age: number, al: boolean) {
    super(name, age);
  }
    say() {
      
  }
}
// const b = new Student("2", 1);
const d = new Dog("2", 1, true);
console.log(Student.a);


// 泛型
function testfc<T>(a: T):T {
    return a
}
testfc(10)
testfc<string>('10')

interface test22{
    length:number;
}
function fn<T>(a: T):T {
    return a
}
fn(10)
let acc:string[]


function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']