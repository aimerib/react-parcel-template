import React, { Component } from "react"
import styled from "styled-components"

const MyParagraph = styled.p`
color: palevioletred;
`

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <MyParagraph>
          Replace Me!
        </MyParagraph>
      </div>
    )
  }
}
        
