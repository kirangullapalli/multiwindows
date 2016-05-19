/**
 * Created by kiran on 5/18/2016.
 */
const {remote} = require('electron');
const ipc = require('electron').ipcRenderer
const {Menu, MenuItem} = remote;
var menu=Menu.buildFromTemplate([
    {
        label:"Electron",
        submenu:[
            {
                label:"Prefs",
                click:function(){
                    ipc.send('asynchronous-message', 'Prefs-click')
                }

            }
        ]
    }]
)
Menu.setApplicationMenu(menu);