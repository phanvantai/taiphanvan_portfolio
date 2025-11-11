"use client"

import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { quickSpendTranslations } from '../translations'

export default function SupportSection() {
    const { language } = useLanguage();
    const t = quickSpendTranslations[language];
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xdkozvvo', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="support" className="support-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.support.title}</h2>
                    <p className="section-subtitle">{t.support.subtitle}</p>
                    <p className="support-description">{t.support.description}</p>
                </div>

                <div className="support-content">
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.support.form.name}
                                    required
                                    disabled={formStatus === 'sending'}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.support.form.email}
                                    required
                                    disabled={formStatus === 'sending'}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder={t.support.form.subject}
                                    required
                                    disabled={formStatus === 'sending'}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder={t.support.form.message}
                                    rows={5}
                                    required
                                    disabled={formStatus === 'sending'}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? t.support.form.sending : t.support.form.submitBtn}
                            </button>

                            {formStatus === 'success' && (
                                <div className="form-message success">
                                    <i className="fas fa-check-circle"></i>
                                    {t.support.form.successMessage}
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="form-message error">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {t.support.form.errorMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="contact-info">
                        <h3>{t.support.contactInfo.title}</h3>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <a href={`mailto:${t.support.contactInfo.email}`}>
                                {t.support.contactInfo.email}
                            </a>
                        </div>
                        <div className="contact-item">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/phanvantai/quick_spend" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className="response-time">
                            <i className="fas fa-clock"></i>
                            {t.support.contactInfo.response}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
