const V = require('./vector')
const M = require('./matrix.js')

class NeuralNet{
    constructor(vec) {
	this.vec = vec
    }
    softmax() {
	let expV = this.vec.map((element) => {
	    return Math.exp(element)
	})
	
	const initialValue = 0
	
	let sumExps = expV.reduce((accumulator, currentValue) => accumulator + currentValue + initialValue)

	let sVec = expV.map((element) => { return element / sumExps})

	return new V.Vector(sVec)
    }

    softmax2d() {
	return new M.Matrix(this.vec.map((v) => {
	    let smax = new NeuralNet(v).softmax()
	    return smax.vector
	}))
    }
			
	    
    logSoftmax() {
	let softVec = this.softmax(this.vec)

	return new V.Vector(softVec.vector.map((element) => { return Math.log(element) }))
    }

    logSoftmax2d() {
	return new M.Matrix(this.vec.map((v) => {
	    let lsmax = new NeuralNet(v).logSoftmax()
	    return lsmax.vector}))
    }

    relu() {
	return new V.Vector(this.vec.map((v) => { return Math.max(0, v) }))
    }

    relu2d() {
	return new M.Matrix(this.vec.map((row) => { return row.map((column) => { return Math.max(0, column) })}))
    }

    sigmoid() {
	return new V.Vector(this.vec.map((n) => { return 1 / (1 + Math.exp(- n))}))
    }
}

module.exports = {NeuralNet}
