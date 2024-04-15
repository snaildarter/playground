const {remote} =require('electron');

var rightTemplate = [
    {label: '粘贴'},
    {label: '复制'}
];

var m = remote.Menu.buildFromTemplate(rightTemplate);

window.onload = function() {
    var btn = this.document.querySelector('#btn');
    var BrowserWindow = require('electron').remote.BrowserWindow;
    btn.onclick = function() {
     
       nweWin = new BrowserWindow({
            width: 300,
            height: 200
        })
        newWin.loadFile('newWindow.html');
        newWin.on('close', () => {win = null})
    }
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        m.popup({window: remote.getCurrentWindow()})
    })
}
