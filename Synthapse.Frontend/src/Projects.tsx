import styled from "styled-components"
import React from "react";
import { FaVideo } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";




export const primaryColor = "#F87C56";

const projects = [{
    "header": "Authentic Scope",
    "subHeader": "Trusted source for accurate news, free from fake news and bias.",
    "description": "Our advanced AI algorithms curate a personalized news feed tailored to your interests, ensuring you stay informed about what matters most to you. We provide real-time updates from reputable sources, all within a user-friendly interface. Your privacy is our priority, as we deliver the news you need without compromising your data security.",
    "videoUrl": "https://www.youtube.com/watch?v=owqWLnyKZeg",
    "productHuntUrl": "https://www.producthunt.com/posts/voicesense",
    "onlineUrl": "https://storage.googleapis.com/voicesense/index.html",
    "presentationUrl": "https://docs.google.com/presentation/d/1Ovo2uoKsiAT5kHc1bfTOSIRGvLaINaFgmgx4sZG7J2Y/edit?usp=sharing",
    "sourceCodeUrl": "https://github.com/Synthapse/AuthenticScope"
}, {
    "header": "NutriInsight",
    "subHeader": "AI-driven nutrition analysis for informed, personalized dietary choices. Revolutionize your health.",
    "description": "Cognispace is an innovative AI project that seamlessly integrates your daily diet. Using advanced algorithms, it analyzes your nutritional intake and offers personalized recommendations for a healthier lifestyle. Experience the future of nutrition with Cognispace, making informed dietary choices effortless and effective.",
    "videoUrl": "https://www.youtube.com/watch?v=Aa1B4ghrPNo",
    "onlineUrl": "https://storage.googleapis.com/cognispace/index.html",
    "presentationUrl": "https://docs.google.com/presentation/d/1tPhmTusib9IYwrlWEWcFvtLTWRUTeHLurbUcZGF4gHg/edit?usp=sharing",
    "sourceCodeUrl": "https://github.com/Synthapse/NutriInsight"
},
{
    "header": "DLS Cricket",
    "subHeader": "Cricket Insight: Your ultimate source for unbiased match analyses.",
    "description": "Experience cricket like never before with our AI-driven analysis app, delivering real-time updates and comprehensive insights on matches, players, and teams. Enjoy a user-friendly interface, stay informed with accurate news, and rest easy knowing your privacy is our top priority – no fake news, no bias, just pure cricket excitement!",
    "presentationUrl": "https://docs.google.com/presentation/d/1TFjUvzqO7ooOoTha0exXPzbiLSJAS5RL/edit?usp=sharing&ouid=102624740367195243040&rtpof=true&sd=true"
}
]

const ProjectContainer = styled.div`
    display: flex;
    margin-top:80px;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 24px;
    }
`

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 40%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const ProjectsLinks = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30%;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px) {
        a  {
        margin: 10px 0;
        }
    }
`

export const Link = styled.a`
    display:flex;   
  color: ${primaryColor};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: underline;
  }
  `

const LinkIcon = styled.div`
    display: flex;
    margin-right:12px;
    align-items: center;
`

const Projects = () => {


    const viewPresentation = (pdfUrl: string, projectName: string) => {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = pdfUrl;
        link.download = projectName; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>
            {projects.map(project => {
                return (
                    <ProjectContainer>

                        <ProjectsLinks>
                            <h2>{project.header}</h2>

                            {project.videoUrl && <Link href={project.videoUrl} target="_blank"><LinkIcon><FaVideo fill={primaryColor} /></LinkIcon>Video</Link>}
                            {project.onlineUrl && <Link href={project.onlineUrl} target="_blank"><LinkIcon><FaLink fill={primaryColor}></FaLink></LinkIcon>Online</Link>}
                            {project.productHuntUrl && <Link target="_blank" href={project.productHuntUrl}><LinkIcon> <FaProductHunt fill={primaryColor} /></LinkIcon>Product Hunt</Link>}
                            {project.presentationUrl && <Link target="_blank" onClick={() => viewPresentation(project.presentationUrl, project.header)}><LinkIcon><FaCloudArrowUp fill={primaryColor}></FaCloudArrowUp> </LinkIcon>Presentation</Link>}
                            {project.sourceCodeUrl && <Link target="_blank" href={project.sourceCodeUrl} ><LinkIcon><FaCode fill={primaryColor}></FaCode> </LinkIcon>Source Code</Link>}

                        </ProjectsLinks>




                        <ProjectDescription>
                            <h3>{project.subHeader}</h3>
                            <p>
                                {project.description}
                            </p>
                        </ProjectDescription>
                    </ProjectContainer >
                )
            })}
        </>
    )
}

export default Projects