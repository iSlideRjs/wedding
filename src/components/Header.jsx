import da from '../assets/da.png';

function Header() {
  return (
    <section className="section-header">
      <div className="header-top-text">ПРИГЛАШЕНИЕ НА СВАДЬБУ</div>
      <div className="monogram-wrapper">
        <img src={da} alt="Монограмма Д & А" className="monogram-img-png" />
      </div>
      <div className="header-names">
        DMITRIY
        <br />
        ALEKSANDRA
      </div>
      <div className="header-subtext">
        БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС НА НАШЕМ СВАДЕБНОМ ТОРЖЕСТВЕ!
      </div>
      <div className="header-date">04.07.26</div>
      <div className="bottom-infinity">
        <span>&#8734;</span>
      </div>
    </section>
  );
}

export default Header;
