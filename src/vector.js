/*
  This module consists of the Vector class made up of basic element wise operations and some basic 
  linear algebra.  
*/

const M = require('./matrix')

class Vector {
    constructor(vector) {
	this.vector = vector
    }
    add(other) {
	/*
        Takes the sum of two vectors.

        @param other: vector
        @param this.vector: vector
        @returns: vectorx
        */
	if (other instanceof Vector) {
	    let v = [];
	    for (let element = 0; element < other.vector.length; element++) {
		v[element] = other.vector[element] + this.vector[element];
	    }
	    return new Vector(v)
	}
	else {
	    throw 'Expected a Vector';
	}
    }
    sub(other) {
	/*
        Takes the subtraction of two vectors.

        @param other: vector
        @param this.vector: vector
        @returns: vector
        */
	if (other instanceof Vector) {
	    let v = [];
	    for (let element = 0; element < other.vector.length; element++) {
		v[element] = this.vector[element] - other.vector[element];
	    }
	    return new Vector(v);
	}
	else {
	    throw 'Expected a Vector';
	}
    }
    mulByScalar(scalar) {
	/*
        Takes the product of one vector by a scalar.

        @param other: vector
        @param scalar: scalar
        @returns: a vector
        */
	if (Number.isInteger(scalar)) {
	    let v = [];
	    for (const i in this.vector) {

		v[i] = this.vector[i] * scalar;

	    }

	    return new Vector(v);

	}
	else {
	    throw 'Expected an Integer';
	}
	

    }
    dotP(other) {
	/*
        Takes the dot product of two vectors.

        @param other: vector
        @param this.vector: vector
        @returns: an integer representing the dot product
        */
	if (other instanceof Vector) {

	    let v = [];
	    for (const i in this.vector) {
		v[i] = this.vector[i] * other.vector[i];
	    }
	    let sum = 0;
	    for (const i in v) {
		sum += v[i];
	    }

	    return sum;
	    

	}
	else {
	    throw 'Expected a Vector.';
	}
    
    }
    magnitude() {
	let initial = 0;
	let squares = this.vector.map((n) => { return n*n })
	let sum = squares.reduce((prev, curr) => prev + curr, initial)

	return Math.sqrt(sum)
    }

    isUnitVector() {
	return this.magnitude() === 1
    }

    power(other) {
	if (Number.isInteger(other)) {
	    let vec = this.vector.map((n) => { return Math.pow(n, other) })
	    return new Vector(vec)
	}

	else {
	    let resultMatrix = []
	    for (let i = 0; i < other.vector.length; i++) {
		resultMatrix[i] = [];
	    }
	    
	    for (let i = 0; i < other.vector.length; i++) {
		for (let j = 0; j < this.vector.length; j++) {
		    resultMatrix[i][j] = Math.pow(this.vector[j], other.vector[i]);
		}
	    }
	    return new M.Matrix(resultMatrix);
	}
    }
    exp() {
	return new Vector(this.vector.map((n) => {
	    return Math.exp(n)
	}))
    }

    log() {
	return new Vector(this.vector.map((n) => {
	    return Math.log(n)
	}))
    }
		    
}

    

module.exports = {Vector}
