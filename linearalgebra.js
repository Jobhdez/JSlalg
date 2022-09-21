// author: Job Hernandez <hj93@protonmail.com>
/*
  This is just a small implementation of some basic linear algebra :-)

  Mainly to practice my JS skills, nothing serious.

  
*/


class Vector {
    constructor(vector) {
	this.vector = vector
    }
    add(other) {
	/*
        Takes the sum of two vectors.

        @param other: vector
        @param this.vector: vector
        @returns: vector
        */
	if (other instanceof Vector) {
	    let v = [];
	    for (let element = 0; element < other.vector.length; element++) {
		v[element] = other.vector[element] + this.vector[element];
	    }
	    return new Vector(v)
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
    }
    mulByScalar(scalar) {
	/*
        Takes the product of one vector by a scalar.

        @param other: vector
        @param scalar: scalar
        @returns: a vector
        */
	if (scalar instanceof Integer) {
	    let v = [];
	    for (const i in this.vector) {

		v[i] = this.vector[i] * scalar;

	    }

	    return new Vector(v);

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
    
    }
}

class Matrix {
    constructor(matrix) {
	this.matrix = matrix;
    }

    add(other) {
	/*
        Adds two matrices.
    
        @param other: a matrix
        @param initialized matrix
        @returns: matrix
        */
	let mtx = this.matrix.map((n, i) =>{return n.map((k,j) => {return k + other.matrix[i,j]})});
	return new Matrix(mtx);
    }
    sub(other) {
	/*

        Subtracts two matrices.
        @param other: Matrix
        @param initialized matrix
        @returns: matrix
        */
	let mtx = this.matrix.map((n, i) => {return n.map((k,j) => {return k + other.matrix[i][j]})});

	return new Matrix(mtx);
    }
    mulByScalar(scalar) {
	/* 
        multiplies a matrix by a scalar.

        @param scalar: scalar
        @param initialized matrix

        @returns: matrix


       */
	let mtx = this.matrix.map((n) => { return n.map((k) => { return k * scalar; })});

	return new Matrix(mtx);
    }
}
		
    
    

    

module.exports = { Vector, Matrix }
