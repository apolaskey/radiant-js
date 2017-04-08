'use strict';
import RadiantModule from "./RadiantModule";
import { InversifyUtil } from "../InversifyUtil";
import HelloWorldView from "../../views/HelloWorldView";
import HelloWorldController from "../../controllers/HelloWorldController";

export default class HelloWorldModule extends RadiantModule {

    constructor(controller, view) {
        super(controller, view);
    }

}

InversifyUtil.register(HelloWorldView.constructor.name)(HelloWorldModule);
InversifyUtil.register(HelloWorldController.constructor.name)(HelloWorldModule);