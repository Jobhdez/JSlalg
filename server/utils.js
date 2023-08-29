let Mat = require('../src/matrix.js')

function computeAlgExp(res, method, lalgExp, exp1) {
    /*
      computes a given linear algebra expression based on the method.

      Assumes a Vector or Matrix method
    Example:
      @param method: Mat.Matrix([[3,4,5],[5,6,7],[6,7,8]].transpose()
      @returns: json response consisting of the transpose of the above matrix.

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

function makeArithObj(req, res, method, method2, op) {
    const exp = req.body.expr1
    const exp2 = req.body.expr2


    const cleanExp = exp.replace(/'/g, '"');
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(cleanExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    return [lalgExp, lalgExp2]
}

function computeExp(e1, e2, obj, obj2, op) {
     if (op === '+') {
	if (method instanceof Mat.Matrix) {
	    let compute = new Compute(method.matrix, method2.matrix, lalgExp, lalgExp2).add()
	    res.json({expr: compute.matrix})
	}
	else {
	    let result = new Compute(method.vector, method2.vector, lalgExp, lalgExp2).add()
	    res.json({expr: result.vector})
	}
    }
    else {
	if (method instanceof Mat.Matrix) {
	    let result = new Compute(method.matrix, method2.matrix2, lalgExp, lalgExp2).sub()
	    res.json({expr: result.matrix})
	}
	else {
	    let result = new Compute(method.vector, method2.vector, lalgExp, lalgExp2).sub()
	    res.json({expr: result.vector})
	}
    }
}

class Compute {
    constructor(lalgObj, lalgObj2, exp, exp2) {
	this.lalgObj = lalgObj
	this.lalgObj2 = lalgObj2
	this.exp = exp
	this.exp2 = exp
    }
    add() {
	this.lalgObj = this.exp
	this.lalgObj2 = this.exp2
	return this.lalgObj.add(lalgObj2)
    }
    sub() {
	this.lalgObj = this.exp
	this.lalgObj = this.exp2
	return this.lalgObj.sub(lalgObj2)
    }
}

module.exports = {computeAlgExp, makeAlgObj}
