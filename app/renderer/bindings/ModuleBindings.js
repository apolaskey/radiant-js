'use strict';

import { Injector } from "../../main/bindings/Injector"
import HelloWorldModule from "../modules/HelloWorldModule";
import { ControllerBindings } from "./ControllerBindings";
import { ViewBindings } from "./ViewBindings";
import RadiantModule from "../modules/RadiantModule";
import WebGLCanvasModule from "../modules/WebGLCanvasModule";

export const ModuleBindings = {
    RadiantModule: { name: 'RadiantModule', type: RadiantModule },
    HelloWorldModule: { name: 'HelloWorldModule', type: HelloWorldModule },
    WebGLCanvasModule: { name: 'WebGLCanvasModule', type: WebGLCanvasModule }
};

export default function initialize() {
    let start = performance.now();
    Injector.register(ModuleBindings.RadiantModule.name)(ModuleBindings.RadiantModule.type);

    Injector.register(ModuleBindings.HelloWorldModule.name,
        [ControllerBindings.HelloWorldController.name, ViewBindings.HelloWorldView.name])
    (ModuleBindings.HelloWorldModule.type);

    Injector.register(
        ModuleBindings.WebGLCanvasModule.name,
        [ControllerBindings.WebGL2ContextController.name, ViewBindings.WebGLCanvasView.name])
    (ModuleBindings.WebGLCanvasModule.type);

    let end = performance.now();
    console.log(`Loaded Module Bindings in ${(end - start) / 1000.0} seconds!`);
};