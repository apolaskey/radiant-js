import { helpers } from 'inversify-vanillajs-helpers';
import { Container, decorate, inject, injectable } from 'inversify';
import * as reflection from 'reflect-metadata';

class InversifyUtil {

    constructor() {
        console.log('Loading Inversify IoC Containers...');
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
        console.log('Completed loading of bindings:\n', this._container._bindingDictionary._map);
    }
}

export const Injector = new InversifyUtil();