/**
 * @function FruitDecorator [This is the method decorator definition]
 * @param target [This is the function we are targeting]
 * @param propertyKey [This is the name of the function]
 * @param descriptor [This describes the characteristics of the function]
 */
function FruitDecorator ( target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any> ): void {

    console.log ( '\ntarget: ', target );
    console.log ( '\npropertyKey: ', propertyKey  );
    console.log ( '\ndescriptor: ', descriptor );

}

/**
 * @class Fruit [This class is used to define a fruit]
 */
class Fruit {

    name: string;
    color: string;

    /**
     * @constructor [This function initializes the instance variables "name" and "color"]
     * @param name [This is the name of the fruit]
     * @param color [This is the color of the fruit]
     */
    constructor ( name: string, color: string ) {

        this.name = name;
        this.color = color;

    }

    /**
     * @function fruitDetails [This function describes the fruit. @FruitDecorator method decorator is applied to it.]
     * @param [No parameters]
     * @return [No return value]
     */
    @FruitDecorator
    fruitDetails(): void {

        console.log ( '\nFruit Details:\nName: ' + this.name + ', Color: ' + this.color );

    }

}

// Instantiating the Fruit class and displaying the fruit details
let fruit: Fruit = new Fruit('Apple', 'Red');
fruit.fruitDetails();
