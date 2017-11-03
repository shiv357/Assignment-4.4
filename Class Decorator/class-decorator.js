var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @function Player [This is a function that displays player name, age and class constructor definition]
 * @param {string} name [The name of the player]
 * @param {number} age [The age of the player]
 * @return [No return value]
 */
function Player(name, age) {
    return function (target) {
        console.log("\nPlayer Name: " + name + "\nAge: " + age + "\n\nName and definition of the function:\n\n" + target);
    };
}
/**
 * @class Game [Class that defines a game, @Player decorator is applied on it]
 */
var Game = /** @class */ (function () {
    /**
     * @constructor [Initializes the instance variables "title" and "numberOfPlayers"]
     * @param title [This is the name of the game]
     * @param numberOfPlayers [This is the number of players in the game]
     */
    function Game(title, numberOfPlayers) {
        this.title = title;
        this.numberOfPlayers = numberOfPlayers;
    }
    /**
     * @function play [This function is used to play the game]
     * @param [No parameters]
     * @return [No return value]
     */
    Game.prototype.play = function () {
        console.log('The match is going on...');
    };
    Game = __decorate([
        Player('Sachin Tendulkar', 44),
        Player('Roger Federer', 36)
    ], Game);
    return Game;
}());
