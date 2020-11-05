const {Menu, BrowserWindow} = require('electron');
var template = [
    {
        label: '菜单一',
        submenu: [
            {
                label: '子菜单1',
                accelerator:`ctrl+n`,
                click:()=>{
                    win = new BrowserWindow({
                        width:500,
                        height:500,
                        webPreferences:{ nodeIntegration:true}
                    })
                    win.loadFile('newWindow.html')
                    win.on('closed',()=>{
                        win = null
                    })
                }
            },
            {label: '子菜单2'}
        ]
    },
    {
        label: '菜单二',
        submenu: [
            {label: '子菜单1'},
            {label: '子菜单2'}
        ]
    }
];

var m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);