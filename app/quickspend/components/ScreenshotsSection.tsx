"use client"

import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function ScreenshotsSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    const screenshots = [
        { key: 'onboarding', name: t.screenshots.gallery.onboarding, file: 'onboarding.png' },
        { key: 'home', name: t.screenshots.gallery.home, file: 'home.png' },
        { key: 'voiceInput', name: t.screenshots.gallery.voiceInput, file: 'voice-input.png' },
        { key: 'statistics', name: t.screenshots.gallery.statistics, file: 'statistics.png' },
        { key: 'settings', name: t.screenshots.gallery.settings, file: 'settings.png' },
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
                            <div className="screenshot-image">
                                <Image
                                    src={`/images/quickspend/${screenshot.file}`}
                                    alt={screenshot.name}
                                    width={280}
                                    height={607}
                                    className="screenshot-img"
                                />
                                <p className="screenshot-caption">{screenshot.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
