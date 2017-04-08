'use strict';

/**
 * Provides a mechanism to simplify Mithril Routing
 */
export default class RadiantModule {

    constructor(controller, view) {
        if(new.target === RadiantModule) {
            throw 'Cannot construct Abstract instances directly!'
        }
        this._controller = controller;
        this._view = view;
    }

    get controller() {
        if(this._controller === undefined) throw `RadiantModule[${this.constructor.name}]: controller() is not defined!`;
        return this._controller;
    }

    get view() {
        if(this._view === undefined) throw `RadiantModule[${this.constructor.name}]: view() is not defined!`;
        return this._view;
    }

}