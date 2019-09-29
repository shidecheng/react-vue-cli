import React, { ReactElement } from "react"
export const ContextProvider = React.createContext({})
export class Provider extends React.PureComponent<any, any> {
    state = {
        stores: this.props.appStore.stores,
        state: this.props.appStore.state,
    }
    componentDidMount() {
        this.getUpdateStores()
    }
    getUpdateStores() {
        const { appStore } = this.props
        appStore.handleChange(this.handleChange)
    }
    handleChange = (state: any) => {
        this.setState({
            state: {
                ...state
            }
        })
    }
    render() {
        const { stores, state } = this.state
        return <ContextProvider.Provider value={{stores, state}}>
             {this.props.children}
        </ContextProvider.Provider>
    }
}

