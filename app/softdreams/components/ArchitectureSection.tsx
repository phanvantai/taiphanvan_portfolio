"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function ArchitectureSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    return (
        <section id="architecture" className="architecture-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.architecture.title}</h2>
                    <p className="section-subtitle">{t.architecture.subtitle}</p>
                    <p className="architecture-description">{t.architecture.description}</p>
                </div>

                <div className="architecture-content">
                    <div className="architecture-diagram">
                        <div className="layer view-layer">
                            <h4>Views (SwiftUI)</h4>
                            <div className="layer-items">
                                <span>HeroSection</span>
                                <span>OnboardingView</span>
                                <span>StoryGenerationView</span>
                                <span>LibraryView</span>
                            </div>
                        </div>
                        <div className="layer viewmodel-layer">
                            <h4>ViewModels</h4>
                            <div className="layer-items">
                                <span>AppViewModel</span>
                                <span>StoryGenerationViewModel</span>
                                <span>LibraryViewModel</span>
                                <span>SettingsViewModel</span>
                            </div>
                        </div>
                        <div className="layer service-layer">
                            <h4>Services</h4>
                            <div className="layer-items">
                                <span>StoryGenerationService</span>
                                <span>CoreDataService</span>
                                <span>NotificationService</span>
                                <span>StoreKitService</span>
                            </div>
                        </div>
                        <div className="layer model-layer">
                            <h4>Models & Data</h4>
                            <div className="layer-items">
                                <span>Story</span>
                                <span>UserProfile</span>
                                <span>StoryOptions</span>
                                <span>CoreData Stack</span>
                            </div>
                        </div>
                    </div>

                    <div className="architecture-features">
                        {t.architecture.features.map((feature, index) => (
                            <div key={index} className="architecture-feature">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
