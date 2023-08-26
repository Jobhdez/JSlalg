let Mat = require('../src/matrix.js')

function computeAlgExp(res, method, lalgExp2, lalgExp, exp1) {

    if (Array.isArray(lalgExp2[0])) {
	if (lalgExp === exp1) {
	    let result = method
	    res.json({expr: result})
	}
    }
}

function makeMatrix(req, res) {
    const exp = req.body.expr1
    const exp2 = req.body.expr2

    let cleanExp =  exp.replace(/'/g, '"');
    let stringExp = JSON.stringify(cleanExp)
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(stringExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    let mat = new Mat.Matrix(lalgExp2)

    return [mat, lalgExp, lalgExp2]
}


module.exports = {computeAlgExp, makeMatrix}
