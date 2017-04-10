'use strict';
import { Injector } from "Injector"

export default function initialize() {
    Injector.register(HelloWorldController.constructor.name)(HelloWorldController);
};