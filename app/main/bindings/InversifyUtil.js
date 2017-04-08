import { helpers } from 'inversify-vanillajs-helpers';
import { Container } from 'inversify';

export const InversifyUtil = {
    container: new Container(),
    register: helpers.register(container)
};