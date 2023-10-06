const mocha = require('mocha');
const chai = require('chai');

const lVec = require('../src/vector');
const lMat = require('../src/matrix');
const matrixVec = require('../src/matrixVector');
const nn = require('../src/nn')
const p = require('../src/poly');

const expect = chai.expect;

describe('vector tests', function () {

    it('test vector sum', () => {
        let v = new lVec.Vector([3,4,5,6]);
        expect(v.add(v)).to.eql(new lVec.Vector([6,8,10,12]))
    })

    it('test vector subtraction', () => {
        let v2 = new lVec.Vector([3,4,5,6]);
        expect(v2.sub(v2)).to.eql(new lVec.Vector([0,0,0,0]))
    })

    it('test vector-scalar multiplication', () => {
        let v3 = new lVec.Vector([3,4,5,6]);
        expect(v3.mulByScalar(2)).to.eql(new lVec.Vector([6,8,10,12])); 
    })

    it('test dot product', () => {
        let v4 = new lVec.Vector([-6, 8])
        let v5 = new lVec.Vector([5,12])
        expect(v4.dotP(v5)).to.eql(66)
    })

    it('test magnitude', () => {
	let vec = new lVec.Vector([6,8])
	expect(vec.magnitude()).to.eql(10)
    })

    it('test unit vector (false)', () => {
	let vec2 = new lVec.Vector([6,8])
	expect(vec2.isUnitVector()).to.eql(false)
    })

    it('test unit vector (true)', () => {
	let vec3 = new lVec.Vector([1,0,0])
	expect(vec3.isUnitVector()).to.eql(true)
    })

    it('test element wise power, scalar', () => {
	let v4 = new lVec.Vector([2, 3, 4]);
	let scalar = 2;
	expect(v4.power(scalar)).to.eql(new lVec.Vector([4, 9, 16]));
    })

    it('test element wise power, vector', () => {
	let v5 = new lVec.Vector([2, 3]);
	let v6 = new lVec.Vector([1,2,3]);
	expect(v5.power(v6)).to.eql(new lMat.Matrix([[2, 3], [4, 9], [8, 27]]));
    })

    it('test exponential of vector', () => {
	let v7 = new lVec.Vector([3, 4, 5]);
	expect(v7.exp()).to.eql(new lVec.Vector([20.085536923187668, 54.598150033144236, 148.4131591025766]))

    })

     it('test natural logarithm of vector', () => {
	let v8 = new lVec.Vector([3, 4, 6]);
	 expect(v8.log()).to.eql(new lVec.Vector([1.0986122886681096, 1.3862943611198906, 1.791759469228055]))
     })

    it('test element wise vector maximum', () => {
	let v = new lVec.Vector([3,2,1])
	let v2 = new lVec.Vector([4,1,3])
	expect(v.maximum(v2)).to.eql(new lVec.Vector([4,2,3]))
    })

    it('test element wise vector minimum', () => {
	let v = new lVec.Vector([3,2,1])
	let v2 = new lVec.Vector([4,1,3])
	expect(v.minimum(v2)).to.eql(new lVec.Vector([3,1,1]))
    })
	       
})

