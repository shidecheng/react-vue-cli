import React from "react";
import { Provider } from "../reactFlux/Provider";
import buildStores  from "../reactFlux/appStore"
import stores from "./stores"
// import Demo from "./components/Demo"
// import Demo1 from "./components/Demo1"
// import Demo2 from "./components/Demo2"
import loadable from "@loadable/component"
import { Router, Switch, Route, Redirect } from "react-router"
import { createBrowserHistory } from "history"
const appStore = buildStores(stores)
export default class App extends React.PureComponent<any, any> {
    render() {
        return <Provider appStore={appStore}>
                   <Router history={createBrowserHistory()}>
                       <Switch>
                            <Route exact path="/" component={loadable(() => import("./components/Demo"))}/>
                            <Route exact path="/demo" component={loadable(() => import("./components/Demo2"))} />
                        </Switch>
                   </Router>
            </Provider>
    }
}