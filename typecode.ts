interface GivenDetails {
    radius: number;
    color: string;
}

class Circle {
    CircleRadius: number;
    CircleColor: string;
    CircleArea: number;
    CircleCircumference: number;
    
tsc 
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
        let area = (Math.PI)*this.CircleRadius*this.CircleRadius;
        console.log('Area = '+ area.toFixed(2));
    }

    getCircumference() {
        let circum = 2*(Math.PI)*this.CircleRadius;
        console.log("Circumference = " + circum.toFixed(2));
    }

}

let object: GivenDetails = {
    radius: 1.1,
    color: 'red',
}
let Data = new Circle(object);
Data.getColor();
Data.getRadius();
Data.getArea() 
Data.getCircumference()

