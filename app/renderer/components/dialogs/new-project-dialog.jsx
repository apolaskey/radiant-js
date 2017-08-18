import React from 'react';
import {
    Button,
    Classes,
    Intent,
    Dialog,
} from "@blueprintjs/core";

export default class NewProjectDialog extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: true,
            autoFocus: false,
            canEscapeKeyClose: false,
            canOutsideClickClose: false,
            enforceFocus: false,
            hasBackdrop: true,
            inline: false
        };
    }

    handleOpen = () => {
        this.state.isOpen = true;
    };
    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <Dialog iconName="control" title="Project Selection" isOpen={this.state.isOpen} onClose={this.handleClose} {...this.state}>
                <div className="columns">
                    <div className={`${Classes.CARD} ${Classes.INTERACTIVE} ${Classes.ELEVATION_0} noselect column`}>
                        <h3>
                            <span className={`${Classes.ICON_LARGE} ${Classes.iconClass("folder-open")}`}> </span>
                            Open Project
                        </h3>
                    </div>
                    <div className={`${Classes.CARD} ${Classes.INTERACTIVE} ${Classes.ELEVATION_0} noselect column`}>
                        <h3>
                            <span className={`${Classes.ICON_LARGE} ${Classes.iconClass("new-object")}`}> </span>
                            New Project
                        </h3>
                    </div>
                </div>
            </Dialog>
        )
    }
}