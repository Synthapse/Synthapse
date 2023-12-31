import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Route, Routes, HashRouter, useNavigate } from 'react-router-dom';
import main from './images/hero.webp';
import mainMobile from './images/heroMobile.webp';
import voicesense from './images/voicesense.jpg';
import cognispace from './images/cognispace.jpg';
import './App.css';
import styled from 'styled-components';
import { Technology } from './Technology';
import Services from './Services';
import Team from './Team';

import Contact from './Contact';
import Projects from './Projects';

const voiceSenseUrl = "https://storage.googleapis.com/voicesense/index.html"
const cogniSpaceUrl = "https://storage.googleapis.com/cognispace/index.html#/food"



function App() {
  return (
    <HashRouter>
      <Logo src={logo} alt="logo" />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

const MainContainer = styled.div`
  h1 {
    font-family: Gilroy-Medium;
  }

  p {
    font-size:16px;
  }

  @media (max-width: 768px) {

    h3{
      font-size:18px;
    }

    p {
      font-size:14px;
    }
  }
`

const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Projects/>
      {/* <Services /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      <Technology />
    </MainContainer>
  )
}

const ProjectsContainer = styled.div`
  margin: 5% 0;
  `

export const primaryColor = "#F87C56";
// export const primaryGradient = "linear-gradient(to right, #de6161, #2657eb)"
export const primaryGradient = "linear-gradient(to right, #2196f3, #f44336)"


const Logo = styled.img`
  width: 120px;
  position: absolute;
  top: 40px;
  left: 40px;

  @media (max-width: 768px){
    left: 20px;
  }
`

const HeroContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) { 
    flex-direction: column;
  }
`

const HeroImageContainer = styled.div`
  width: 46%;
  min-height:100vh;
  background-size: cover;
  background-image: url(${main});
  @media (max-width: 768px) { 
    width: 100%;
    min-height:320px;
    max-height:320px;
    background-size: contain; 
    background-image: url(${mainMobile});
    background-repeat: no-repeat;
  }

  `

const HeroHeader = styled.div`
  background: #1B1B1E;
  width: 54%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10%;
  text-align:left;
  font-family: Gilroy-Regular;
  padding: 32px;
  
  > h1 {
    width:70%;
    font-family: Gilroy-Regular;
    color: white;
  }

  @media (max-width: 768px) { 
    width: calc(100% - 32px);
    padding: 18px;
    height: 65vh;
    > h1 {
      width:100%;
    }
  }
  `

  // background: ${primaryGradient};
const PrimaryButtonStyled = styled.button`
  background: ${primaryColor};
  color: #fff;
  font-family: Gilroy-SemiBold;
  border: none;
  height: 40px;
  width: 240px;
  &:hover {
    cursor: pointer;
  }
  `





const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

export const Hero = () => {

  const navigation = useNavigate();

  const navigateToProjects = () => {
    navigation("/projects")
  }

  const bookMeeting = () => {
    window.open("https://calendly.com/synthapseai/business-analysis")
}

  return (
    <HeroContainer>
      <HeroHeader>
        <h1>Shaping Earth IT<br/>
          with Artificial Intelligence</h1>
        <PrimaryButton onClick={() => bookMeeting()} ctaText={"Schedule Meeting"} />
      </HeroHeader>
      <HeroImageContainer />
    </HeroContainer>

  )
}

interface IPrimaryButton {
  ctaText: string
  onClick?: () => void
}

export const PrimaryButton = ({ onClick, ctaText }: IPrimaryButton) => {
  return (
    <PrimaryButtonStyled onClick={() => onClick && onClick()}>{ctaText}</PrimaryButtonStyled>
  )
}


const ProjectContainer = styled.div`
  display: flex;
  padding: 40px 40px;
  justify-content: space-between;
  @media (max-width: 768px) { 
    flex-direction: column;
    flex-flow: none;
    padding: 40px 20px;
  }
`

const ProjectHeader = styled.div`
  width: 39%;
  text-align: left;
  @media (max-width: 768px) { 
    width: 100%;
  }
`


interface IProject {
  header: string,
  subHeader: string,
  description: string,
  imgSource: string,
  productHuntUrl?: string,
  link: string,
  isReverse?: boolean,
  videoUrl: string,
}

const Project = ({ header, subHeader, description, imgSource, productHuntUrl, link, isReverse = false, videoUrl }: IProject) => {

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <ProjectContainer style={isReverse && !isMobile ? { flexFlow: 'row-reverse' } : {}}>
      <Video url={videoUrl} />
      <ProjectHeader>
        <h2>{header}</h2>
        <h3>{subHeader}</h3>
        <p>
          {description}
        </p>
        <Links>
        </Links>
      </ProjectHeader>
    </ProjectContainer>
  )
}

interface IVideo {
  url: string
}


const Video = ({ url }: IVideo) => {

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  const urlEmbedded = url.replace('watch?v=', 'embed/');

  return (
    <iframe
      width={isMobile ? "100%" : "560"}
      height="315"
      src={urlEmbedded}
      title="Youtube Player"
      allowFullScreen
    />
  );
};
export default App;
