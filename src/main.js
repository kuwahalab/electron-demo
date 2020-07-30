const {app, BrowserView, BrowserWindow} = require('electron')

app.on('ready', () => {
  let window = new BrowserWindow({width: 800, height: 600})

  window.on('closed', () => {
    window = null
  })

  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })

  window.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadFile('index.html')
})
