"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

type FeatureItem = {
    icon: string;
    title: string;
    description: string;
};

export default function FeaturesSection() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    const renderFeatureGrid = (title: string, items: FeatureItem[]) => (
        <div className="feature-category">
            <h3 className="feature-category-title">{title}</h3>
            <div className="features-grid">
                {items.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <h4 className="feature-title">{feature.title}</h4>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="features" className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.features.title}</h2>
                    <p className="section-subtitle">{t.features.subtitle}</p>
                </div>

                {renderFeatureGrid(t.features.coreFeatures.title, t.features.coreFeatures.items)}
                {renderFeatureGrid(t.features.subscriptionFeatures.title, t.features.subscriptionFeatures.items)}
                {renderFeatureGrid(t.features.smartFeatures.title, t.features.smartFeatures.items)}
            </div>
        </section>
    )
}