describe('matrix tests', function () {
	       
				  
    it('test matrix addition', () => {
        let m1 = new lMat.Matrix([[2,3,4], [5,6,7]])
        let m2 = new lMat.Matrix([[3,4,5], [5,6,7]])
        expect(m1.add(m2)).to.eql(new lMat.Matrix([[5,7,9], [10,12,14]]))

    })

    it('test matrix-scalar multiplication', () => {
        let m3 = new lMat.Matrix([[2,3,5], [5,6,7]]);
        expect (m3.mulByScalar(2)).to.eql(new lMat.Matrix([[4,6,10], [10,12,14]]))
    })

    it('test matrix transpose', () => {
        let m4 = new lMat.Matrix([[2,3,4], [5,6,7]])
	expect(m4.transpose()).to.eql(new lMat.Matrix([[2,5], [3,6], [4,7]]))
    })

    it('test square matrix-matrix multiplication', () => {
	let m5 = new lMat.Matrix([[3,4], [4,5]]);
	expect(m5.mulSqMat(m5)).to.eql(new lMat.Matrix([[25,32],[32,41]]));
    })

    it('test element wise matrix power', () => {
        let m6 = new lMat.Matrix([[2,3,5], [5,6,7]]);
        expect (m6.power(2)).to.eql(new lMat.Matrix([[4, 9, 25], [25,36,49]]))
    })

     it('test element wise exp  matrix', () => {
         let m7 = new lMat.Matrix([[4,5,6], [6,7,8]]);
         expect(m7.exp()).to.eql(new lMat.Matrix( [
    [ 54.598150033144236, 148.4131591025766, 403.4287934927351 ],
    [ 403.4287934927351, 1096.6331584284585, 2980.9579870417283 ]
	 ]))
     })

    it('test element wise log  matrix', () => {
        let m8 = new lMat.Matrix([[4,5,6], [6,6,7]]);
         expect(m8.log()).to.eql(new lMat.Matrix( [
    [ 1.3862943611198906, 1.6094379124341003, 1.791759469228055 ],
    [ 1.791759469228055, 1.791759469228055, 1.9459101490553132 ]
	 ]))
    })

    it('test determinant of a 3x3 matrix', () => {
	let m9 =  new lMat.Matrix([[6,1,1], [4,-2, 5], [2,8,7]])
	expect(m9.determinant()).to.eql(-306)
    })

    it('test trace of a square matrix', () => {
	let m10 = new lMat.Matrix([[2,1,5],[2,3,4],[0,1,0]])
	expect(m10.trace()).to.eql(5)
    })

    it('test upper triangular of a square matrix', () => {
	let ma11 = new lMat.Matrix([[1,2,3,4],[5,6,7,8], [9,10,11,12],[13,14,15,16]])
	expect(ma11.upperTriangular()).to.eql(new lMat.Matrix([ [ 1, 2, 3, 4 ], [ 0, 6, 7, 8 ], [ 0, 0, 11, 12 ], [ 0, 0, 0, 16 ] ]))
    })

    it('test lower triangular of a square matrix', () => {
	let m12 = new lMat.Matrix([[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]])
	expect(m12.lowerTriangular()).to.eql(new lMat.Matrix( [[ 1, 0, 0, 0 ],[ 5, 6, 0, 0 ], [ 9, 10, 11, 0 ],[ 13, 14, 15, 16]]))
    })
    
    it('test element wise matrix maximum', () => {
	let m = new lMat.Matrix([[3,2,2,3],[4,3,4,5]])
	let m2 = new lMat.Matrix([[2,3,3,2],[3,2,5,3]])
	expect(m.maximum(m2)).to.eql(new lMat.Matrix([[3,3,3,3],[4,3,5,5]]))
    })

    it('test element wise matrix minmum', () => {
	let m = new lMat.Matrix([[3,2,2,3],[4,3,4,5]])
	let m2 = new lMat.Matrix([[2,3,3,2],[3,2,5,3]])
	expect(m.minimum(m2)).to.eql(new lMat.Matrix([[2,2,2,2],[3,2,4,3]]))
    })
    
})

describe('Matrix-Vec tests', function () {
   

    it('test matrix-vec multiplication', () => {
	let mv = new matrixVec.MatrixVector([[1,2,3],[4,5,6]], [1,2,3]);
	expect(mv.matrixVecMul()).to.eql([18,45])
    })

    it("test matrix-vec addition", () => {
	let mv2 = new matrixVec.MatrixVector([[4,5,6,7],[7,8,9,8]], [1,2,3,5])
	expect(mv2.addVectorMat()).to.eql([[5,7,9,12], [8,10,12,13]])
    })

    it("test matrix-vec subtraction", () => {
	let mv2 = new matrixVec.MatrixVector([[4,5,6,7],[7,8,9,8]], [1,2,3,5])
	expect(mv2.subVectorMat()).to.eql([[3,3,3,2], [6,6,6,3]])
    })

	
})

describe('Polynomial tests', function () {
	
    it('test polynomial degree', () => {
        let poly = new p.Polynomial([2,3,5,1])
        expect(poly.degree()).to.eql(3)
    })

    it('test polynomial addition', () => {
        let poly2 = new p.Polynomial([2,3,5,1])
        let poly3 = new p.Polynomial([6,7,8,9])
        expect(poly2.add(poly3)).to.eql(new p.Polynomial([8, 10, 13, 10]))
    })

    it('test polynomial subtraction', () => {
        let poly4 = new p.Polynomial([6,7,8,9])
        let poly5 = new p.Polynomial([2,3,5,1])
        expect(poly4.sub(poly5)).to.eql(new p.Polynomial([4, 4, 3, 8]))


    })

    it('test polynomial diff', () => {
        let poly6 = new p.Polynomial([2,3,5,1])
        expect(poly6.diff()).to.eql(new p.Polynomial([6, 6, 5]))
    })

    it('test polynomial evaluation', () => {
        let poly7 = new p.Polynomial([2,3,5,1])
        expect(poly7.evalPoly(2)).to.eql(39)
    })
})

describe('Neural Networks operator tests', function () {
	
    it('test softmax', () => {
        let nw = new nn.NeuralNet1D([-1,0,3,5])
        expect(nw.softmax()).to.eql(new lVec.Vector([0.002165696460061088, 0.005886973333342136, 0.11824302025266466, 0.8737043099539322]))
    })

    it('test log softmax', () => {
        let nw = new nn.NeuralNet1D([0.3452, -0.0267, 0.4066])
        expect(nw.logSoftmax()).to.eql(new lVec.Vector([-1.0125994457742364, -1.3844994457742366, -0.9511994457742364]))
    })
})
