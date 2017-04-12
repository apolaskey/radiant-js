'use strict';
import RadiantModule from "./RadiantModule";
import * as logger from "winston"

export default class HelloWorldModule extends RadiantModule {
    constructor(controller, view) {
        super(controller, view);
    }
}