'use strict';

/**
 * Helper class to invoke WebGL 2 Actions
 */
class WebGL2Context {
    constructor(glCanvasContext) {
        this.glCanvasContext = glCanvasContext;
    }

    get glContext() {
        return this.glCanvasContext;
    }
}

export default { WebGL2Context }

