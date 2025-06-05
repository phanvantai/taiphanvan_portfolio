"use client"

import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function ScreenshotsSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];
    const [selectedImage, setSelectedImage] = useState(0);

    const screenshots = [
        {
            id: 'onboarding',
            title: t.screenshots.gallery.onboarding,
            preview: '🎯'
        },
        {
            id: 'home',
            title: t.screenshots.gallery.home,
            preview: '🏠'
        },
        {
            id: 'generation',
            title: t.screenshots.gallery.generation,
            preview: '✨'
        },
        {
            id: 'library',
            title: t.screenshots.gallery.library,
            preview: '📚'
        },
        {
            id: 'settings',
            title: t.screenshots.gallery.settings,
            preview: '⚙️'
        },
        {
            id: 'profile',
            title: t.screenshots.gallery.profile,
            preview: '👤'
        }
    ];

    return (
        <section id="screenshots" className="screenshots-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.screenshots.title}</h2>
                    <p className="section-subtitle">{t.screenshots.subtitle}</p>
                </div>

                <div className="screenshots-content">
                    <div className="screenshot-preview">
                        <div className="main-phone-mockup">
                            <div className="phone-frame large">
                                <div className="phone-screen">
                                    <div className="screenshot-placeholder">
                                        <div className="placeholder-icon">
                                            {screenshots[selectedImage].preview}
                                        </div>
                                        <h3>{screenshots[selectedImage].title}</h3>
                                        <p>Beautiful iOS interface designed for families</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="screenshot-thumbnails">
                        {screenshots.map((screenshot, index) => (
                            <div
                                key={screenshot.id}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <div className="thumbnail-preview">
                                    <span className="thumbnail-icon">{screenshot.preview}</span>
                                </div>
                                <span className="thumbnail-title">{screenshot.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="app-highlights">
                    <div className="highlight-item">
                        <i className="fas fa-paint-brush"></i>
                        <span>Child-Friendly Design</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-universal-access"></i>
                        <span>Accessibility Ready</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-tablet-alt"></i>
                        <span>Universal App</span>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-moon"></i>
                        <span>Dark/Light Theme</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
