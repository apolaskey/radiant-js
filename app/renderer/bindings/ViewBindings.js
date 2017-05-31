'use strict';
import {Injector} from '../../main/bindings/Injector';
import HelloWorldView from '../views/HelloWorldView';
import RadiantView from '../views/RadiantView';
import WebGLCanvasView from '../views/WebGLCanvasView';

export const ViewBindings = {
    RadiantView: {name: 'RadiantView', type: RadiantView},
    HelloWorldView: {name: 'HelloWorldView', type: HelloWorldView},
    WebGLCanvasView: {name: 'WebGLCanvasView', type: WebGLCanvasView}
};

export default function initialize() {
    const start = performance.now();
    Injector.register(ViewBindings.RadiantView.name)(ViewBindings.RadiantView.type);
    Injector.register(ViewBindings.HelloWorldView.name)(ViewBindings.HelloWorldView.type);
    Injector.register(ViewBindings.WebGLCanvasView.name)(ViewBindings.WebGLCanvasView.type);
    const end = performance.now();
    console.log(`Loaded View Bindings in ${(end - start) / 1000.0} seconds!`);
}
