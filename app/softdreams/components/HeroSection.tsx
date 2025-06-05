"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function HeroSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    return (
        <section id="home" className="hero softdreams-hero">
            <div className="container">
                <div className="hero-content">
                    <div className="app-badges">
                        <span className="badge">{t.hero.badges.ios}</span>
                        <span className="badge">{t.hero.badges.swift}</span>
                        <span className="badge">{t.hero.badges.swiftui}</span>
                        <span className="badge">{t.hero.badges.updated}</span>
                    </div>

                    <h1>📚 {t.hero.title}</h1>
                    <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
                    <p className="hero-description">{t.hero.description}</p>

                    <div className="hero-buttons">
                        <a
                            href="#download"
                            className="btn btn-primary app-store-btn"
                        >
                            <i className="fab fa-apple"></i>
                            {t.hero.downloadBtn}
                        </a>
                        <a
                            href="https://github.com/phanvantai/SoftDreams"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary github-btn"
                        >
                            <i className="fab fa-github"></i>
                            {t.hero.viewGithub}
                        </a>
                    </div>

                    <div className="tech-highlights">
                        <div className="tech-item">
                            <i className="fas fa-mobile-alt"></i>
                            <span>iOS App</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-brain"></i>
                            <span>AI-Powered</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-child"></i>
                            <span>Child-Safe</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-globe"></i>
                            <span>Multilingual</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="phone-mockup">
                        <div className="phone-frame">
                            <div className="phone-screen">
                                <div className="app-preview">
                                    <div className="preview-header">
                                        <div className="status-bar">
                                            <span>9:41</span>
                                            <div className="battery-indicator"></div>
                                        </div>
                                        <h3>SoftDreams</h3>
                                    </div>
                                    <div className="preview-content">
                                        <div className="story-card">
                                            <div className="story-emoji">🦄</div>
                                            <h4>The Magical Unicorn</h4>
                                            <p>A personalized adventure...</p>
                                        </div>
                                        <div className="generate-button">
                                            <span>✨ Generate New Story</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
