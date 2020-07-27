import React from 'react'
import Header from "../components/header"
import Strong from "../components/strong"

export default function TestPage() {
    return (
        <div style={{ color: `teal` }}>
          <Header headerText="About Gatsby" />
          <Header headerText="It's pretty cool" />
          <Strong strongText="It works! So smart" />
          <p>Such wow. Very React.</p>
        </div>
      )};
