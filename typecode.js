var Circle = /** @class */ (function () {
    function Circle(object) {
        this.CircleRadius = object.radius;
        this.CircleColor = object.color;
    }
    Circle.prototype.getRadius = function () {
        console.log(this.CircleRadius);
    };
    Circle.prototype.getColor = function () {
        console.log(this.CircleColor);
    };
    Circle.prototype.getArea = function () {
        console.log(this.CircleArea);
    };
    Circle.prototype.getCircumference = function () {
        console.log(this.CircleCircumference);
    };
    return Circle;
}());
var object = {
    radius: 1.1,
    color: 'red'
};
var Data = new Circle(object);
Data.getColor();
Data.getRadius();
