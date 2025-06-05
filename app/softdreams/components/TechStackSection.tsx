"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function TechStackSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    return (
        <section id="tech-stack" className="tech-stack-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.techStack.title}</h2>
                    <p className="section-subtitle">{t.techStack.subtitle}</p>
                </div>

                <div className="tech-grid">
                    {t.techStack.items.map((tech, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon">{tech.icon}</div>
                            <h3 className="tech-name">{tech.name}</h3>
                            <p className="tech-description">{tech.description}</p>
                        </div>
                    ))}
                </div>

                <div className="tech-stats">
                    <div className="stat-item">
                        <div className="stat-number">MVVM</div>
                        <div className="stat-label">Architecture</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">80%+</div>
                        <div className="stat-label">Test Coverage</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">iOS 17+</div>
                        <div className="stat-label">Minimum Version</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">TDD</div>
                        <div className="stat-label">Development</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
