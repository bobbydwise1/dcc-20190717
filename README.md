# Daily Coding Problem 2019-07-17

####  _This problem was asked by Jane Street._

cons(a, b) _constructs a pair, and_ car(pair) _and_ cdr(pair) _returns the first and last element of that pair. For example,_ car(cons(3, 4)) _returns 3, and_ cdr(cons(3, 4)) _returns 4._

_Given this implementation of cons:_

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

_Implement car and cdr._
