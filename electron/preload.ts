import { contextBridge, ipcRenderer } from "electron";

const projectAPI = {
    getAllProjects: () => ipcRenderer.invoke("getAllProjects")
}

contextBridge.exposeInMainWorld("projectAPI", projectAPI)

