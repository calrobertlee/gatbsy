import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function HomePage() {
  return (
  <Layout>
      <div style={{ color: `purple` }}>
        <Header headerText="Hellllo" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
  </Layout>
  )
}