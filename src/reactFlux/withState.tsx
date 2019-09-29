import { ContextProvider } from "./Provider"
import React from "react"
export default function (mapStateProps: any, mapStoreProps: any) {
   return function(Component: React.ComponentClass) {
        return class Injector extends React.PureComponent<any, any> {
            render() {
                return <ContextProvider.Consumer>
                    {
                      (value: any) => <Component {...this.props} {...mapStateProps(value.state)} {...mapStoreProps(value.stores)}/>
                    }
                </ContextProvider.Consumer>
            }
        }
   }
}