var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @function FruitDecorator [This is the method decorator definition]
 * @param target [This is the function we are targeting]
 * @param propertyKey [This is the name of the function]
 * @param descriptor [This describes the characteristics of the function]
 */
function FruitDecorator(target, propertyKey, descriptor) {
    console.log('\ntarget: ', target);
    console.log('\npropertyKey: ', propertyKey);
    console.log('\ndescriptor: ', descriptor);
}
/**
 * @class Fruit [This class is used to define a fruit]
 */
var Fruit = /** @class */ (function () {
    /**
     * @constructor [This function initializes the instance variables "name" and "color"]
     * @param name [This is the name of the fruit]
     * @param color [This is the color of the fruit]
     */
    function Fruit(name, color) {
        this.name = name;
        this.color = color;
    }
    /**
     * @function fruitDetails [This function describes the fruit. @FruitDecorator method decorator is applied to it.]
     * @param [No parameters]
     * @return [No return value]
     */
    Fruit.prototype.fruitDetails = function () {
        console.log('\nFruit Details:\nName: ' + this.name + ', Color: ' + this.color);
    };
    __decorate([
        FruitDecorator
    ], Fruit.prototype, "fruitDetails", null);
    return Fruit;
}());
// Instantiating the Fruit class and displaying the fruit details
var fruit = new Fruit('Apple', 'Red');
fruit.fruitDetails();
