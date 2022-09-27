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
	if (other instanceof Matrix) {
	    
	    let mtx = this.matrix.map((n, i) =>{ return n.map((k,j) => { return k + other.matrix[i][j]})})
	    
            return new Matrix(mtx);
	}
	else {
	    throw 'Expected a Matrix';
	}
    }
    sub(other) {
	/*

        Subtracts two matrices.
        @param other: Matrix
        @param initialized matrix
        @returns: matrix
        */

	if (other instanceof Matrix) {
	    
	    let mtx = this.matrix.map((n, i) => {return n.map((k,j) => {return k - other.matrix[i][j]})});

	    return new Matrix(mtx);
	}
	else {
	    throw 'Expected a Matrix.';
	}
    }
    mulByScalar(scalar) {
	/* 
        multiplies a matrix by a scalar.

        @param scalar: scalar
        @param initialized matrix

        @returns: matrix


	*/
	if (Number.isInteger(scalar)) {
	    
	    let mtx = this.matrix.map((n) => { return n.map((k) => { return k * scalar; })});

	    return new Matrix(mtx);
	}
	else {
	    throw 'Expected an Integer.';
	}
    }
    transpose() {
	return new Matrix(this.matrix[0].map((n,i)=> { return getFirsts(this.matrix, i)}))
    }
}

function getFirsts(matrix, index) {
    /* Gets the ith index of each row in the matrix.

       example: getFirsts([[3,4,5],[6,7,8]], 0) -> [3,6]
    */
    let firsts = []
    for (let i in matrix) {
	firsts[i] = matrix[i][index]
    }
    return firsts
}

module.exports = {Matrix}
