var electron = require('electron')
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
app.on('ready', () => {
    require('./main/menu.js')
    mainWindow = new BrowserWindow({width: 600, height: 400, webPreferences: {nodeIntegration: true}});
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile("index.html");

    mainWindow.on('close', () =>{
        mainWindow = null;
    })
})