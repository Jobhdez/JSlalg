const Mat = require('../src/matrix')
const Vec = require('../Vector')
const express = require('express')
const bodyParser = require('body-parser');

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
        let resultVec= vec1.add(vec2)
        res.json({expr: resultVec.matrix})
    } else {
        let matrix = new Mat.Matrix(lalgExp)
        let matrix2 = new Mat.Matrix(lalgExp2)
        let resultMatrix = matrix.add(matrix2)

        res.json({expr: resultMatrix.matrix})
    }
})


const server = app.listen(3000, () => 
    console.log(`
    Server ready at: http://localhost:3000`),
)
