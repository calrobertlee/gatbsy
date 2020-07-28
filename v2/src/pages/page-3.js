import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Heading = styled.h1`
    ${tw`text-2xl font-bold text-gray-800 capitalize mt-8`}
`
const Img = styled.img`
    ${tw`mt-10 rounded-md shadow-xl`}
`

//==========

const ThirdPage = () => (
    <Layout>
      <Heading>Hi from the third page</Heading>
      <Img src="https://source.unsplash.com/random/400x200" alt="" />
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)
  
export default ThirdPage
  