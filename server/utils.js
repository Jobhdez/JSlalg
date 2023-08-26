let Mat = require('../src/matrix.js')

function computeAlgExp(res, method, lalgExp2, lalgExp, exp1) {
    /*
    higher order function that computes a given linear algebra expression based on the method.
    Example:
      @param method: Mat.Matrix([[3,4,5],[5,6,7],[6,7,8]].transpose()
      @returns: json response consisting of the transpse of the above matrix.

      Note: it can also consume a Vec.Vector() object/method.
    */
    if (lalgExp === exp1) {
	let result = method
	res.json({expr: result})
	}
    }

function makeAlgObj(req, method) {
    const exp = req.body.expr1
    const exp2 = req.body.expr2

    let cleanExp =  exp.replace(/'/g, '"');
    let stringExp = JSON.stringify(cleanExp)
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(stringExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (method instanceof Mat.Matrix) {
	method.matrix = lalgExp2

	return [method, lalgExp, lalgExp2]
    }
    else {
	method.vector = lalgExp2
	return [method, lalgExp, lalgExp2]
    }
}


module.exports = {computeAlgExp, makeAlgObj}
