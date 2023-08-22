/*

  [[a b c] [d e f] [g h i]]

  cofactor of a:
       [[e f] [h i]]
          determinant of this cofactor
          a(e*i-f*h)

	  cofactor of b
	  [[d f][g h]]

	  cofactor of c
	  [[d e] [g h]]

	  so as you loop just pop out i

	  Example:
	  > let m1 = [[6,1,1], [4,-2, 5], [2,8,7]]
	  > determinant(m1)
	  -306
*/

function determinant(matrix) {
    let sum = 0;
    function twodDeterminant(matrix) {
	if (matrix.length === 2) {
	    let el1 = matrix[0][0] * matrix[1][1];
	    let el2 = matrix[0][1] * matrix[1][0]
	    return el1 - el2;
	}
    }

    
    let e1 = matrix[0][0] * twodDeterminant(removeColumn(matrix, 0))
    let e2 = matrix[0][1] * twodDeterminant(removeColumn(matrix, 1))
    let e3 = matrix[0][2] * twodDeterminant(removeColumn(matrix, 2))

    return e1 - e2 + e3
}


function removeColumn(matrix, column) {
    let ma2 = matrix.filter((_, i) => i != 0);

    return ma2.map((i) => i.filter((_, j) => j != column));
}

module.exports = {determinant, removeColumn}
