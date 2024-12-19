import React, { useState } from "react";
import "./Footer.css";

function Footer({ setPage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLinkClick = (pageIndex) => {
        setPage(pageIndex);
        setMenuOpen(false);
    };

    return (
        <footer className="footer">
            <div className="button_container">
                <button
                    className={`menu_button ${menuOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </button>
                <a href="https://trip-quest.jp/" className="official_button-link">
                    <button className="official_button">
                        TripQuest公式<img src="../../public/official_Vector.svg" alt="◇" className="official_" />
                    </button>
                </a>
            </div>
            <div className={`menu_overlay ${menuOpen ? "active" : ""}`}>
                <nav className="menu">
                    <ul className="footer_nav-list">
                        <li className="footer_nav-item">
                            <button onClick={() => handleLinkClick(0)} className="footer_nav-link">トップ</button>
                        </li>
                        <li className="footer_nav-item">
                            <button onClick={() => handleLinkClick(1)} className="footer_nav-link">お悩み</button>
                        </li>
                        <li className="footer_nav-item">
                            <button onClick={() => handleLinkClick(3)} className="footer_nav-link">初めに</button>
                        </li>
                        <li className="footer_nav-item">
                            <button onClick={() => handleLinkClick(5)} className="footer_nav-link">クエスト</button>
                        </li>
                        <li className="footer_nav-item">
                            <button onClick={() => handleLinkClick(8)} className="footer_nav-link">旅に出る</button>
                        </li>
                    </ul>
                    <div className="footer_copyright">
                        &copy; {new Date().getFullYear()} TripQuest. All rights reserved.
                    </div>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
