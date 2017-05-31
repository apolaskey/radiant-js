'use strict';
import {Injector} from '../../main/bindings/Injector';
import {ModuleBindings} from '../bindings/ModuleBindings';

export default function initializeRoutes() {
    console.log('Loading Application Routes...');

    m.route.mode = 'path'; // Nice HTML5 style of routing

    m.route(document.body, '/home', {
        '/home': new function () {
            this.component = Injector.container.get(ModuleBindings.HelloWorldModule.name);
            this.view = this.component.view;
            this.controller = this.component.controller;
        }()
    });
}
