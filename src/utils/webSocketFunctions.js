import { w3cwebsocket as W3CWebSocket } from 'websocket';

export const client = new W3CWebSocket('ws://127.0.0.1:8000')

export const isWebsocketServerOpen = () => {
    client.onpen = () => {
        console.log("Web Socket Server is now OPEN!")
        return true
    }
}

export const sendJob = (type, msg) => {

    client.send(JSON.stringify({
        type: type ? type : "message",
        msg: msg ? msg : "default message"
    }))
    client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data)
        console.log("get reply! ", dataFromServer)
    }
}