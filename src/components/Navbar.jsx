import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-logo">SMILE <span>STUDIO</span></div>
      <button
        className={`nav-toggle${open ? ' active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="תפריט"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        <li><a href="#services" onClick={() => setOpen(false)}>שירותים</a></li>
        <li><a href="#team" onClick={() => setOpen(false)}>הצוות</a></li>
        <li><a href="#gallery" onClick={() => setOpen(false)}>גלריה</a></li>
        <li><a href="#pricing" onClick={() => setOpen(false)}>מחירים</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>יצירת קשר</a></li>
        <li><a href="#booking" className="nav-cta" onClick={() => setOpen(false)}>קביעת תור</a></li>
      </ul>
    </nav>
  );
}
