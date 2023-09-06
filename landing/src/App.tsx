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


const Logo = styled.img`
  width: 160px;
  position: absolute;
  top: 40px;
`

const HeroContainer = styled.div`
  display: flex;
`

const HeroImage = styled.img`
  width: 100%;
  min-height:100vh;
  `

const HeroImageContainer = styled.div`
  width: 50%;
  `

const HeroHeader = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:left;
  font-family: Gilroy-Regular;
  color: #959595;
  padding: 2rem;
  `


const PrimaryButtonStyled = styled.button`
  background-color: ${primaryColor};
  color: #fff;
  font-family: Gilroy-SemiBold;
  border: none;
  height: 40px;
  width: 240px;
  &:hover {
    cursor: pointer;
  }
  `


const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        <Logo src={logo} alt="logo" />
        <h1>Shaping Tomorrow's World with<br/>
          Collective Intelligence</h1>
        <PrimaryButton ctaText={"Explore Ai Solutions"} />
        Join the collective mind
      </HeroHeader>
      <HeroImageContainer>
        <HeroImage src={main} alt="logo" />
      </HeroImageContainer>
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
