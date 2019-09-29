import storeBase from "./storeBase";
interface storesTypes {
    [proptyName: string]: any,
}
export default  function builderStores(stores: storesTypes) {
    return new AppStore(stores)
}
class AppStore extends storeBase {
    stores: storesTypes = {};
    state:any = {};
    constructor(stores: storesTypes) {
        super();
        this.buildStores(stores)
    }
    buildStores(stores: storesTypes) {
        Object.keys(stores).forEach((storeKey: string) => {
            this.setStore(storeKey, stores[storeKey])
        })
    }
    getStore(storeKey: string) {
        return this.stores[storeKey];
    }
    setStore(storeKey: string, Store: any) {
        this.stores[storeKey] = new Store()
        this.initState(storeKey, this.stores[storeKey].state || {})
        this.startObseverStore(storeKey)
    }
    startObseverStore(storeKey: string) {
       this.getStore(storeKey).obsever((state: any) => {
          this.setState({
              [storeKey]: state
          })
          this.emit("did-update", this.state)
       })
    }
    handleChange(callback: (state: any) => void) {
        this.on("did-update", callback)
    }
    initState(storeKey: string, state: any) {
        this.setState({
            [storeKey]: state,
        })
    }
}