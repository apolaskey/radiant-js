'use strict';

// Main root of the base template for Mithril
import { BasicLoader } from './components/BasicLoader';
import HomeController from "./controllers/HomeCtrl";

m.route.mode = 'pathname'; // Nice HTML5 style of routing

m.route(document.body, '/home',
    {
        '/home': {
            controller: new HomeController()
        }
    }
);
