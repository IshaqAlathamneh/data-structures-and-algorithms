'use strict';
const stack = require('../stacksAndQueues/stacks-and-queues').stack;
function multiBracketValidation(input) {
    let chara = ['(' , ')' , '{' , '}' , '[' , ']']
    let openChara = ['(', '{', '[']
    let closeChara = [')', '}', ']']
    let filtered = input.split('').filter( x => chara.includes(x));
    console.log(filtered);
    let n = 0;
    let checked = 0;
    let myStack = new stack()
    filtered.forEach(element => {
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
                checked = 10;
            }
        }
        let prev = element;
    });
    if(n !== 0 || checked == 10){
        console.log('----> 2false');
        return false;
    }
    console.log('----> true');
    return true;
}

// multiBracketValidation('[({}]')

module.exports = multiBracketValidation;