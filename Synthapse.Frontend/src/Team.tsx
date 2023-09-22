import styled from "styled-components"
import githubLogo from "./images/githublogo.png"
import { Link } from "./App"

import user1 from "./images/user1.png";
import user2 from "./images/user2.png";



const team = [
    {
        name: "Piotr Żak",
        role: "AI Engineer",
        imgSrc: user1,
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
        imgSrc: user2,
        githubUrl: "https://github.com/shail-git",
    }
]

export const Container = styled.div`
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
    margin-right: 20px;
    align-items: justify;
    > h3 {
        margin:20px 0 0 0 ;
        padding:0;
        font-size: 16px;
    }
    > p {
        margin: 0 0 10px 0;
        padding: 0;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        margin: 5% 0%;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
    `

const AboutUs = styled.div`
    width: 60%;
    text-align:left;

    @media (max-width: 768px) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`

const TeamMembers = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-flow: none;
    }
`

const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #7a6e6e;
`

const Logo = styled.img`
    width:14px;
    height: 14px;
    `


const Team = () => {
    return (
        <Container>
            <h1>About</h1>
            <AboutUs>
                <h3>While our members are scattered around the world, technology erases geographical barriers. Synthapse collaborate seamlessly across different time zones, sharing insights, working on projects, and expanding the boundaries of AI applications. We are open to forging a commercial partnership with new clients and expanding our pool of experts.</h3>
                <TeamMembers>
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
                    <TeamMember>
                        <Link target="_blank" href="mailto:synthapseai@gmail.com">Join to us</Link>
                    </TeamMember>
                </TeamMembers>
            </AboutUs>
        </Container>
    )
}

export default Team;