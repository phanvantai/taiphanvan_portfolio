"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function DownloadSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    return (
        <section id="download" className="download-section">
            <div className="container">
                <div className="download-content">
                    <div className="download-text">
                        <h2 className="section-title">{t.download.title}</h2>
                        <p className="section-subtitle">{t.download.subtitle}</p>
                        <p className="download-description">{t.download.description}</p>

                        <div className="download-buttons">
                            <a
                                href="https://github.com/phanvantai/quick_spend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary github-btn"
                            >
                                <i className="fab fa-github"></i>
                                {t.download.githubBtn}
                            </a>
                            <div className="coming-soon-badge">
                                {t.download.comingSoon}
                            </div>
                        </div>

                        <div className="requirements">
                            <h3>{t.download.requirements.title}</h3>
                            <ul>
                                {t.download.requirements.items.map((item, index) => (
                                    <li key={index}>
                                        <i className="fas fa-check"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="download-image">
                        <div className="phone-mockup-small">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
