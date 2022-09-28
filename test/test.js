const mocha = require('mocha');
const chai = require('chai');

const lVec = require('../src/vector');
const lMat = require('../src/matrix');

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
})
