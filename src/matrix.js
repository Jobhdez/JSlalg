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
