# classesJS
This was a small exercise to learn JS

# About
I wrote some basic vector and matrix classes so I can learn to write comfortably in JavaScript.

## Installation
Clone this repo.

Install Node.

Navigate to the src code directory.

Start Node by typing `node` in your terminal.

You can play with it by:

```
v = require('./linearalgebra')

v1 = new v.Vector([3,4,5])

v1.vector // will output [3,4,5]

v1.add(v1) // will output Vector { vector: [6,8,10] }

v2 = v.Vector[1,1,1]

v1.sub(v2)
```

## tests
to run the tests do:
```
npm run test
```
