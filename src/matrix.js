/*

  This module consists of the Matrix class and this class is made up of basic matrix operations
  and some linear algebra.

  Example Usage:

  > let mat = require('./matrix.j')
  > let m1 = new mat.Matrix([[3,45,6,6], [4,4,5,6]])
  > m1.add(m1)
  Matrix([[6, 90, 12, 12], [8,8,10,12]])


 */



class Matrix {
/* Matrix class consisting of basic matrix operations such as:
    - matrix + matrix
    - matrix - matrix
    - matrix * scalar
    - matrix * matrix
    - tranpose
    - log
    - exp
    - pow
    - determinant of 3x3 matrices
    - upper triangular
    - lower triangular
    - trace
    */
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
		/* Square Matrix * Square Matrix
		
		
		*/
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

	/*

	  the determinant of a 3x3 matrix consits of taking the first row and for each
	  element i of the first row you first need to remove the column of i. You also need to
	  take the rest of the elements in the same row as i. Then you take the 2 Dimensional determinant
	  of the left over rows.
          Example:
	  
              > let m1 = [[6,1,1], [4,-2, 5], [2,8,7]]
              > let m3 = new m.Matrix(m1)
	      > m3.determinant()
	      -306
	 */
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

    trace() {
	let sumOfDiagonals = 0;
	for (let i in this.matrix) {
	    sumOfDiagonals += this.matrix[i][i]
	}
	return sumOfDiagonals
    }

    upperTriangular() {
	return new Matrix(this.matrix.map((row, i) => { return insertZeros(i, row)}))
    }

    lowerTriangular() {
	let zeros = this.matrix.length - 1
	let lowerMatrix = []
	for (let i in this.matrix) {
	    let row = lowerInsertZeros(zeros, this.matrix[i])
	    lowerMatrix[i] = row
	    zeros -= 1
	}
	return new Matrix(lowerMatrix)
    }

    maximum(other) {
	let maxMatrix = []
	for (let i in this.matrix) {
	    maxMatrix[i] = []
	}
	for (let i in this.matrix) {
	    for (let j in this.matrix[i]) {
		if (this.matrix[i][j] < other.matrix[i][j]) {
		    maxMatrix[i][j] = other.matrix[i][j]
		}
		else {
		    maxMatrix[i][j] =  this.matrix[i][j]
		}
	    }
	}
	return new Matrix(maxMatrix)
    }

    minumum(other) {
	let minMatrix = []
	for (let i in this.matrix) {
	    minMatrix[i] = []
	}
	for (let i in this.matrix) {
	    for (let j in this.matrix[i]) {
		if (this.matrix[i][j] > other.matrix[i][j]) {
		    minMatrix[i][j] = other.matrix[i][j]
		}
		else {
		    minMatrix[i][j] =  this.matrix[i][j]
		}
	    }
	}
	return new Matrix(minMatrix)
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
    /*
    Example:
    > removeColumn([[4,5,6],[6,7,8]], 0)
    [[5,6],[7,8]]
    
    */
    let ma2 = matrix.filter((_, i) => i != 0);

    return ma2.map((i) => i.filter((_, j) => j != column));
}

function insertZeros(numberOfZeros, row) {
    if (numberOfZeros === 0) {
	return row;
    }
    else {
	for (let i = 0; i < numberOfZeros; i++) {
	    row[i] = 0;
	    
	}
	return row;
    }
}

function lowerInsertZeros(numberOfZeros, row) {
    if (numberOfZeros === 0) {
	return row;
    }
    else {
	let j = row.length - numberOfZeros
	for (let i = j; i < row.length; i++) {
	    row[i] = 0;
	}
	return row;
    }
}
	
	    
module.exports = {Matrix}

