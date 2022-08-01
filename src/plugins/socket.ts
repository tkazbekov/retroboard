import { io, Socket, type ManagerOptions, type SocketOptions } from 'socket.io-client'
import type { App, InjectionKey } from 'vue';

interface connectionParams {
    uri: string;
    options: Partial<ManagerOptions & SocketOptions>
}

export default {
    install: (app: App, { uri, options }: connectionParams) => {
        const socket: Socket = io(uri, options)
        app.config.globalProperties.$socket = socket

        app.provide('socket', socket)
    }
}