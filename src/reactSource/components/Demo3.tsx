import React from "react"
import connect from "../../reactFlux/connect"
import { withStyles } from "@material-ui/styles"
const styles = (theme:any) => {
    return ({
        btn: {
            width: "100px",
            height: "100px",
            background: "orange",
        }
    })
}
@(withStyles(styles) as <TFUNC> (target: TFUNC) => TFUNC) 
export default class Demo1 extends React.PureComponent<any, any> {
    toJumpDemo1 = () => {
        const { history } = this.props
        history.push("/demo1")
  }
  render() {
      const { classes } = this.props 
      return <div>
          <button type="button" className={classes.btn} onClick={this.toJumpDemo1}>click3</button>
      </div>
  }
}
