const {app, BrowserWindow} = require('electron');

function createWindow(){

    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('html/index.html');

    window.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('windows-all-closed', function(){
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});