const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld("custom_css", {
    updateStyle: (callback) => ipcRenderer.on(
        "betterQQNT.custom_css.updateStyle",
        callback
    ),
    rendererReady: () => ipcRenderer.send(
        "betterQQNT.custom_css.rendererReady"
    )
});