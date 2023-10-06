const V = require('./vector')

class NeuralNet1D {
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
    }}	

module.exports = {NeuralNet1D}
