import React from 'react';
import {Overlay} from "@blueprintjs/core/dist/components/overlay/overlay";

export default class GreetingOverlay extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            autoFocus: false,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: true,
            hasBackdrop: true,
            inline: false
        };
        this.handleOpen.bind(this);
        this.handleClose.bind(this);
    }

    handleOpen = () => {
        this.state.isOpen = true;
    };
    handleClose = () => {
        this.state.isOpen = false;
    };

    render() {
        return (
            <div className="overlay-test pt-overlay pt-overlay-open">
                <Overlay className="pt-overlay pt-overlay-open pt-overlay-inline testOverlay" isOpen={this.state.isOpen} onClose={this.handleClose} {...this.state}>
                    <div className="pt-card pt-elevation-4 docs-overlay-example-transition pt-overlay-content">
                        <p>If you are seeing this it means we fully bootstrapped the application!</p>
                    </div>
                </Overlay>
            </div>
        )
    }
}