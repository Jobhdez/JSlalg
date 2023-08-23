const Mat = require('../src/matrix')
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post('/add-mat', (req, res) => {
    const exp = req.body.expr1
    const exp2 = req.body.expr2


    const modifiedExp = exp.replace(/'/g, '"');
    const modifiedExp2 = exp2.replace(/'/g, '"');
    let matrix = JSON.parse(modifiedExp);
    let matrix2 = JSON.parse(modifiedExp2);
    console.log(matrix)
    ///let matrix2 = JSON.parse(exp2);

    let matObj = new Mat.Matrix(matrix)
    let matObj2 = new Mat.Matrix(matrix2)

    let addition = matObj.add(matObj2)

    let mat = addition.matrix;

    res.json({expr: mat})
})


const server = app.listen(3000, () => 
    console.log(`
    Server ready at: http://localhost:3000`),
)
