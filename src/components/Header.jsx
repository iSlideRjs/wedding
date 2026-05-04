import da from '../assets/da.png';

function Header() {
  return (
    <section className="section-header">
      {/* Верхняя надпись */}
      <div className="header-top-text">ПРИГЛАШЕНИЕ НА СВАДЬБУ</div>

      {/* Монограмма */}
      <div className="monogram-wrapper">
        <img src={da} alt="Монограмма Д & А" className="monogram-img-png" />
      </div>

      {/* Имена */}
      <div className="header-names">
        DMITRIY
        <br />
        ALEKSANDRA
      </div>

      {/* Подстрочник */}
      <div className="header-subtext">
        БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС НА НАШЕМ СВАДЕБНОМ ТОРЖЕСТВЕ!
      </div>

      {/* Дата — поставим твой май 2026 */}
      <div className="header-date">04.07.26</div>

      {/* Маленький разделитель снизу (кольца или бесконечность) */}
      <div style={{ marginTop: '30px', color: '#C08261', fontSize: '1.5rem' }}>
        ∞
      </div>
    </section>
  );
}

export default Header;
