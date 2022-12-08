/**
 * 
 * @param { string } string 
 * @returns bool
 * 
 * This function assumes that the string will only contain bracket characters (),[],{}
 * 
 * 
 */
export const bracketsAreMatching = (string) => {
    const stringArray = string.split("")
    const stackOfBrackets = [];
    //Lookup table that matches the closing bracket to the corresponding 
    const lookupObject = {
        ")": "(",
        "}":"{",
        "]":"["
    }
    for (let index = 0; index < stringArray.length; index++) {
        const bracket = stringArray[index];
        //Check if the bracket is in the lookupObject as a key `true` means it is a closing bracket
        if(lookupObject.hasOwnProperty(bracket)) {
              //Remove the bracket from stack if the stack is not empty and the last element of the array is an opening bracket
            if(stackOfBrackets.length != 0 && stackOfBrackets[stackOfBrackets.length - 1] == lookupObject[bracket]) {
                stackOfBrackets.pop()
            } else {
                //return false therefore breaking from the loop since the brackets  are unbalanced
                return false
            }
        } else {
            //push the opening bracket to the stack
            stackOfBrackets.push(bracket)
        }
    }
    //This means all brackets match expected hence the empty stack
    return stackOfBrackets.length == 0
}