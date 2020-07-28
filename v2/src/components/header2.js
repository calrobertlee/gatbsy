import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Title = styled.header`
${tw`bg-gray-900 mb-8`}
`
const Container = styled.div`
${tw`m-auto max-w-4xl px-6 py-4`}
`
const H1 = styled.h1`
${tw`text-3xl font-semibold text-white`}
`
//==========

const Header2 = () => (
    <Title>
        <Container>
            <H1>
                Cal Robert's Website
            </H1>
        </Container>
    </Title>
  )

export default Header2