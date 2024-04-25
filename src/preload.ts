// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('API', {
	test: async () => {
		const result = await ipcRenderer.invoke('test');

		return result;
	},
	isEmulatorInstalled: async (emulatorId: string) => {
		const result = await ipcRenderer.invoke('isEmulatorInstalled', emulatorId);

		return result;
	},
});
