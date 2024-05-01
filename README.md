# basic vector and matrix algebra

I wrote some basic vector and matrix math.

I also built a little API in express.

## Dependencies

1. Clone this repo and `npm install`
```
* git clone git@github.com:Jobhdez/JSlalg.git`
* cd JSlalg
* npm install
```
2. Install Node:
- MacOS:
```
* brew install node
```
- Ubuntu:
```
* sudo apt install nodejs
```
- Arch Linux:
```
* pacman -S nodejs
```

## Usage

1. Navigate to the src code directory:
```
* cd ~/JSlalg/src
```

2. Start Node by typing `node` in your terminal.
```
* node
const { addv, addm} = await import("./lib.js")
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

- Element wise maximum

- Elemenet wise minumum

### vectors

- vector * scalar

- dot product

### Matrices

- transpose

- matrix * scalar

- matrix * matrix

## WEB API

### Usage

```
* node api.js
```

In a different terminal:

```python
>>> import requests 
>>> url = "http://localhost:3000/api/vectors/add"
>>> data = {'exp': '[1,2,3]', 'exp2': '[1,2,3]'}
>>> re = requests.post(url, data=data)
>>> re.json()
{'expr': [2, 4, 6]}
>>> data = {'exp': '[1,2,3]', 'exp2': '2'}
>>> url = "http://localhost:3000/api/vectors/vecs"
>>> re = requests.post(url, data=data)
>>> re.json()
{'expr': [None, None, None]}
>>> url = "http://localhost:3000/api/vectors/dotp"
>>> data = {'exp': '[1,2,3]', 'exp2': '[3,1,2]'}
>>> re = requests.post(url, data=data)
>>> re.json()
{'expr': 14}
>>> url = "http://localhost:3000/api/vectors/log"
>>> data = {'exp': '[1,2,3]'}
>>> re = requests.post(url, data=data)
>>> re.json()
{'expr': [0, 0.6931471805599453, 1.0986122886681096]}
>>> 
```
