import React, {Component} from 'react';
import Routes from '../routes';
import NewProjectDialog from './dialogs/new-project-dialog';
import {connect} from "react-redux";
import Notifier from "../actors/notification-actor";
import {Intent} from "@blueprintjs/core";

export class App extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        Notifier({message: '⚙ Engine bootstrapped successfully 👌', intent: Intent.PRIMARY}, true);
    }

    render() {
        return (
            <div>
                <NewProjectDialog/>
                <Routes/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    //Notify,
};

const mapStateToProps = (state, ownProps) => ({
    //toaster: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
