const Dragon = require('./dragon');
const { REFRESH_RATE, SECONDS } = require('./config');

const RefreshRate = REFRESH_RATE * SECONDS;

class Genenration {
    constructor() {
        this.expiration = calculateExpiration();
    }

    calculateExpiration() {
        const expirationPeriod = Math.floor(Math.random() * (RefreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ?
            RefreshRate - expirationPeriod :
            RefreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon() {
        if(Date.now() > this.expiration){
            throw new Error(`This generation expired on ${this.expiration}`)
        }
        return new Dragon();
    }
}

module.exports = Genenration;
