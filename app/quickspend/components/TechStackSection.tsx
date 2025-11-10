"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function TechStackSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

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
                            <h4 className="tech-name">{tech.name}</h4>
                            <p className="tech-description">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
