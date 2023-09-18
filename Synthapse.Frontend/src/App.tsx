import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import main from './images/hero.jpg';
import mainMobile from './images/heroMobile.jpg';
import voicesense from './images/voicesense.jpg';
import cognispace from './images/cognispace.jpg';
import './App.css';
import styled from 'styled-components';
import { Technology } from './Technology';
import Services from './Services';
import Team from './Team';
import ProductHunt from './images/productHunt.png';

const voiceSenseUrl = "https://storage.googleapis.com/voicesense/index.html"
const cogniSpaceUrl = "https://storage.googleapis.com/cognispace/index.html#/food"

const header = "Voicesense"
const subHeader = "Trusted source for accurate news, free from fake news and bias.";
const description = "Our advanced AI algorithms curate a personalized news feed tailored to your interests, ensuring you stay informed about what matters most to you. We provide real-time updates from reputable sources, all within a user-friendly interface. Your privacy is our priority, as we deliver the news you need without compromising your data security.";
const videoUrl = "https://www.youtube.com/watch?v=owqWLnyKZeg";
const productHuntUrl = "https://www.producthunt.com/posts/voicesense"

const header2 = "Cognispace"
const subHeader2 = "AI-driven nutrition analysis for informed, personalized dietary choices. Revolutionize your health.";
const description2 = "Cognispace is an innovative AI project that seamlessly integrates your daily diet. Using advanced algorithms, it analyzes your nutritional intake and offers personalized recommendations for a healthier lifestyle. Experience the future of nutrition with Cognispace,  making informed dietary choices effortless and effective."
const videoUrl2 = "https://www.youtube.com/watch?v=Aa1B4ghrPNo";

function App() {
  return (
    <div className="App">
      <Hero />
      <Project header={header} subHeader={subHeader} description={description} imgSource={voicesense} link={voiceSenseUrl} videoUrl={videoUrl} productHuntUrl={productHuntUrl} />
      <Project header={header2} subHeader={subHeader2} description={description2} imgSource={cognispace} link={cogniSpaceUrl} isReverse videoUrl={videoUrl2} />
      <Services />
      <Team />
      <Technology />
    </div>
  );
}

export const primaryColor = "#FD6E43";


const Logo = styled.img`
  width: 160px;
  position: absolute;
  top: 40px;
`

const HeroContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) { 
    flex-direction: column;
  }
`

const HeroImageContainer = styled.div`
  width: 50%;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:left;
  font-family: Gilroy-Regular;
  color: #959595;
  padding: 32px;
  
  > h1 {
    width:70%;
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

const Link = styled.a`
  color: ${primaryColor};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
  `

const ProductHuntImage = styled.img`
  width: 80px;
  `

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeader>
        <Logo src={logo} alt="logo" />
        <h1>Shaping Tomorrow's World with
          Collective Intelligence</h1>
        <PrimaryButton ctaText={"Explore Ai Solutions"} />
        <br />
        <Link>Join the collective mind</Link>
      </HeroHeader>
      <HeroImageContainer />
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


const ProjectContainer = styled.div`
  display: flex;
  padding: 5% 5%;
  justify-content: space-between;
  @media (max-width: 768px) { 
    flex-direction: column;
    flex-flow: none;
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
          <Link target="_blank" href={link}>View Online</Link>
          {productHuntUrl && <Link target="_blank" href={productHuntUrl}>
            <ProductHuntImage src={ProductHunt} />
          </Link>}
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
