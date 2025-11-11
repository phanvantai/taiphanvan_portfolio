"use client"

import Link from 'next/link'

export default function QuickSpendFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="softdreams-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Quick Spend</h3>
                        <p>Smart expense tracking with voice input and AI categorization</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#tech-stack">Tech Stack</a></li>
                            <li><a href="#download">Download</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/quickspend/privacy">Privacy Policy</Link></li>
                            <li><Link href="/quickspend/terms">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://github.com/phanvantai/quick_spend" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto:taipv.swe@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Quick Spend by Tai Phan Van. Open Source Software.</p>
                </div>
            </div>
        </footer>
    )
}
