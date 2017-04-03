'use strict';

/**
 * For use in routing mechanisms; to prevent some gotcha's with Mithril
 */
export default class RadiantModule {

    constructor() {
        if(new.target === RadiantModule) {
            throw 'Cannot construct Abstract instances directly!'
        }
    }

    get controller() {
        throw `RadiantModule[${this.constructor.name}]: controller() not implemented!`
    }

    get view() {
        throw `RadiantModule[${this.constructor.name}]: view() not implemented!`
    }

}