
import azureCloud from './images/technology/azurecloud.svg'
import azureDevops from './images/technology/azuredevops.svg'
import cassandra from './images/technology/cassandra.svg'
import docker from './images/technology/docker.svg'
import githubactions from './images/technology/githubactions.svg'
import googlecloud from './images/technology/googlecloud.svg'
import hadoop from './images/technology/hadoop.svg'
import javascript from './images/technology/javascript.svg'
import jest from './images/technology/jest.svg'
import kafka from './images/technology/kafka.svg'
import kubernetes from './images/technology/kubernetes.svg'
import msql from './images/technology/msql.svg'
import nodejs from './images/technology/nodejs.svg'
import python from './images/technology/python.svg'
import react from './images/technology/react.svg'
import scala from './images/technology/scala.svg'
import spark from './images/technology/spark.svg'
import net from './images/technology/net.svg'
import terraform from './images/technology/terraform.svg'
import styled from 'styled-components'


const TechnologyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5% 5%;

    > img {
        height: 42px;
        @media (max-width: 768px) { 
            flex-direction: column;
            flex-flow: none;
            margin: 5%;
        }
    }


    `

const Divider = styled.div`
    width: 1px;
    background-color: #7a6e6e;
    margin: 0 20px;
    @media (max-width: 768px) { 
        display: none;
    }
    `

export const Technology = () => {
    return (
        <TechnologyContainer>
            <img src={googlecloud} alt="Google Cloud" />
            <img src={azureCloud} alt="Azure Cloud" />

            <Divider />

            <img src={nodejs} alt="NodeJS" />
            <img src={python} alt="Python" />
            <img src={net} alt="Net" />
            <img src={scala} alt="Scala" />

            <Divider />

            <img src={javascript} alt="Javascript" />
            <img src={react} alt="React" />
            <img src={jest} alt="Jest" />

            <Divider />

            <img src={azureDevops} alt="Azure DevOps" />
            <img src={terraform} alt="Terraform" />
            <img src={docker} alt="Docker" />
            <img src={githubactions} alt="Github Actions" />
            <img src={kubernetes} alt="Kubernetes" />

            <Divider />

            <img src={cassandra} alt="Cassandra" />
            <img src={hadoop} alt="Hadoop" />
            <img src={kafka} alt="Kafka" />
            <img src={msql} alt="MSQL" />
            <img src={spark} alt="Spark" />


        </TechnologyContainer>
    )
}