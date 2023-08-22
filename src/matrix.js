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
    mulSqMat(other) {
	let resultMatrix = []
	for (let i = 0; i < this.matrix.length; i++) {
	    resultMatrix[i] = []
	}
	for (let i = 0; i < this.matrix.length; i++) {
	    for (let j = 0; j < this.matrix.length; j++) {
		resultMatrix[i][j] = 0;
		for (let k = 0; k < this.matrix.length; k++) {
		    resultMatrix[i][j] +=  this.matrix[i][k] * other.matrix[k][j];
		}
	    }
	}
	return new Matrix(resultMatrix);

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

    power(other) {
	return new Matrix(this.matrix.map((row) => {
	    return row.map((column) => {
		return Math.pow(column, other)})}))
    }

    exp() {
	return new Matrix(this.matrix.map((row) => {
	    return row.map((column) => {
		return Math.exp(column)
	    })}))
    }

    log() {
	return new Matrix(this.matrix.map((row) => {
	    return row.map((column) => {
		return Math.log(column)
	    })}))
    }

    determinant() {
	let sum = 0;
	function twodDeterminant(matrix) {
	if (matrix.length === 2) {
	    let el1 = matrix[0][0] * matrix[1][1];
	    let el2 = matrix[0][1] * matrix[1][0]
	    return el1 - el2;
	}
    }


	let e1 = this.matrix[0][0] * twodDeterminant(removeColumn(this.matrix, 0))
        let e2 = this.matrix[0][1] * twodDeterminant(removeColumn(this.matrix, 1))
        let e3 = this.matrix[0][2] * twodDeterminant(removeColumn(this.matrix, 2))

	return e1 - e2 + e3
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

function removeColumn(matrix, column) {
    let ma2 = matrix.filter((_, i) => i != 0);

    return ma2.map((i) => i.filter((_, j) => j != column));
}
module.exports = {Matrix}
