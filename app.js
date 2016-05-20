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
    mainWindow.maximize();
    //mainWindow.webContents.openDevTools()
    ipc.on('asynchronous-message', function(event,args){
        if(args=="Quit") {
            BrowserWindow.getAllWindows().forEach(function (win) {
                win.close()
            })
        }else if(args=="Balances")
        {
            var balWindow = new BrowserWindow(
                {
                    width: 800,
                    height: 600,
                    frame:false
                })
            balWindow.loadURL(path.join('file://', __dirname, '/balances.html'))
        }else if(args=="Finder")
        {
            var finderWindow = new BrowserWindow(
                {
                    width: 800,
                    height: 600
                })
            finderWindow.loadURL(path.join('file://', __dirname, '/finder.html'))
        }
         })
})
