import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';
import * as dotenv from 'dotenv'; dotenv.config();
global.Promise = require('bluebird');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
    // Must be called first
    if(process.env.NODE_ENV === 'development') {
        enableLiveReload();
    }

  // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 1280,
      height: 720,
    });

    // Quick-hook into devtools; has to be called after the window is setup sadly
    if(process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }

    // Load up just enough HTML to get things started; JSX from here on
    mainWindow.loadURL(`file://${__dirname}/index.html`);

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
