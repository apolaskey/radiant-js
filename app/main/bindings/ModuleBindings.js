'use strict';

import { Injector } from "./Injector"
import HelloWorldModule from "../modules/HelloWorldModule";
import { ControllerBindings } from "./ControllerBindings";
import { ViewBindings } from "./ViewBindings";

export const ModuleBindings = {
    HelloWorldModule: { name: 'HelloWorldModule', type: HelloWorldModule }
};

export default function initialize() {
    console.log('Loading Module Bindings!');
    Injector.register(
        ModuleBindings.HelloWorldModule.name,
        [ControllerBindings.HelloWorldController.name, ViewBindings.HelloWorldView.name])
    (ModuleBindings.HelloWorldModule.type);
};