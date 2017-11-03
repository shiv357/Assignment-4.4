/**
 * @function Player [This is a function that displays player name, age and class constructor definition]
 * @param {string} name [The name of the player]
 * @param {number} age [The age of the player]
 * @return [No return value]
 */
function Player ( name: string, age: number ) {

    return function (
        target: Function
    ) {
        console.log ( `\nPlayer Name: ${name}\nAge: ${age}\n\nName and definition of the function:\n\n${target}` );
    }

}

/**
 * @class Game [Class that defines a game, @Player decorator is applied on it]
 */
@Player('Sachin Tendulkar', 44)
@Player('Roger Federer', 36)
class Game {

    title: string;
    numberOfPlayers: number;

    /**
     * @constructor [Initializes the instance variables "title" and "numberOfPlayers"]
     * @param title [This is the name of the game]
     * @param numberOfPlayers [This is the number of players in the game]
     */
    constructor ( title: string, numberOfPlayers: number ) {

        this.title = title;
        this.numberOfPlayers = numberOfPlayers;

    }

    /**
     * @function play [This function is used to play the game]
     * @param [No parameters]
     * @return [No return value]
     */
    play() {

        console.log ( 'The match is going on...' );

    }

}
