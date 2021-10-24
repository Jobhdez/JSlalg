class Vector {
    constructor(vector) {
	this.vector = vector
    }
    add(other) {
	if (other instanceof Vector) {
	    let v = [];
	    for (let element = 0; element < other.vector.length; element++) {
		v[element] = other.vector[element] + this.vector[element];
	    }
	    return new Vector(v)
	}
    }
    sub(other) {
	if (other instanceof Vector) {
	    let v = [];
	    for (let element = 0; element < other.vector.length; element++) {
		v[element] = this.vector[element] - other.vector[element];
	    }
	    return new Vector(v);
	}
    }
}

module.exports = { Vector }
