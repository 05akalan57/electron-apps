const { app, BrowserWindow } = require("electron");
const path = require("path");
function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 900,
		height: 600,
		minWidth: 500,
		minHeight: 500,
	});
	mainWindow.loadFile("template/index.html");
	mainWindow.setMenu(null);
}
app.whenReady().then(() => {
	createWindow();
});