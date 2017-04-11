'use strict';
import { Injector } from "./Injector"
import HelloWorldView from "../../renderer/views/HelloWorldView";
import RadiantView from "../../renderer/views/RadiantView";

export const ViewBindings = {
    RadiantView: { name: 'RadiantView', type: RadiantView },
    HelloWorldView: { name: 'HelloWorldView', type: HelloWorldView }
};

export default function initialize() {
    let start = performance.now();
    Injector.register(ViewBindings.RadiantView.name)(ViewBindings.RadiantView.type);
    Injector.register(ViewBindings.HelloWorldView.name)(ViewBindings.HelloWorldView.type);
    let end = performance.now();
    console.log(`Loaded View Bindings in ${(end - start) / 1000.0} seconds!`);
};