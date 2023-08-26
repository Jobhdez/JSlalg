const Mat = require('../src/matrix')
const Vec = require('../src/vector')
const express = require('express')
const bodyParser = require('body-parser');
const hop = require('./utils')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post('/add', (req, res) => {
    const exp = req.body.expr1
    const exp2 = req.body.expr2


    const cleanExp = exp.replace(/'/g, '"');
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(cleanExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (Number.isInteger(lalgExp[0])) {
        let vec1 =  new Vec.Vector(lalgExp)
        let vec2 = new Vec.Vector(lalgExp2)
        let resultVec = vec1.add(vec2)
        res.json({expr: resultVec.vector})
    } else {
        let matrix = new Mat.Matrix(lalgExp)
        let matrix2 = new Mat.Matrix(lalgExp2)
        let resultMatrix = matrix.add(matrix2)

        res.json({expr: resultMatrix.matrix})
    }
})

app.post('/sub', (req, res) => {
    const exp = req.body.expr1
    const exp2 = req.body.expr2


    const cleanExp = exp.replace(/'/g, '"');
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(cleanExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (Number.isInteger(lalgExp[0])) {
        let vec1 =  new Vec.Vector(lalgExp)
        let vec2 = new Vec.Vector(lalgExp2)
        let resultVec= vec1.sub(vec2)
        res.json({expr: resultVec.vector})
    } else {
        let matrix = new Mat.Matrix(lalgExp)
        let matrix2 = new Mat.Matrix(lalgExp2)
        let resultMatrix = matrix.sub(matrix2)

        res.json({expr: resultMatrix.matrix})
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

app.post('/power', (req, res) => {

    const exp = req.body.expr1
    const exp2 = req.body.expr2
    const exp3 = req.body.expr3


    let cleanExp = exp.replace(/'/g, '"');
    let stringExp = JSON.stringify(cleanExp)
    const cleanExp2 = exp2.replace(/'/g, '"');
    const cleanExp3 = exp3.replace(/'/g, '"');
    let lalgExp = JSON.parse(stringExp);
    let lalgExp2 = JSON.parse(cleanExp2);
    let lalgExp3 = JSON.parse(cleanExp3)

    if (Number.isInteger(lalgExp2[0])) {
        let vec = new Vec.Vector(lalgExp2)
        if (lalgExp === 'power') {
            let resultVec = vec.power(lalgExp3)
            res.json(resultVec.vector)
        }
    }
    else {
        let mat = new Mat.Matrix(lalgExp2)
        if (lalgExp === 'power') {
            let resultMat = mat.power(lalgExp3)
            res.json(resultMat.matrix)
        }
    }


})

app.post('/exp', (req, res) => {

    const exp = req.body.expr1
    const exp2 = req.body.expr2


    let cleanExp = exp.replace(/'/g, '"');
    let stringExp = JSON.stringify(cleanExp)
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(stringExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (Number.isInteger(lalgExp2[0])) {
        let vec = new Vec.Vector(lalgExp2)
        if (lalgExp === 'exponentiation') {
            let resultVec = vec.exp()
            res.json(resultVec.vector)
        }
    }
    else {
        let mat = new Mat.Matrix(lalgExp2)
        if (lalgExp === 'exponentiation') {
            let resultMat = mat.exp()
            res.json(resultMat.matrix)
        }
    }


})

app.post('/log', (req, res) => {

    const exp = req.body.expr1
    const exp2 = req.body.expr2


    let cleanExp = exp.replace(/'/g, '"');
    let stringExp = JSON.stringify(cleanExp)
    const cleanExp2 = exp2.replace(/'/g, '"');
    let lalgExp = JSON.parse(stringExp);
    let lalgExp2 = JSON.parse(cleanExp2);

    if (Number.isInteger(lalgExp2[0])) {
        let vec = new Vec.Vector(lalgExp2)
        if (lalgExp === 'log') {
            let resultVec = vec.log()
            res.json(resultVec.vector)
        }
    }
    else {
        let mat = new Mat.Matrix(lalgExp2)
        if (lalgExp === 'log') {
            let resultMat = mat.log()
            res.json({expr: resultMat.matrix})
        }
    }


})

app.post('/det', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeMatrix(req)
    hop.computeAlgExp(res, mat.determinant(), lalgExp2, lalgExp, 'det')
})

app.post('/transpose', (req, res) => {

    let [mat, lalgExp, lalgExp2] = hop.makeMatrix(req)
    hop.computeAlgExp(res, mat.transpose(), lalgExp2, lalgExp, 'transpose')
})



const server = app.listen(3000, () => 
    console.log(`
    Server ready at: http://localhost:3000`),
)

