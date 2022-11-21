function SectionFooter() {
  return (
    <>
      <div className='footer'>
        <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
          <img src={process.env.PUBLIC_URL + "/img/github.png"} className='footer_github' alt='footer_github' />
        </a>
        <a href='https://velog.io/@ainruthpai' target='_blank' rel='noopener noreferrer'>
          <img src={process.env.PUBLIC_URL + "/img/velog.jpg"} className='footer_velog' alt='footer_velog' />
        </a>
      </div>
    </>
  );
}

export default SectionFooter;
