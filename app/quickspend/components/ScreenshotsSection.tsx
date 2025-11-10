"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function ScreenshotsSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    const screenshots = [
        { key: 'onboarding', name: t.screenshots.gallery.onboarding },
        { key: 'home', name: t.screenshots.gallery.home },
        { key: 'voiceInput', name: t.screenshots.gallery.voiceInput },
        { key: 'statistics', name: t.screenshots.gallery.statistics },
        { key: 'settings', name: t.screenshots.gallery.settings },
    ];

    return (
        <section id="screenshots" className="screenshots-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.screenshots.title}</h2>
                    <p className="section-subtitle">{t.screenshots.subtitle}</p>
                </div>

                <div className="screenshots-gallery">
                    {screenshots.map((screenshot) => (
                        <div key={screenshot.key} className="screenshot-item">
                            <div className="screenshot-placeholder">
                                <i className="fas fa-image"></i>
                                <p>{screenshot.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
