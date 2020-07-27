import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/index.css'

export default function HomePage() {
  return (
    <Layout>
        <div>
          <Header headerText="Hellllo" />
          <p>What a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
          <Footer />
        </div>
    </Layout>
  )
}