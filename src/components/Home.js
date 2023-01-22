import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
     <Section
       title="Model S"
       description="order online to Touchless delivery"
       backgroundImg="model-s.jpg"
       leftBtnText="custom order"
       rightBtnText="existing inventory"
       />
     <Section
      title="Model Y"
      description="order online to Touchless delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="custom order"
      rightBtnText="existing inventory"
     />
     <Section
     title="Model 3"
     description="order online to Touchless delivery"
     backgroundImg="model-3.jpg"
     leftBtnText="custom order"
     rightBtnText="existing inventory"
     />
     <Section
      title="Model X"
      description="order online to Touchless delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="custom order"
      rightBtnText="existing inventory"
     />
     <Section
      title="Lowest Cost Solar Panels in America"
      description="MoneyBack Guarantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
     />
     <Section
      title="Solar For New Roofs"
      description="Solar Roof Costs Less than a New Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      
     />
     <Section
      title="Accessories"
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
     />
    </Container>
  )
}

export default Home
const Container=styled.div`
    height: 100vh;
    `