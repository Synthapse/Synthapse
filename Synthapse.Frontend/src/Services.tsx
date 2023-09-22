import { useState } from "react";
import BigData from "./images/BigData.webp";
import AIML from "./images/AIML.webp";
import Cloud from "./images/Cloud.webp";
import DevOps from "./images/Devops.webp";
import Development from "./images/Development.webp";
import styled, { css, keyframes } from "styled-components";
import { primaryColor } from "./App";


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ServicesBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) { 
        flex-direction: column;
      }
`

const ServiceHeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align:left;
    @media (max-width: 768px) { 
        margin: 10% 0%;
    }
    `

// need to fix this
const ServicesTabs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5%;
    text-align:left;
    @media (max-width: 768px) { 
        flex-direction: row;
        width: 100%;
        overflow-y: scroll;
      }
`

const Tab = styled.h2`
    font-family: Gilroy-Light;
    font-size: 24px;
    color: #7A6E6E;
    transition: 1s;
    &:hover {
        transition: 1s;
        cursor: pointer;
        font-family: Gilroy-Bold;
    }

    @media (max-width: 768px) { 
        min-width:80px;
        font-size: 18px;
        text-align: center;
        margin: 2%;
    }


  // Conditional styles for the active tab
  ${(props: any) =>
        props.isActive &&
        css`
      color: ${primaryColor};
      font-family: Gilroy-Bold;
    `}
`;

const ServiceContainer = styled.div`
    display: flex;
    border: 2px solid #7A6E6E;
    border-radius: 10px;
    min-height: 540px;
    min-width: 72%;
    max-width: 72%;
    margin: 5% 5%;
    justify-content: space-between;

    > img {
        width: 30%;
        object-fit: cover;
        border-radius: 8px 0px 8px 8px;
        @media (max-width: 768px) { 
            width: 100%;
          }
    }

    @media (max-width: 768px) { 
        flex-direction: column;
        margin: 5% 0%;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
      }
    
    `

const ServiceContent = styled.div`
    animation: ${(props: any) => (props.isActive ? css`${fadeIn} .5s ease-in-out` : 'none')};
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0% 5%;
    width: 80%;

    > h3 {
        font-size:22px;
        margin:0;
    }
    `

const Services = () => {

    const tabs = [
        {
            name: "AI & ML",
            image: AIML,
            content: [{
                header: "AI Model Development",
                content: "Supercharge your business with AI Model Development, harnessing the power of artificial intelligence to enhance efficiency and decision-making."
            },
            {
                header: "Natural langauge processing (NLP) solutions",
                content: "Unlock the potential of your data with NLP solutions, enabling you to derive valuable insights from text data effortlessly."
            },
            {
                header: "Predictive analyticts",
                content: "Stay ahead of the curve with Predictive Analytics, turning data into actionable forecasts that drive informed choices."
            },
            ]
        },
        {
            name: "Big Data",
            image: BigData,
            content: [{
                header: "Data warehousing & processing",
                content: "Maximize your data's potential with Data Warehousing and Processing, ensuring structured and accessible information for informed decision-making."
            },
            {
                header: "Data visualization",
                content: "Transform raw data into actionable insights with Data Visualization, presenting complex information in an understandable and compelling manner."
            },
            {
                header: "Business Intelligence solutions",
                content: "Empower your business with comprehensive Business Intelligence solutions, leveraging data to drive strategic growth and optimize operations."
            },
            ]
        },
        {
            name: "Cloud",
            image: Cloud,
            content: [{
                header: "Cloud migration",
                content: "Migrate your business to the cloud with ease, ensuring a seamless transition and continued support."
            },
            {
                header: "Cloud architecture",
                content: "Build a cloud architecture that meets your business needs, ensuring scalability and flexibility for future growth."
            },
            {
                header: "Cloud security",
                content: "Protect your data with Cloud Security, ensuring your business is safeguarded from threats and vulnerabilities."
            },
            ]
        },
        {
            name: "DevOps",
            image: DevOps,
            content: [{
                header: "DevOps consulting",
                content: "Optimize your business with DevOps Consulting, ensuring a smooth transition to DevOps and continued support."
            },
            {
                header: "DevOps implementation",
                content: "Implement DevOps into your business with ease, ensuring a seamless transition and continued support."
            },
            {
                header: "DevOps automation",
                content: "Automate your business with DevOps, ensuring a smooth transition and continued support."
            },
            ]
        },
        {
            name: "Web & Mobile",
            image: Development,
            content: [{
                header: "Web development",
                content: "Build a website that meets your business needs, ensuring scalability and flexibility for future growth."
            },
            {
                header: "Mobile development",
                content: "Build a mobile app that meets your business needs, ensuring scalability and flexibility for future growth."
            },
            {
                header: "UI/UX design",
                content: "Design a user interface that meets your business needs, ensuring scalability and flexibility for future growth."
            },
            ]
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])


    return (
        <ServicesBlock>
            <ServicesTabs>
                {tabs.map(tab => {
                    return (
                        <Tab
                            key={tab.name}
                            //@ts-ignore
                            isActive={activeTab.name === tab.name}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.name}
                        </Tab>
                    )
                })}
            </ServicesTabs>

            <ServiceContainer style={{ display: activeTab ? "flex" : "none" }}>
                <img src={activeTab.image} alt={activeTab.name} />
                <ServiceHeaderContent>
                    {activeTab.content.map((tab, index) => {
                        return (
                            <ServiceContent
                                //@ts-ignore
                                isActive
                                key={index}>
                                <h3>{tab.header}</h3>
                                <p>{tab.content}</p>
                            </ServiceContent>
                        )
                    })}
                </ServiceHeaderContent>
            </ServiceContainer>
        </ServicesBlock>
    )

}

export default Services;