class GuessingGame {
    constructor() {
        this.maximum;
        this.minimum;
        this.middle;
    }

    setRange(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    guess() {
        this.middle = Math.ceil ((this.minimum + this.maximum)/2);
        return this.middle;
    }

    lower() {

        if (this.maximum > this.middle) {
            this.maximum = this.middle;
        }
}

    greater() {
        if (this.minimum < this.middle) {
            this.minimum = this.middle;
        }
    }
}


module.exports = GuessingGame;