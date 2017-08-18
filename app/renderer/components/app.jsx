import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../routes';
import {Button} from "@blueprintjs/core/dist/components/button/buttons";
import {Overlay} from "@blueprintjs/core/dist/components/overlay/overlay";
import GreetingOverlay from "./overlays/greeting-overlay";
import { PrimaryToaster } from "./toasts/primary-toaster";
import {Intent} from "@blueprintjs/core/dist/common/intent";
import NewProjectDialog from "./dialogs/new-project-dialog";


PrimaryToaster.show({
    message: "Started up!",
    iconName: "cog",
    intent: Intent.SUCCESS
});
const App = () => (
    <div>
        <NewProjectDialog/>
        { Routes }
    </div>
);

export default App;
