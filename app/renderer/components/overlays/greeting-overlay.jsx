import React from 'react';
import {
    Button,
    Classes,
    Intent,
    Overlay,
    Switch,
    IOverlayableProps,
    IBackdropProps
} from "@blueprintjs/core";

export default class GreetingOverlay extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: true,
            autoFocus: false,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: false,
            hasBackdrop: true,
            inline: false
        };
    }

    handleOpen = () => {
        this.state.isOpen = true;
    };
    handleClose = () => {
        console.log('Closing!');
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div>
                <Overlay isOpen={this.state.isOpen} onClose={this.handleClose} {...this.state}>
                    <div className={`${Classes.CARD} ${Classes.ELEVATION_4}`}>
                        <p>If you are seeing this it means we fully bootstrapped the application!</p>
                    </div>
                    <Button intent={Intent.DANGER} onClick={this.handleClose}>Close</Button>
                </Overlay>
            </div>
        )
    }
}