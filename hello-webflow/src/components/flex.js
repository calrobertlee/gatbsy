import React from "react"
import flexStyles from "./flex.module.css"

export default function Flex({ children }) {
  return <div className={flexStyles.flex}>{children}</div>
}