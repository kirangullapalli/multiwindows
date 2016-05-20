/**
 * Created by kiran on 5/18/2016.
 */
const {remote} = require('electron');
const ipc = require('electron').ipcRenderer
const {Menu, MenuItem} = remote;
var menu=Menu.buildFromTemplate([
    {
        label: 'Operations',
        submenu: [{
            label: 'Toggle Fullscreen',
            accelerator: 'CmdOrCtrl+F',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
                }
            }
        }, {
            label: 'Dev Tools',
            accelerator: 'CmdOrCtrl+D',
            click: function (item, focusedWindow) {
                if (focusedWindow) {
                    focusedWindow.toggleDevTools()
                }
            }
        },
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: function (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.reload()
                    }
                }
            },
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                click: function (item, focusedWindow) {
                    ipc.send('asynchronous-message', 'Quit')
                }
            }
        ]
    },
    {
        label:'Applications',
        submenu: [{
            label: 'Finder',
            accelerator: 'CmdOrCtrl+F',
            click: function (item, focusedWindow) {
                ipc.send('asynchronous-message', 'Finder')
            }
        },
            {
                label: 'Balances',
                accelerator: 'CmdOrCtrl+B',
                click: function (item, focusedWindow) {
                    ipc.send('asynchronous-message', 'Balances')
                }
            }
    ]
    }
]
)
Menu.setApplicationMenu(menu);