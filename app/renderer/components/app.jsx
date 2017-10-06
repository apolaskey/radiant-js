import React from 'react';
import Routes from '../routes';
import NewProjectDialog from './dialogs/new-project-dialog';
import {connect} from "react-redux";
import {fireNotification} from "../actors/notification-actor";
import {Component} from "react/lib/ReactBaseClasses";
import {Intent} from "@blueprintjs/core";

export class App extends Component {

    componentDidMount() {
        this.props.fireNotification({message: 'Welcome!', intent: Intent.PRIMARY}, true);
    }

    render() {
        return (
            <div>
                <NewProjectDialog/>
                { Routes }
            </div>
        )
    }
}

const mapDispatchToProps = {
    fireNotification,
};

const mapStateToProps = (state, ownProps) => ({
    notifier: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
