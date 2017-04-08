'use strict';
import HelloWorldModule from "../main/bindings/modules/RadiantModule";

export default function initializeRoutes() {
    m.route.mode = 'pathname'; // Nice HTML5 style of routing

    m.route(document.body, '/home', {
            '/home': new HelloWorldModule()
    });
}