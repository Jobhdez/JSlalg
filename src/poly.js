class Polynomial {
    /* 
    class for Polynomials.
     */
    constructor(coefficients) {
        this.coefficients = coefficients;
    }
    degree() {
        /* get the degree of a polynomial */
        return this.coefficients.length - 1
    }
    add(other) {
        // adds two polynomials
        if (other instanceof Polynomial) {
            return new Polynomial(this.coefficients.map((n,i) => { return n + other.coefficients[i]}))
        }
        else {
            throw "Exp not a Polynomial"
        }
    }

    sub(other) {
        // substracts two polynomials

        if (other instanceof Polynomial) {
            return new Polynomial(this.coefficients.map((n, i) => { return n - other.coefficients[i]}))
        }
        else {
            throw "other is not a polynomial"
        }


    }
    diff() {
        // takes the derivative of a polynomial
        let coeffs = []
        let exponent = this.degree()
        for (let i = 0; i < this.coefficients.length - 1; i++) {
            coeffs[i] = this.coefficients[i] * exponent 
            exponent -= 1
        }
        return new Polynomial(coeffs)
    }

    evalPoly(x) {
        // evaluates a polynomial
        if (Number.isInteger(x)) {
            let degree = this.degree()
            let solution = 0
            for (let i in this.coefficients) {
                solution += (x ** degree) * this.coefficients[i]
                degree -= 1
            }
            return solution
        }
        else {
            throw "x is not an integer"
        }

    }
}

module.exports = {Polynomial}
