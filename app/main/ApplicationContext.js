'use strict';
import initializeControllerBindings from "./bindings/ControllerBindings";
import initializeViewBindings from "./bindings/ViewBindings";
import initializeModuleBindings from "./bindings/ModuleBindings";
import initializeRoutes from "../renderer/routes";
import { Injector } from "./bindings/Injector";

/**
 * Builds and prepares all of the immediately required sub-modules
 */
export default function buildApplicationContext() {
    initializeViewBindings();
    initializeControllerBindings();
    initializeModuleBindings();
    Injector.printBindings();
    initializeRoutes();
}