"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'
import '../styles.css'

export default function PrivacyPolicyPage() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];

    return (
        <div className="privacy-page">
            <div className="container">
                <div className="privacy-header">
                    <h1 className="privacy-title">{t.privacy.title}</h1>
                    <p className="privacy-last-updated">{t.privacy.lastUpdated}</p>
                </div>

                <div className="privacy-content">
                    {/* Introduction */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.introduction.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.introduction.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Data Collection */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.dataCollection.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.dataCollection.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <ul className="privacy-list">
                                {t.privacy.sections.dataCollection.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Data Storage */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.dataStorage.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.dataStorage.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* AI Data Processing */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.aiDataProcessing.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.aiDataProcessing.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.dataSharing.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.dataSharing.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* User Rights */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.userRights.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.userRights.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <ul className="privacy-list">
                                {t.privacy.sections.userRights.rights.map((right, index) => (
                                    <li key={index}>{right}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Security */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.security.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.security.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Changes to Policy */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.changes.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.changes.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.privacy.sections.contact.title}</h2>
                        <div className="section-content">
                            {t.privacy.sections.contact.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Back to App Button */}
                <div className="privacy-footer">
                    <a href="/quickspend" className="back-to-app-btn">
                        <i className="fas fa-arrow-left"></i>
                        {language === 'en' ? 'Back to Quick Spend' : 'Quay lại Quick Spend'}
                    </a>
                </div>
            </div>
        </div>
    )
}
