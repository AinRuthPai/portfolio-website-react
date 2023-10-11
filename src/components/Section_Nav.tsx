import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SectionNav() {
    return (
        <Nav>
            <img src={process.env.PUBLIC_URL + '/img/myimg.jpg'} alt="myimg" />
            <p>Baek HoonChan</p>
            <div>
                <p>
                    <LinkStyle to="/portfolio-website-react">PROJECT</LinkStyle>
                </p>
                <p>
                    <LinkStyle to="/portfolio-website-react/skills">SKILLS</LinkStyle>
                </p>
                <p>
                    <LinkStyle to="/portfolio-website-react/aboutme">ABOUT ME</LinkStyle>
                </p>
            </div>
            <div>
                <p>Tel : 010-9159-0579</p>
                <p>E-mail : untitle@gmail.com</p>
            </div>
            <div>
                <a href="https://github.com/AinRuthPai" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/img/github.png'} alt="footer_github" width="30px" />
                </a>
                <a href="https://velog.io/@ainruthpai" target="_blank" rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL + '/img/velog.jpg'} alt="footer_velog" width="30px" />
                </a>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    width: 20%;
    height: 100%;
    margin-top: 3%;

    > img:first-child {
        width: 75%;
        object-fit: contain;
    }

    > p:nth-child(2) {
        font-size: 18px;
    }

    > div:nth-child(3) {
        margin: 20% 0;
        font-size: 26px;
    }

    > div:nth-child(4) {
        margin-bottom: 10%;
        color: #7f7f7f;
        /* line-height: 8px; */
    }

    > div:last-child > a > img {
        width: 40px;
        margin-left: 10px;
        border-radius: 50%;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;

        > img:first-child {
            display: none;
        }

        > p:nth-child(2) {
            font-size: 18px;
            margin: 10px 0;
        }

        > div:nth-child(3) {
            display: flex;
            margin: 0;
            font-size: 16px;

            p {
                margin-right: 10px;
            }
        }

        > div:nth-child(4) {
            display: none;
        }

        > div:last-child > a > img {
            width: 32px;
        }
    }
`;

const LinkStyle = styled(Link)`
    color: black;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        color: #7f7f7f;
    }
`;
