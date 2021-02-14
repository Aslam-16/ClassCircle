interface GivenDetails {
    radius: number;
    color: string;
}

class Circle {
    CircleRadius: number;
    CircleColor: string;
    CircleArea: number;
    CircleCircumference: number;

    constructor(object: GivenDetails) {
        this.CircleRadius = object.radius;
        this.CircleColor = object.color;
    }

    getRadius() {
        console.log(this.CircleRadius);
    }

    getColor() {
        console.log(this.CircleColor);
    }

    getArea() {
        console.log(this.CircleArea);
    }

    getCircumference() {
        console.log(this.CircleCircumference);
    }

}

let object: GivenDetails = {
    radius: 1.1,
    color: 'red',
}
let Data = new Circle(object);
Data.getColor();
Data.getRadius();

