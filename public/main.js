const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { openGame } = require("./functions");
const { getData, writeData } = require("./db");

//Funciones ipc

//Cerrar app
ipcMain.on("close", () => {
  //Si la accion recibida tiene el nombre "close" se ejecuta el codigo
  //app.quit();
  BrowserWindow.getFocusedWindow().close();
});
//minimizar app
ipcMain.on("minimize", (event, value) => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("openGame", (event, value) => {
  openGame(value);
});

//Donations
ipcMain.on("paypal", (event, value) => {
  shell.openExternal(
    "https://www.paypal.com/donate?hosted_button_id=PYQPXW7A7QQG4&source=url"
  );
});

ipcMain.on("card", (event, value) => {
  shell.openExternal("https://ceneka.net/mp/d/Marccos");
});

//Social
ipcMain.on("discord", (event, value) => {
  shell.openExternal("https://discord.gg/ZKRcV4Fpvh");
});
ipcMain.on("linkedin", (event, value) => {
  shell.openExternal("https://www.linkedin.com/in/marccosgodoy/");
});
ipcMain.on("youtube", (event, value) => {
  shell.openExternal("https://www.youtube.com/c/Marccoss");
});

//Get data from db
ipcMain.handle("getData", async (event, value) => {
  const data = getData();
  return data;
});

//Write db
ipcMain.on("writeData", (event, value) => {
  //openDiscord(value);
  writeData(value[0], value[1]);
});

//----------------------------------------------------------------------------------------------------------

//Config electron
let mainWindow = null;
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  mainWindow = new BrowserWindow({
    maxWidth: 800,
    maxHeight: 600,
    minWidth: 800,
    minHeight: 600,
    title: "Launcher",
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });
}
