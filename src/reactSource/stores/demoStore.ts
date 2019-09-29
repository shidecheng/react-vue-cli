import storeBase from  "../../reactFlux/storeBase";
export default class demoStore extends storeBase {
    constructor() {
        super()
    }
    state = {
        app: "abc"
    }
    handleClickChange(app: string) {
      console.log(this, app)
      this.setState({
          app,
      })
    }
}