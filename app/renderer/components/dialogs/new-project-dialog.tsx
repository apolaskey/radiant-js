import React from 'react';
import {
    Button,
    Classes,
    Intent,
    Dialog,
} from "@blueprintjs/core";

export interface NewProjectDialogState {
    isOpen: true,
    autoFocus: false,
    canEscapeKeyClose: false,
    canOutsideClickClose: false,
    enforceFocus: false,
    hasBackdrop: true,
    inline: false
}

export default class NewProjectDialog extends React.Component {

    constructor(properties: NewProjectDialogState) {
        super(properties);
    }

    public state: NewProjectDialogState = {
        autoFocus: false,
        canEscapeKeyClose: false,
        canOutsideClickClose: false,
        enforceFocus: false,
        hasBackdrop: true,
        inline: false,
        isOpen: true
    };

    handleOpen = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <Dialog
                icon="control"
                onClose={this.handleClose}
                title="Project Details"
                {...this.state}
            >
                <div className={"columns"}>
                    <div className={`${Classes.CARD} ${Classes.INTERACTIVE} ${Classes.ELEVATION_0} noselect column`}>
                        <h3>
                            <span className={`${Classes.ICON_LARGE} ${Classes.iconClass("folder-open")}`}>&nbsp;</span>
                            Open Project
                        </h3>
                    </div>
                    <div className={`${Classes.CARD} ${Classes.INTERACTIVE} ${Classes.ELEVATION_0} noselect column`}>
                        <h3>
                            <span className={`${Classes.ICON_LARGE} ${Classes.iconClass("new-object")}`}>&nbsp;</span>
                            New Project
                        </h3>
                    </div>
                </div>
            </Dialog>
        )
    }
}