'use strict';
import RadiantController from "../controllers/RadiantController";

export default class RadiantView {
    constructor(boundController: RadiantController) {
        this.controller = boundController;
    }
    render() {
        throw 'render() not implemented by view!';
    }
};