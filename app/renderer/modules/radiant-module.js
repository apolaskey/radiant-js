'use strict';

/**
 * Provides a mechanism to simplify Mithril Routing
 */
export default class RadiantModule {

    constructor(controller, view) {
        // Module checks; in order to be a fully fledged UI component both are required
        if (new.target === RadiantModule) {
            throw new Error('Cannot construct Abstract instances directly!');
        }
        if (controller === undefined) {
            throw new Error(`Module: ${this.constructor.name} attempted to be created with an undefined controller!`);
        }
        if (view === undefined) {
            throw new Error(`Module: ${this.constructor.name} attempted to be created with an undefined view!`);
        }
        console.log(`RadiantModule[controller::${controller.constructor.name} view::${view.constructor.name}] loaded!`);
        this._controller = controller;
        this._view = view;
    }

    get controller() {
        if (this._controller === undefined) {
            throw new Error(`RadiantModule[${this.constructor.name}]: controller() is not defined!`);
        }
        return this._controller;
    }

    get view() {
        if (this._view === undefined) {
            throw new Error(`RadiantModule[${this.constructor.name}]: view() is not defined!`);
        }
        return this._view.view;
    }

}
