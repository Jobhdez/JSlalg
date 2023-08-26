# JSlalg
This is a small (toy) exercise to learn JS.

I wrote some basic vector and matrix and polynomial classes so I can learn to write comfortably in JavaScript.

I also built a little API in express.
## Dependencies
1. Clone this repo: `git clone git@github.com:Jobhdez/classesJS.git`

2. Install Node:


- MacOS: `brew install node`
[Homebrew](https://brew.sh)

- Ubuntu: `sudo apt install nodejs`

- Arch Linux: `pacman -S nodejs`

## Usage
1. Navigate to the src code directory:
```
* cd ~/classesJS/src
```

2. Start Node by typing `node` in your terminal.
```
* node
* m = require('./matrix')
```

### Example 

```JS
// vectors
//--------------- 

let v = require('./vector')

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

let m = require('./matrix')

let m1 = new m.Matrix([[2,3,4],[4,5,6]])

m1.add(m1) // returns Matrix { matrix: [[4,6,8], [8,10,12]] }

m1.mulByScalar(3) // returns Matrix { matrix: [[6,9,12], [12,15,18]] }

let m4 = new m.Matrix([[2,3,4], [5,6,7]])

m4.transpose() // returns Matrix { matrix: [[2,5], [3,6], [4,7]] }
```

### API
```
* cd server
* DEBUG=express* node api.js
```

After starting the server you can, for example, send a request to 
```
http://localhost:3000
```

like so, using Python:
```
>>> import requests
>>> data = {'expr1': '[2,3,4]', 'expr2': '[3,4,5]'}
>>> url = 'http://localhost:3000/add/'
>>> re = requests.post(url, data=data)
>>> re.json()
{exp: [5,7,9]}
```

Matrix and Vector endpoints:

```
- add/
- sub/
- mul/
```
Matrix endpoints:
```
- expm/
- powerm/
- logm/
- determinant/
- transpose/
```
Vector endpoints:

```
- expv/
- powerv/
- logv/
```


### How to run the tests
```
* npm run test
```

## Supported linear algebra

### basic operations on vectors and matrices

- Element-wise add

- Element-wise substract

- Element-wise multiply

- Element-wise exponentiation

- Element-wise exponential

- Element-wise natural logarithm

### Linear algebra

#### vectors

- vector * scalar

- dot product

- magnitude

- isUnitVector

#### Matrices

- transpose

- matrix * scalar

- Square matrix * Square matrix

- determinant of 3x3 (square) matrices

