// ヘッダーのHTMLテンプレート
const headerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <div class="logo-text">
                    <span class="logo-main">MONOLIT</span>
                    <span class="logo-sub">GIRLS BAR</span>
                </div>
            </a>
            <ul class="nav-menu">
                <li><a href="index.html" class="nav-link" id="nav-home">HOME</a></li>
                <li><a href="menu.html" class="nav-link" id="nav-menu">MENU</a></li>
                <li><a href="recruitment.html" class="nav-link" id="nav-recruitment">RECRUITMENT</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
`;

// フッターのHTMLテンプレート
const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-main">
                    <h2 class="footer-logo">MONOLIT</h2>
                    <div class="footer-links">
                        <div class="footer-section">
                            <h3>PAGES</h3>
                            <ul>
                                <li><a href="index.html">HOME</a></li>
                                <li><a href="menu.html">MENU & PRICE</a></li>
                                <li><a href="recruitment.html">RECRUITMENT</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <div class="contact-icons">
                                <a href="tel:090-62920952" class="contact-icon" title="電話">
                                    <img src="https://img.icons8.com/ios-glyphs/30/d8b4d8/phone--v1.png" alt="Phone" />
                                </a>
                                <a href="mailto:info@monolit-gb.com" class="contact-icon" title="メール">
                                    <img src="https://img.icons8.com/ios-glyphs/30/d8b4d8/new-post.png" alt="Email" />
                                </a>
                                <a href="https://line.me/R/ti/p/@717vcsbk" class="contact-icon" title="LINE">
                                    <img src="https://img.icons8.com/ios-glyphs/30/d8b4d8/line-me.png" alt="LINE" />
                                </a>
                                <a href="https://www.instagram.com/girlsbarmonolit?igsh=MW42MzVkd2JvNzRldg==" class="contact-icon" title="Instagram">
                                    <img src="https://img.icons8.com/ios-glyphs/30/d8b4d8/instagram-new.png" alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Girls Bar Monolit. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
`;

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーを挿入
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = headerHTML;
    }
    
    // フッターを挿入
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
    }
    
    // common.jsを読み込み
    const script = document.createElement('script');
    script.src = 'js/common.js';
    document.body.appendChild(script);
});