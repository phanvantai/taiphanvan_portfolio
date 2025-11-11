"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function HeroSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    return (
        <section id="home" className="hero softdreams-hero">
            <div className="container">
                <div className="hero-content">
                    <div className="app-badges">
                        <span className="badge">{t.hero.badges.flutter}</span>
                        <span className="badge">{t.hero.badges.dart}</span>
                        <span className="badge">{t.hero.badges.firebase}</span>
                        <span className="badge">{t.hero.badges.updated}</span>
                    </div>

                    <h1>💰 {t.hero.title}</h1>
                    <h2 className="hero-subtitle">{t.hero.subtitle}</h2>
                    <p className="hero-description">{t.hero.description}</p>

                    <div className="hero-buttons">
                        <a
                            href="#download"
                            className="btn btn-primary app-store-btn"
                        >
                            <i className="fab fa-google-play"></i>
                            {t.hero.downloadBtn}
                        </a>
                        <a
                            href="https://github.com/phanvantai/quick_spend"
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
                            <span>Flutter App</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-microphone"></i>
                            <span>Voice Input</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-brain"></i>
                            <span>AI-Powered</span>
                        </div>
                        <div className="tech-item">
                            <i className="fas fa-globe"></i>
                            <span>Bilingual</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-phone-mockup">
                        <img
                            src="/images/quickspend/home.png"
                            alt="Quick Spend App Screenshot"
                            className="hero-screenshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
