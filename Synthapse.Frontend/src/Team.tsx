import styled from "styled-components"
import githubLogo from "./images/githublogo.png"



const team = [
    {
        name: "Piotr Żak",
        role: "AI Engineer",
        imgSrc: "",
        githubUrl: "https://github.com/PiotrZak",
    },
    {
        name: "Sahil Tailor",
        role: "AI Engineer",
        imgSrc: "",
        githubUrl: "https://github.com/Harry19s",
    },
    {
        name: "Shail Shah",
        role: "AI Engineer",
        imgSrc: "",
        githubUrl: "https://github.com/shail-git",
    }
]

const TeamContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5% 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-flow: none;
    }

    `

const TeamMember = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > h3{
        margin:20px 0 0 0 ;
        padding:0
    }
    > p {
        margin: 0 0 10px 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        margin: 5% 0%;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
    `

const Avatar = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #7a6e6e;
`

const Logo = styled.img`
    width:24px;
    height: 24px;
    `


const Team = () => {
    return (
        <TeamContainer>
            {team.map((member, index) => {
                return (
                    <TeamMember key={index}>
                        <Avatar src={member.imgSrc} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <a target="_blank" href={member.githubUrl}><Logo src={githubLogo} /></a>
                    </TeamMember>
                )
            }
            )}
        </TeamContainer>
    )
}

export default Team;