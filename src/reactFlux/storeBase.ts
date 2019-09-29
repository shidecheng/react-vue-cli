import EventEmitter from "EventEmitter3";
export default class storeBase extends EventEmitter {
    state = {};
    constructor() {
        super()
    }
    setState(config: any) {
        this.state = {
            ...this.state,
            ...config,
        }
        this.emit("did-update", this.state)
    }
    onDidUpdate(callback: <T>(state: T) => T) {
        this.on("did-update", callback)
    }
    obsever(callback: <T>(state: T) => T) {
        this.onDidUpdate(callback)
    }
}
