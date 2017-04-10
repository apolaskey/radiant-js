'use strict';
import { Injector } from "./Injector"
import HelloWorldController from "../../renderer/controllers/HelloWorldController";

export const ControllerBindings = {
    HelloWorldController: { name: 'HelloWorldController', type: HelloWorldController }
};

export default function initialize() {
    Injector.register(ControllerBindings.HelloWorldController.name)(ControllerBindings.HelloWorldController.type);
};