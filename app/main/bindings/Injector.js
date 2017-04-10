import { helpers } from 'inversify-vanillajs-helpers';
import { Container } from 'inversify';
import * as reflection from 'reflect-metadata';

class InversifyUtil {

    constructor() {
        console.log('Loading Inversify IoC Containers!');
        let inversifyContainer = new Container();
        let registeredHelper = helpers.register(inversifyContainer);
        this._container = inversifyContainer;
        this._helper = registeredHelper;
    }

    get container() {
        return this._container;
    }

    get register() {
        return this._helper;
    }

    printBindings() {
        console.log(this._container);
    }
}

export const Injector = new InversifyUtil();