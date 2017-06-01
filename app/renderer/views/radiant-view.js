'use strict';

export default class RadiantView {

    constructor() {
        if (new.target === RadiantView) {
            throw new Error('Cannot construct Abstract instances directly!');
        }
    }

    view(controller) {
        if (controller === undefined) {
            throw new Error(`RadiantView[${this.constructor.name}]: controller() is not defined!`);
        }
    }
}
