'use strict';

export default class RadiantController {
    constructor() {
        if (new.target === RadiantController) {
            throw new Error('Cannot construct Abstract instances directly!');
        }
    }
}
