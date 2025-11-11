"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function ArchitectureSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    return (
        <section id="architecture" className="architecture-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.architecture.title}</h2>
                    <p className="section-subtitle">{t.architecture.subtitle}</p>
                </div>

                <div className="architecture-description">
                    <p>{t.architecture.description}</p>
                </div>

                <div className="architecture-grid">
                    {t.architecture.features.map((feature, index) => (
                        <div key={index} className="architecture-card">
                            <div className="architecture-icon">{feature.icon}</div>
                            <h4 className="architecture-title">{feature.title}</h4>
                            <p className="architecture-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
