'use strict';

export default class RadiantComponent {

    constructor(controller) {
        if(new.target === RadiantComponent) {
            throw 'Cannot construct Abstract instances directly!'
        }

        if(controller === undefined) throw 'Controller is either unset or undefined!';
        this._controller = controller;
    }

    /**
     * Display the contents of the component
     * @returns {*}
     */
    get view() {
        throw `RadiantComponent[${this.constructor.name}]: view() is not implemented!`;
    }

};