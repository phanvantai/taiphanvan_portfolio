"use client"

import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'
import '../styles.css'

export default function TermsOfServicePage() {
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    return (
        <div className="privacy-page">
            <div className="container">
                <div className="privacy-header">
                    <h1 className="privacy-title">{t.terms.title}</h1>
                    <p className="privacy-last-updated">{t.terms.lastUpdated}</p>
                </div>

                <div className="privacy-content">
                    {/* Introduction */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.introduction.title}</h2>
                        <div className="section-content">
                            {t.terms.introduction.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Acceptance of Terms */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.acceptance.title}</h2>
                        <div className="section-content">
                            {t.terms.acceptance.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Description of Service */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.description.title}</h2>
                        <div className="section-content">
                            {t.terms.description.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.userAccounts.title}</h2>
                        <div className="section-content">
                            {t.terms.userAccounts.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* User Conduct */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.userConduct.title}</h2>
                        <div className="section-content">
                            {t.terms.userConduct.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            <ul>
                                {t.terms.userConduct.prohibitions.map((prohibition, index) => (
                                    <li key={index}>{prohibition}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Dream Content and Privacy */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.dreamContent.title}</h2>
                        <div className="section-content">
                            {t.terms.dreamContent.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* AI Services */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.aiServices.title}</h2>
                        <div className="section-content">
                            {t.terms.aiServices.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Subscriptions and Payments */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.subscriptions.title}</h2>
                        <div className="section-content">
                            {t.terms.subscriptions.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.intellectualProperty.title}</h2>
                        <div className="section-content">
                            {t.terms.intellectualProperty.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Disclaimers */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.disclaimers.title}</h2>
                        <div className="section-content">
                            {t.terms.disclaimers.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.limitationOfLiability.title}</h2>
                        <div className="section-content">
                            {t.terms.limitationOfLiability.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Termination */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.termination.title}</h2>
                        <div className="section-content">
                            {t.terms.termination.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Changes to Terms */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.changes.title}</h2>
                        <div className="section-content">
                            {t.terms.changes.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.governingLaw.title}</h2>
                        <div className="section-content">
                            {t.terms.governingLaw.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="privacy-section">
                        <h2 className="section-title">{t.terms.contact.title}</h2>
                        <div className="section-content">
                            {t.terms.contact.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="privacy-footer">
                    <a href="/softdreams" className="back-to-app-btn">
                        <i className="fas fa-arrow-left"></i>
                        {language === 'en' ? 'Back to SoftDreams' : 'Quay lại SoftDreams'}
                    </a>
                </div>
            </div>
        </div>
    )
}
