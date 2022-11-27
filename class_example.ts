class Person {
    public constructor(private readonly name:string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person);
console.log(person.getName());

interface Shape {
    getArea: () => number;
}

class Rectangle1 implements Shape {
    public constructor(protected readonly width:number, protected readonly height:number){}
    public getArea(): number {
        return this.width * this.height;
    }
}

const rect1:Rectangle1 = new Rectangle1(50, 10);
console.log(rect1);
console.log(rect1.getArea());

class Squaru extends Rectangle1 {
    public constructor(width:number) {
        super(width,width);
    }
    public toString(): string{
        return`Square [${this.width}]`;
    }
}
const sq = new Squaru(10);
console.log(sq);
console.log(sq.getArea())
console.log(sq.toString());

abstract class Polygon {
    public abstract getArea() : number;

    public toString(): string{
        return`Polygon[area = ${this.getArea()}]`
    }
} 
class Rectangle2 extends Polygon {
    public constructor(protected readonly width:number, protected readonly height:number){
        super();
    }
    public getArea(): number {
        return this.width * this.height;   
    }
}
const rect2:Rectangle2 = new Rectangle2(50, 10);
console.log(rect2);
console.log(rect2.toString())