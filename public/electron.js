const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
let win = null;

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);

  console.log('running electron.js')
  console.log(`file://${path.join(__dirname, '../build/index.html')}`)
  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});