const Mat = require('../src/matrix')
const Vec = require('../src/vector')
const express = require('express')
const bodyParser = require('body-parser');
const hop = require('./utils')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post('/add', (req, res) => {
    const [e1, e2] = hop.makeArithObj(req)
    if (Number.isInteger(e1[0])){
	hop.computeExp(e1, e2, new Vec.Vector(), new Vec.Vector(), '+')
    }
    else {
	hop.computeExp(e1, e2, new Mat.Matrix(), new Mat.Matrix(), '+')
    }
})

app.post('/sub', (req, res) => {
    const [e1, e2] = hop.makeArithObj(req)
    if (Number.isInteger(e1[0])){
	hop.computeExp(e1, e2, new Vec.Vector(), new Vec.Vector(), '-')
    }
    else {
	hop.computeExp(e1, e2, new Mat.Matrix(), new Mat.Matrix(), '-')
    }
})

app.post('/mul', (req, res) => {
    const exp = req.body.expr1
    const exp2 = req.body.expr2


    const cleanExp = exp.replace(/'/g, '"');
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(cleanExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (Number.isInteger(lalgExp[0]) && !Number.isInteger(lalgExp2)) {
        let vec1 =  new Vec.Vector(lalgExp)
        let vec2 = new Vec.Vector(lalgExp2)
        let resultVec = vec1.dotP(vec2)
        res.json({expr: resultVec.vector})

    } else if (Number.isInteger(lalgExp[0]) && Number.isInteger(lalgExp2)) {

        let vec1 = new Vec.Vector(lalgExp)
        let resultVec = vec1.mulByScalar(lalgExp2)
        res.json({expr: resultVec.vector})

    } else if (Number.isInteger(lalgExp) && Number.isInteger(lalgExp2[0])) {
        let vec1 = new Vec.Vector(lalgExp2)
        let resultVec = vec1.mulByScalar(lalgExp)
        res.json({expr: resultVec.vector})

    } else if (Array.isArray(lalgExp[0]) && Array.isArray(lalgExp2[0])) {
        let mat1 = new Mat.Matrix(lalgExp)
        let mat2 = new Mat.Matrix(lalgExp2)
        let resultMat = mat1.mulSqMat(mat2)
        res.json({expr: resultMat.matrix})

    } else if (Array.isArray(lalgExp[0]) && Number.isInteger(lalgExp2)) {

        let mat = new Mat.Matrix(lalgExp);
        let resultMat = mat.mulByScalar(lalgExp2)
        res.json({expr: resultMat.matrix})
        
    } else {
        let matrix = new Mat.Matrix(lalgExp2)
        let resultMatrix = matrix.mulByScalar(lalgExp)

        res.json({expr: resultMatrix.matrix})
    }
})

/*

  Basic operations of Matrices
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~

 */
app.post('/powerm', (req, res) => {

    const exp3 = req.body.expr3
    const cleanExp3 = exp3.replace(/'/g, '"');
    let lalgExp3 = JSON.parse(cleanExp3)

    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.power(lalgExp3), lalgExp, 'power')


})

app.post('/logm', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.log(), lalgExp, 'log')
})

app.post('/expm', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.exp(), lalgExp, 'exponentation')

})

app.post('/det', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.determinant(), lalgExp, 'det')
})

app.post('/transpose', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.transpose(), lalgExp, 'transpose')
})

app.post('/trace', (req, res) => {
    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.trace(), lalgExp, lalgExp2)
})

app.post('/upperTriangular', (req, res) => {
    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.upperTriangular(), lalgExp, lalgExp2)
})

app.post('/lowerTriangular', (req, res) => {
    let [mat, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Mat.Matrix())
    hop.computeAlgExp(res, mat.lowerTriangular(), lalgExp, lalgExp2)
})

/*

  Basic linear algebra on vectors
  ~~~~~~~~~~~~~~~~~~~~~~~~~
  */

app.post('/powerv', (req, res) => {

    const exp3 = req.body.expr3
    const cleanExp3 = exp3.replace(/'/g, '"');
    let lalgExp3 = JSON.parse(cleanExp3)

    let [vec, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Vec.Vector())
    hop.computeAlgExp(res, vec.power(lalgExp3), lalgExp, 'power')


})

app.post('/logv', (req, res) => {

    let [vec, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Vec.Vector())
    hop.computeAlgExp(res, vec.log(), lalgExp, 'log')
})

app.post('/expv', (req, res) => {

    let [vec, lalgExp, lalgExp2] = hop.makeAlgObj(req, new Vec.Vector())
    hop.computeAlgExp(res, vec.exp(), lalgExp, 'exponentiation')

})

const server = app.listen(3000, () => 
    console.log(`
    Server ready at: http://localhost:3000`),
)

