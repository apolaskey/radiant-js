'use strict';
import { ModuleBindings } from "../main/bindings/ModuleBindings";
import { Injector } from "../main/bindings/Injector";

export default function initializeRoutes() {
    console.log('Loading Application Routes!');

    m.route.mode = 'pathname'; // Nice HTML5 style of routing

    m.route(document.body, '/home', {
            '/home': Injector.container.get(ModuleBindings.HelloWorldModule.name)
    });
}