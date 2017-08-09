import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../routes';
import {Button} from "@blueprintjs/core/dist/components/button/buttons";
import {Overlay} from "@blueprintjs/core/dist/components/overlay/overlay";
import GreetingOverlay from "./overlays/greeting-overlay";
import { LoaderToast } from "./toasts/loader-toast";


LoaderToast.show({message: "Started up!"});
const App = () => (
    <div>
        <GreetingOverlay/>
        { Routes }
    </div>
);

export default App;
