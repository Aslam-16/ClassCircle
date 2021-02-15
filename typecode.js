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
        var area = (Math.PI) * this.CircleRadius * this.CircleRadius;
        console.log('Area = ' + area.toFixed(2));
    };
    Circle.prototype.getCircumference = function () {
        var circum = 2 * (Math.PI) * this.CircleRadius;
        console.log("Circumference = " + circum.toFixed(2));
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
Data.getArea();
Data.getCircumference();
