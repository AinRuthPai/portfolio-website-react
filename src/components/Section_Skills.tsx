import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function SectionSkills() {
    return (
        <>
            <Section>
                <h3>Skills</h3>
                <div>
                    <div>
                        <SkillsImg
                            src={process.env.PUBLIC_URL + '/img/html5.png'}
                            className="skills_logo"
                            alt="html5"
                        />
                        <SkillsImg src={process.env.PUBLIC_URL + '/img/css3.png'} className="skills_logo" alt="css3" />
                        <SkillsImg src={process.env.PUBLIC_URL + '/img/js.png'} className="skills_logo" alt="js" />
                    </div>
                    <div>
                        <SkillsImg
                            src={process.env.PUBLIC_URL + '/img/react.png'}
                            className="skills_logo"
                            alt="react"
                        />
                        <SkillsImg
                            src={process.env.PUBLIC_URL + '/img/redux.png'}
                            className="skills_logo"
                            alt="redux"
                        />
                        <SkillsImg
                            src={process.env.PUBLIC_URL + '/img/typescript.png'}
                            className="skills_logo"
                            alt="typescript"
                        />
                    </div>
                </div>
                <SkillsText>
                    <p>
                        <FontAwesomeIcon icon={faCheck} className="faCheck icon" />웹 표준, 웹 접근성을 고려한{' '}
                        <strong>시멘틱 마크업</strong> 작업이 가능합니다.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCheck} className="faCheck icon" />
                        JavaScript, React를 사용하여 <strong>DOM 객체 제어</strong>가 가능합니다.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCheck} className="faCheck icon" />
                        React Hooks를 이용한 <strong>함수형 기반</strong>의 코드를 작성합니다.
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCheck} className="faCheck icon" />
                        React-Redux를 이용하여 <strong>상태 관리</strong>가 가능합니다.
                    </p>
                </SkillsText>
            </Section>
        </>
    );
}

const SkillsImg = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
    object-fit: contain;

    @media screen and (max-width: 1024px) {
        width: 50%;
        margin: 5px;
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 40px;

    > div:nth-child(2) {
        margin-top: 40px;
    }

    @media screen and (max-width: 1024px) {
        > div:nth-child(2) {
            display: flex;
            margin: 0 auto;
            margin-top: 10px;
        }
    }
`;

const SkillsText = styled.div`
    margin-top: 40px;
    font-size: 20px;

    > p {
        line-height: 150%;
    }

    @media screen and (max-width: 1024px) {
        margin: 0 auto;
    }
`;
