// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('API', {
	test: async () => {
		const result = await ipcRenderer.invoke('ls');

		return result;
	},
});
