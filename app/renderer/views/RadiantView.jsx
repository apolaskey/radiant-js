'use strict';

export default class RadiantView {

    constructor() {
        if(new.target === RadiantView) { throw 'Cannot construct Abstract instances directly!' }
    }

    view(controller) {
        if(controller === undefined) throw `RadiantView[${this.constructor.name}]: controller() is not defined!`;
    }
};