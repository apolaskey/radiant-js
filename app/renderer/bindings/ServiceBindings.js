'use strict';
import {Injector} from '../../main/bindings/Injector';

export default function initialize() {
    Injector.register(HelloWorldController.constructor.name)(HelloWorldController);
}
