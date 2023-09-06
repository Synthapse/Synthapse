import React from 'react';
import logo from './logo.svg';
import main from './images/hero.jpg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

const primaryColor = "#FD6E43"

const HeroContainer = styled.div`
  display: flex;
`

const HeroImage = styled.img`
  width: 100%;
  min-height:100vh;
  `

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:left;
  font-family: Gilroy-SemiBold;
  color: #959595;
  padding: 2rem;
  `


const PrimaryButtonStyled = styled.button`
  background-color: ${primaryColor}};
  color: #fff;
  border: none;
  font-family: Gilroy-SemiBold;
  font-size: 1rem;
  height: 60px;
  width: 260px;
  `


const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        <h1>Shaping Tomorrow's World with
          Collective Intelligence</h1>
        <PrimaryButton ctaText={"Explore Ai Solutions"} />
        Join the collective mind
      </HeroHeader>
      <div>
        <HeroImage src={main} alt="logo" />
      </div>
    </HeroContainer>

  )
}

interface IPrimaryButton {
  ctaText: string
}

const PrimaryButton = ({ ctaText }: IPrimaryButton) => {
  return (
    <PrimaryButtonStyled>{ctaText}</PrimaryButtonStyled>
  )
}

export default App;
