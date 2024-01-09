import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    FacebookShareCount,
    LinkedinIcon,
    LinkedinShareButton,
    XIcon,
    TwitterShareButton,
    RedditIcon,
    RedditShareButton,
    RedditShareCount,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import styled from "styled-components";


const ShareContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 10%;
    right: 20px;
    `

export const Share = () => {
    const shareUrl = window.location.href;
    const title = "GitHub";

    return (
        <ShareContainer>
            <div>
                <FacebookShareButton
                    url={shareUrl}

                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <div>
                    <FacebookShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count"
                    >
                        {(count) => count}
                    </FacebookShareCount>
                </div>
            </div>

            <div>
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"

                >
                    <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
            </div>

            <div>
                <TwitterShareButton
                    url={shareUrl}
                    title={title}

                >
                    <XIcon size={32} round />
                </TwitterShareButton>
            </div>

            <div>
                <TelegramShareButton
                    url={shareUrl}
                    title={title}

                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
            </div>

            <div>
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "

                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>

            <div>
                <LinkedinShareButton
                    url={shareUrl}

                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div>
                <RedditShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}

                >
                    <RedditIcon size={32} round />
                </RedditShareButton>

                <div>
                    <RedditShareCount
                        url={shareUrl}
                        className="Demo__some-network__share-count"
                    />
                </div>
            </div>

            <div>
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>

        </ShareContainer>
    );
}