'use strict';

export default class RadiantView {

    constructor(controller) {
        this._controller = controller;
    }

    get render() {
        if(this._controller === undefined) throw `RadiantModule[${this.constructor.name}]: controller() is not defined!`;
    }
};