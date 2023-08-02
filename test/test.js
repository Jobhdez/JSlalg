const mocha = require('mocha');
const chai = require('chai');

const lVec = require('../src/vector');
const lMat = require('../src/matrix');

const p = require('../src/poly');

const expect = chai.expect;

describe('linearAlgebra', function () {

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

    it('test polynomial derive', () => {
        let poly6 = new p.Polynomial([2,3,5,1])
        expect(poly6.diff()).to.eql(new p.Polynomial([6, 6, 5]))
    })

    it('test polynomial evaluation', () => {
        let poly7 = new p.Polynomial([2,3,5,1])
        expect(poly7.evalPoly(2)).to.eql(39)
    })
})
