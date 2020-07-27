import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import '../styles/index.scss'

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`

export default function HomePage() {
  return (
    <Layout>
            <h1>Hello.</h1>
            <h2>I'm Cal, a full-stack web developer living in beautiful Berkeley</h2>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
            <p>Need a web developer? <Link to="/contact">Message Cal!</Link></p>
            <Button>Activate</Button>
            <button className='bg-blue-500 hover:bg-blue-800 text-white p-2 rounded'>Activate</button>
    </Layout>
  )
}