const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("custom_css", {
    updateStyle: (callback) => ipcRenderer.on(
        "LiteLoader.custom_css.updateStyle",
        callback
    ),
    rendererReady: () => ipcRenderer.send(
        "LiteLoader.custom_css.rendererReady"
    )
});