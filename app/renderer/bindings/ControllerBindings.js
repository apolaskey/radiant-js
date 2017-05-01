'use strict';
import { Injector } from "../../main/bindings/Injector"
import HelloWorldController from "../controllers/HelloWorldController";
import RadiantController from "../controllers/RadiantController";
import WebGL2ContextController from "../controllers/WebGL2ContextController";

export const ControllerBindings = {
    RadiantController: { name: 'RadiantController', type: RadiantController },
    HelloWorldController: { name: 'HelloWorldController', type: HelloWorldController },
    WebGL2ContextController: { name: 'WebGL2ContextController', type: WebGL2ContextController}
};

export default function initialize() {
    let start = performance.now();
    Injector.register(ControllerBindings.RadiantController.name)(ControllerBindings.RadiantController.type);
    Injector.register(ControllerBindings.HelloWorldController.name)(ControllerBindings.HelloWorldController.type);
    Injector.register(ControllerBindings.WebGL2ContextController.name)(ControllerBindings.WebGL2ContextController.type);
    let end = performance.now();
    console.log(`Loaded Controller Bindings in ${(end - start) / 1000.0} seconds!`);
};