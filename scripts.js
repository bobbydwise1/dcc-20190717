/*
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:
def cons(a, b):

def pair(f):

return f(a, b)

return pair

Implement car and cdr.
*/

//Note, this is done in javascript.
const makeRandomNumber = () => {
  return Math.ceil(Math.random()*10);
}

const cons = (a,b) => {
  return [a,b];
}

const car = (yourArray) => {
  return yourArray[0];
}

const cdr = (yourArray) => {
  return yourArray[yourArray.length-1];
}

$(document).ready(function() {
  $('#output-section-1').text('3, 4');
  $('#output-section-2').text(cons(3,4));
  $('#output-section-3').text(car(cons(3,4)));
  $('#output-section-4').text(cdr(cons(3,4)));
  });
