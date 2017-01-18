'use strict';

function Stack() {
  const myStack = [];

  return {
    empty,
    peek,
    push,
    pop,
    search,
  };

  function empty() {
    if (myStack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function peek() {
    return myStack[(myStack.length - 1)];
  }

  function push(item) {
    myStack[myStack.length] = item;
    return item;
  }

  function pop() {
    return myStack.splice((myStack.length - 1), 1);
  }

  function search(item) {
    for (let i = (myStack.length - 1); i >= 0; i--) {
      if (myStack[i] === item) {
        return i;
      }
    }
    return 0.1;
  }
}

module.exports = Stack;
