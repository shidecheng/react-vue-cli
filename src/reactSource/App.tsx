import React from "react";
import { Provider } from "../reactFlux/Provider";
import buildStores  from "../reactFlux/appStore"
import stores from "./stores"
import Demo from "./components/Demo"
const appStore = buildStores(stores)
export default class App extends React.PureComponent<any, any> {
    render() {
        return <Provider appStore={appStore}> 
                <Demo/>
        </Provider>
    }
}