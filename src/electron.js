const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    fullscreen: true,
    frame: false,
    kiosk: true,
    resizable: false,
    alwaysOnTop: true,
    backgroundColor: '#FFF', // Choose an appropriate background color
  });
  //win.loadFile(path.join(__dirname, '..', 'index.html'));
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  win.on('closed', () => {
    win = null;
  });
  win.webContents.openDevTools()
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
