# classesJS
This was a small exercise to learn JS

# About
I wrote some basic vector and matrix and polynomial classes so I can learn to write comfortably in JavaScript.

## Installation
Clone this repo: `git@github.com:Jobhdez/classesJS.git`

Install Node.

Navigate to the src code directory.

Start Node by typing `node` in your terminal.

You can play with it by:

```
// vectors
//--------------- 

let v = require('./linearalgebra')

let v1 = new v.Vector([3,4,5])

v1.vector // returns [3,4,5]

v1.add(v1) // returns Vector { vector: [6,8,10] }

let v2 = v.Vector([1,1,1])

v1.sub(v2) // returns Vector { vector: [0,0,0] }

let v3 = v.Vector([6,8])

v3.magnitude() // returns 10

let v4 = v.Vector([1,0,0]) 

v4.isUnitVector() // returns true

// matrices
//-------------

let m1 = new v.Matrix([[2,3,4],[4,5,6]])

m1.add(m1) // returns Matrix { matrix: [[4,6,8], [8,10,12]] }

m1.mulByScalar(3) // returns Matrix { matrix: [[6,9,12], [12,15,18]] }

let m4 = new v.Matrix([[2,3,4], [5,6,7]])

m4.transpose() // returns Matrix { matrix: [[2,5], [3,6], [4,7]] }
```

## tests
to run the tests do:
```
npm run test
```
