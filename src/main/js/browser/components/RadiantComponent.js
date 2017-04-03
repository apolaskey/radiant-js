'use strict';

import RadiantController from "../controllers/RadiantController";
import RadiantView from "../views/RadiantView";

export default class RadiantComponent {
    constructor(controller: RadiantController, view: RadiantView) {
      this._controller = controller;
      this._view = view;
    }

    /**
     * Display the contents of the component
     * @returns {*}
     */
    get view() {
        return this._view();
    }

    /**
     * Retrieves the set controller
     * @returns {*}
     */
    get controller() {
        return this._controller;
    }

};