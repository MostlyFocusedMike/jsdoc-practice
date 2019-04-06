/**
 * A number as either a number or string
 * @typedef {(number|string)} NumberLike
 */

// /**
//  * just another function
//  * @param {anythingok} anotherVar this can be anything
//  */

// function anotherFunc(anotherVar) {
//     return anotherVar;
// }

/** A person class */
class Person {
    /**
     * make a person real nice like
     * @param {string} name - the person's name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * greet someone
     * @param {string} otherName - the name of the person that you are greeting
     * @return {string} A nice greeting
     */
    greet(otherName) {
        return `Hello, ${otherName} my name is ${this.name}`;
    }

    /**
     * say goodby to someone
     * @param {string} otherName - the name of the person that you are greeting
     */
    bye(otherName) {
        return `goodbye, ${otherName}`;
    }

    /**
     * return the age
     * @param {NumberLike} age - an age
     */
    guessAge(age) {
        return age;
    }
}