import React, {useState, useEffect, useRef, useMemo } from "react"
interface DemoProps {
    a: string
}
export default function(props:DemoProps) {
    const [count, setcount] = useState(1)
    console.log("count",count)
    function increase(e: any) {
        setcount(prevCount => prevCount + 1)
    }
    const value = useGetValue("count")
    useMemo(() => {
        console.log("memo", count)
    }, [count])
    useEffect(() => {
        console.log("effect", count)
    },[count])
    return (<div>
        <h1>{count}</h1>
        {value}
        <button type="button" onClick={e => {increase(e)}}>计数器</button>
    </div>)
}
function useGetValue(arg: string) {
  const [ name, setName ] = useState(arg)
  useEffect(() => {
    setName("zhangsan")
  }, [name])
  return <h1>{name}</h1>
} 