import React from "react"
import connect from "../../reactFlux/connect"
import { withStyles } from "@material-ui/styles"

const withStyle = (them: any) => ({
        root: {
        width: "300px",
        height: "300px",
        border: "1px solid red",
      }
})

@(withStyles(withStyle) as <TFUNC> (target: TFUNC) => TFUNC)
class Demo extends React.PureComponent<any, any> {
    count = 1;
    constructor(props: any) {
        super(props)
        this.state = {
            message: this.props.message
        }
    }
    static getDerivedStateFromProps(props: any, state: any) {
        if (props.message !== state.message) {
            return {
                message: props.message,
                prevMessage: props.message,
            }
        } else {
            return null
        }
    }
    handleInput = (event: any) => {
        const { demoStore } = this.props
        console.log(event)
        // this.setState({
        //     message: event.target.value
        // })
        demoStore.handleClickChange(event.target.value)
        
    }
    handleClick = () => {
        window.open()
    }
    render() {
        const { message } = this.state
        const { classes } = this.props
        return <div className={classes.root}>
            <h1>count</h1>
            <input type="text" value={message} onChange={this.handleInput}/>
            <div>{message}</div>
            <button type="button" onClick={this.handleClick}>open a new window</button>
        </div>
    }
}
const mapStateProps = (state: any) => {
    return {
        message: state.demoStore.message
    }
}
const mapStoreProps = (stores: any) => {
    console.log("mapStoreProps", stores)
    return {
        demoStore: stores.demoStore
    }
}
export default connect(mapStateProps, mapStoreProps)(Demo)