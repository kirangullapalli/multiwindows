const electron = require('electron')
const ipc = require('electron').ipcMain
const path = require('path')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
app.on('ready',function() {
    var mainWindow = new BrowserWindow(
        {
            width: 800,
            height: 600
        })
    mainWindow.loadURL(path.join('file://', __dirname, '/main.html'))
    //mainWindow.webContents.openDevTools()
    ipc.on('asynchronous-message', function(event,args){
    var prefWindow=new BrowserWindow({width:200,height:400});
        prefWindow.loadURL('http://google.com')
    })
})
