import React from "react"
import connect from "../../reactFlux/connect"
class Demo extends React.PureComponent<any, any> {
    count = 1;
    constructor(props: any) {
        super(props)
        this.state = {
            demo: this.props.demo
        }
    }
    static getDerivedStateFromProps(props: any, state: any) {
        if (props.demo !== state.demo) {
            return {
                demo: props.demo,
                prevDemo: props.demo,
            }
        } else {
            return null
        }
    }
    handleClick = () => {
        const { demoStore } = this.props
        demoStore.handleClickChange(this.count++)
        
    }
    render() {
        const { demo } = this.state
        console.log("mapStateProps", )
        return <div>
            <h1>{demo}</h1>
            <button type="button" onClick={this.handleClick}>click</button>
        </div>
    }
}
const mapStateProps = (state: any) => {
    return {
        demo: state.demoStore.app
    }
}
const mapStoreProps = (stores: any) => {
    console.log("mapStoreProps", stores)
    return {
        demoStore: stores.demoStore
    }
}
export default connect(mapStateProps, mapStoreProps)(Demo)