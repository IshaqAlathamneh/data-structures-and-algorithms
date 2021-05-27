'use strict';
const stack = require('../stacksAndQueues/stacks-and-queues').stack;
function multiBracketValidation(input) {
    let openChara = ['(', '{', '[']
    let closeChara = [')', '}', ']']
    let n = 0;
    let myStack = new stack()
    for(let element of input) {
        if(openChara.includes(element)){
            n++;
            if(element == '('){
                myStack.push(')')
            }else if (element == '{'){
                myStack.push('}')
            }else if (element == '['){
                myStack.push(']')
            }
        }else if (closeChara.includes(element)){
            n--;
            if(element == myStack.peek()){
                myStack.pop()
            }else{
                console.log('----> 1false');
                
                return false;
            }
        }
    }
    console.log('----> true');
    return n == 0;
}

// multiBracketValidation('[({}]')

module.exports = multiBracketValidation;