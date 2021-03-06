import React from "react"
import connect from "../../reactFlux/connect"
import { withStyles } from "@material-ui/styles"
import Demo1 from "./Demo1"
import Demo2 from "./Demo2"
import { Route, Switch, Redirect } from "react-router"
const withStyle = (them: any) => ({
        root: {
        width: "300px",
        height: "300px",
        border: "1px solid red",
      }
})
const LogProps = React.forwardRef((props: any, ref: any) => {
    return <div ref={ref}>4556543434</div>
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
        const { history } = this.props
        console.log(history)
        history.push("/demo")
    }
    getRef = (ref: any) => {
        console.log(ref)
    }
    render() {
        const { message } = this.state
        const { classes } = this.props
        return <div className={classes.root}>
            <h1>count12233</h1>
            <input type="text" value={message} onChange={this.handleInput}/>
            <div>{message}</div>
            <button type="button" onClick={this.handleClick}>open a new window</button>
            <LogProps ref={this.getRef}/>
            {/* <Switch>
                <Route exact path="/demo1" component={Demo1}/>
                <Route exact path="/demo2" component={Demo2}/>
                <Redirect to="/demo1"/>
            </Switch> */}
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
