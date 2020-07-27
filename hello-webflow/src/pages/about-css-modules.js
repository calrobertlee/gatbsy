import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import Flex from "../components/flex"

export default function About() {
  return (
    <Flex>
      <Container>About CSS Modules</Container>
    </Flex>
  )
}

console.log(styles)
