import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip, faPen, faEnvelope, faPerson, faCakeCandles } from "@fortawesome/free-solid-svg-icons";

function SectionAboutMe() {
  return (
    <section className='section about_me'>
      <h1>
        <FontAwesomeIcon icon={faIdCardClip} className='faIdCardClip icon' />
        INFOMATION
      </h1>
      <div className='row'>
        <div className='col-md-6'>
          <p>
            <FontAwesomeIcon icon={faPerson} className='faPerson icon' />
          </p>
          <p>
            신입 프론트엔드 개발자 <strong>백훈찬</strong>입니다.
          </p>
        </div>
        <div className='col-md-6'>
          <p>
            <FontAwesomeIcon icon={faCakeCandles} className='faCakeCandles icon' />
          </p>
          <p>93.02.03 / 30살 입니다.</p>
        </div>
        <div className='col-md-6'>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='faEnvelope icon' />
          </p>
          <p>untitle0203@gmail.com</p>
        </div>
        <div className='col-md-6'>
          <p>
            <FontAwesomeIcon icon={faPen} className='faPen icon' />
          </p>
          <p>수원과학대 컴퓨터정보학과</p>
        </div>
      </div>
    </section>
  );
}

export default SectionAboutMe;
