// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//  * @return {Function}
//  */
// var createHelloWorld = function() {
    
    // return function(...args) {
        
    // }
// };
// In this problem i created the function createHelloWorld which returns a function that always returns "Hello World".
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
       return "Hello World";
    //    Mistake i did in this program is i did not return the string actually am tying to print the string in console.log
    }
};

createHelloWorld();
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

createHelloWorld()();