'use strict';
import { Injector } from "./Injector"
import HelloWorldView from "../../renderer/views/HelloWorldView";

export const ViewBindings = {
    HelloWorldView: { name: 'HelloWorldView', type: HelloWorldView }
};

export default function initialize() {
    Injector.register(ViewBindings.HelloWorldView.name)(ViewBindings.HelloWorldView.type);
};