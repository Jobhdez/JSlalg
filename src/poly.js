class Polynomial {
    /* 
    class for Polynomials.
     */
    constructor(coefficients) {
        this.coefficients = coefficients;
    }
    degree() {
        /* get the degree of a polynomial */
        return this.coefficients.length()
    }
    add(other) {
        if (other instanceof Polynomial) {
            return this.coefficients.map((n,i) => { return n + other.coefficients[i]})
        }
        else {
            throw "Exp not a Polynomial"
        }
    }

    sub(other) {

        if (other instanceof Polynomial) {
            return this.coefficients.map((n, i) => { return n - other.coefficients[i]})
        }
        else {
            throw "other is not a polynomial"
        }


    }
    derive() {
        let coeffs = []
        let exponent = this.degree()
        for (let i in this.coefficients) {
            coeffs[i] = this.coefficients[i] * exponent 
            exponent -= 1
        }
        return new Polynomial(coeffs)
    }

    evalPoly(x) {
        if (Number.isInteger(x)) {
            let degree = this.coefficients.length()
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