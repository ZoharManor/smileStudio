const services = [
  {
    num: '01',
    name: 'השתלות שיניים',
    desc: 'תכנון דיגיטלי מלא, שיקום מיידי ביום אחד. שתלים איכותיים, תוצאות לכל החיים.',
    tag: 'הנפוץ ביותר',
    big: true,
    desktopStyle: { gridColumn: '3', gridRow: '1 / 3' },
  },
  {
    num: '02',
    name: 'אסטטיקה דנטלית',
    desc: 'ציפויי חרסינה, הלבנה מקצועית, חיוך הוליוודי. תוצאות שמשנות חיים.',
    desktopStyle: { gridColumn: '2', gridRow: '1' },
  },
  {
    num: '03',
    name: 'יישור שיניים',
    desc: 'Diamond Provider רשמי. Invisalign לכל הגילאים, תוצאות מדהימות.',
    desktopStyle: { gridColumn: '2', gridRow: '2' },
  },
  {
    num: '04',
    name: 'טיפולי שורש',
    desc: 'אנדודונטיה תחת מיקרוסקופ דנטלי. דיוק מירבי, ללא כאב.',
    desktopStyle: { gridColumn: '3', gridRow: '3' },
  },
  {
    num: '05',
    name: 'טיפול ילדים',
    desc: 'סביבה ידידותית, צוות מיומן בטיפול בחרדות. הרגלים נכונים מגיל צעיר.',
    desktopStyle: { gridColumn: '2', gridRow: '3' },
  },
  {
    num: '06',
    name: 'שיקום מלא',
    desc: 'תוכנית טיפול מקיפה לשיקום הפה כולו. תכנון דיגיטלי, תוצאה מושלמת.',
    tag: 'פתרון מקיף',
    big: true,
    desktopStyle: { gridColumn: '1', gridRow: '1 / 3' },
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <div>
          <div className="section-label">
            <div className="eyebrow-line"></div>
            <span>השירותים שלנו</span>
          </div>
          <h2 className="section-title">פתרון מלא<br />לכל <em>צורך דנטלי</em></h2>
        </div>
        <a href="#" className="section-link">לכל השירותים ←</a>
      </div>

      <div className="services-bento">
        {services.map((s) => (
          <div
            className={`svc-card${s.big ? ' big' : ''}`}
            key={s.num}
            style={s.desktopStyle}
          >
            <span className="svc-watermark">{s.num}</span>
            <span className="svc-num">{s.num}</span>
            {s.tag && <span className="svc-tag">{s.tag}</span>}
            <h3 className="svc-name">{s.name}</h3>
            <p className="svc-desc">{s.desc}</p>
          </div>
        ))}

        {/* Empty cell row 3 col 1 */}
        <div className="svc-empty" style={{ gridColumn: '1', gridRow: '3' }}></div>
      </div>
    </section>
  );
}
