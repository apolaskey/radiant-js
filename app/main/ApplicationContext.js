'use strict';
import initializeControllerBindings from "../renderer/bindings/ControllerBindings";
import initializeViewBindings from "../renderer/bindings/ViewBindings";
import initializeModuleBindings from "../renderer/bindings/ModuleBindings";
import initializeRoutes from "../renderer/routes/editor-routes";
import { Injector } from "./bindings/Injector";

/**
 * Builds and prepares all of the immediately required sub-modules
 */
export default function buildApplicationContext() {
    // Prepare app bindings
    initializeViewBindings();
    initializeControllerBindings();
    initializeModuleBindings();
    Injector.printBindings();

    // Prepare UI Router
    initializeRoutes();
}