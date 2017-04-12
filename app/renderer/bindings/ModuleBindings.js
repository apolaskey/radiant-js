'use strict';

import { Injector } from "../../main/bindings/Injector"
import HelloWorldModule from "../modules/HelloWorldModule";
import { ControllerBindings } from "./ControllerBindings";
import { ViewBindings } from "./ViewBindings";
import RadiantModule from "../modules/RadiantModule";

export const ModuleBindings = {
    RadiantModule: { name: 'RadiantModule', type: RadiantModule },
    HelloWorldModule: { name: 'HelloWorldModule', type: HelloWorldModule }
};

export default function initialize() {
    let start = performance.now();
    Injector.register(ModuleBindings.RadiantModule.name)(ModuleBindings.RadiantModule.type);

    Injector.register(
        ModuleBindings.HelloWorldModule.name,
        [ControllerBindings.HelloWorldController.name, ViewBindings.HelloWorldView.name])
    (ModuleBindings.HelloWorldModule.type);
    let end = performance.now();
    console.log(`Loaded Module Bindings in ${(end - start) / 1000.0} seconds!`);
};