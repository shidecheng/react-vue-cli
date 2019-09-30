import storeBase from  "../../reactFlux/storeBase";
export default class demoStore extends storeBase {
    constructor() {
        super()
    }
    state = {
        message: "abc"
    }
    handleClickChange(message: string) {
      console.log(this, message)
      this.setState({
          message,
      })
    }
}