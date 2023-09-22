import styled from "styled-components";
import { PrimaryButton } from "./App";
import { Container } from "./Team";



const ContactSection = styled.div`
    width: 60%;
    text-align:center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    >h1 {
        margin:0;
        padding:0;
    }
    >h3 {
        margin:10px 0;
        padding:0;
    }
    >p {
        text-align:center;
    }
`

const Contact = () => {

    const bookMeeting = () => {
        window.open("https://calendly.com/piotrzak77/business-analysis")
    }

    return (
        <Container>
            <ContactSection>
                <h1>Ready to See What AI Can Do for Your Business?</h1>
                <h3>Let’s dive deeper - schedule a call with our team!</h3>
                <p>At Synthapse, we're not here to sell you buzzwords or empty promises.
                    We're here to show you how AI can bring tangible benefits to your business.
                    Our mission is simple: to help you thrive in a data-driven world.</p>
                <PrimaryButton onClick={() => bookMeeting()} ctaText={"Schedule a call"} />
            </ContactSection>
        </Container>
    )
}

export default Contact;