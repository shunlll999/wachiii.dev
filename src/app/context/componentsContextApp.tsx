import React, { useContext } from "react"
import { AppContext } from "./applicationContent"

const HEIGH_COMPONENT = ({ Component }: any) => {
  const contextValue: any = useContext(AppContext)
  return <Component {...contextValue} />
}

export default HEIGH_COMPONENT
