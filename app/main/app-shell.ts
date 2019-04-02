/**
 * This file is strictly for Electron to act as the mechanism for loading native windows, etc.
 */
import {app, BrowserWindow} from 'electron';
import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';
import * as dotenv from 'dotenv';
import Promise from 'bluebird';
import * as path from 'path';
import ElectronUtils from './utilities/electron-utils';
// @ts-ignore
import icon from '../resources/icon/icon.png';
// @ts-ignore
import iconOsx from '../resources/icon/icon.hqx';

dotenv.config();
global.Promise = Promise;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow;

const createWindow = () => {
    const iconLocation = process.platform !== 'darwin' ? (icon) : (iconOsx);
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        backgroundColor: '',
        icon: path.join(__dirname, iconLocation)
    });

    // Load up just enough HTML to get things started; JSX from here on
    mainWindow.loadURL(ElectronUtils.getElectronResource('index.html'));

    // Quick-hook into devtools; has to be called after the window is setup sadly
    if (process.env.NODE_ENV === 'development') {
        [REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS].forEach(extension => {
            installExtension(extension, false)
                .then((name) => console.log(`Added Extension: ${name}`))
                .catch((err) => console.log('An error occurred: ', err));
        });
    }

    // Quick-hook into devtools; has to be called after the window is setup sadly
    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
        mainWindow.focus();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
