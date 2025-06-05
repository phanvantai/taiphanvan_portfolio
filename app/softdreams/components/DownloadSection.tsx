"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function DownloadSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    return (
        <section id="download" className="download-section">
            <div className="container">
                <div className="download-content">
                    <div className="download-info">
                        <h2 className="section-title">{t.download.title}</h2>
                        <p className="section-subtitle">{t.download.subtitle}</p>
                        <p className="download-description">{t.download.description}</p>

                        <div className="download-buttons">
                            <a
                                href="#"
                                className="btn btn-primary app-store-download disabled"
                            >
                                <i className="fab fa-apple"></i>
                                <div className="btn-text">
                                    <small>{t.download.comingSoon}</small>
                                    <span>App Store</span>
                                </div>
                            </a>
                            <a
                                href="https://github.com/phanvantai/SoftDreams"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary github-download"
                            >
                                <i className="fab fa-github"></i>
                                <div className="btn-text">
                                    <small>View Source</small>
                                    <span>{t.download.githubBtn}</span>
                                </div>
                            </a>
                        </div>

                        <div className="download-features">
                            <div className="feature-check">
                                <i className="fas fa-check-circle"></i>
                                <span>Free to use (3 stories/day)</span>
                            </div>
                            <div className="feature-check">
                                <i className="fas fa-check-circle"></i>
                                <span>No ads or tracking</span>
                            </div>
                            <div className="feature-check">
                                <i className="fas fa-check-circle"></i>
                                <span>Child-safe content</span>
                            </div>
                            <div className="feature-check">
                                <i className="fas fa-check-circle"></i>
                                <span>Open source</span>
                            </div>
                        </div>
                    </div>

                    <div className="requirements-card">
                        <h3>{t.download.requirements.title}</h3>
                        <ul className="requirements-list">
                            {t.download.requirements.items.map((requirement, index) => (
                                <li key={index} className="requirement-item">
                                    <i className="fas fa-chevron-right"></i>
                                    <span>{requirement}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="compatibility-badges">
                            <div className="compatibility-badge">
                                <i className="fas fa-mobile-alt"></i>
                                <span>iPhone</span>
                            </div>
                            <div className="compatibility-badge">
                                <i className="fas fa-tablet-alt"></i>
                                <span>iPad</span>
                            </div>
                            <div className="compatibility-badge">
                                <i className="fab fa-apple"></i>
                                <span>iOS 17+</span>
                            </div>
                        </div>

                        <div className="repository-stats">
                            <div className="stat">
                                <i className="fas fa-star"></i>
                                <span>MIT License</span>
                            </div>
                            <div className="stat">
                                <i className="fas fa-code-branch"></i>
                                <span>Open Source</span>
                            </div>
                            <div className="stat">
                                <i className="fas fa-shield-alt"></i>
                                <span>Privacy First</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
