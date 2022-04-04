function SectionFooter() {
  return (
    <div className='footer'>
      <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
        <img src={process.env.PUBLIC_URL + "/img/github.png"} className='footer_github' alt='footer_github' />
      </a>
      <p>© 2022. Hoon. All rights reserved</p>
      <p>이 사이트는 상업적인 목적으로 이용되지 않습니다.</p>
    </div>
  );
}

export default SectionFooter;
