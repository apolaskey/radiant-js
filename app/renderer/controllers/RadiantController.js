'use strict';

export default class RadiantController {
    constructor() {
        if(new.target === RadiantController) { throw 'Cannot construct Abstract instances directly!' }
    }
}