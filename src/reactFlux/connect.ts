import withState from "./withState"
export default function connect(mapStateProps: any, mapStoreProps: any) {
    return withState(mapStateProps, mapStoreProps)
}