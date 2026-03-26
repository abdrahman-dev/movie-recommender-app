import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">MovieApp</h2>
          <p className="footer-desc">
            Discover movies, save favorites, and explore new vibes.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favorites">Favorites</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Movie App. All rights reserved.
      </div>
    </footer>
  );
}