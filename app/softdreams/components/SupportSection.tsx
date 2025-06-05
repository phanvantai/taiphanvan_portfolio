"use client"

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { useLanguage } from '../../contexts/LanguageContext'
import { softDreamsTranslations } from '../translations'

export default function SupportSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const { language } = useLanguage();
    const t = softDreamsTranslations[language];

    const [state, handleFormspreeSubmit] = useForm("mnnvnlkp");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Basic validation
        if (!formData.name.trim()) {
            alert(language === 'en' ? 'Please enter your name.' : 'Vui lòng nhập tên của bạn.')
            return
        }

        if (!formData.email.trim()) {
            alert(language === 'en' ? 'Please enter your email.' : 'Vui lòng nhập email của bạn.')
            return
        }

        if (!isValidEmail(formData.email)) {
            alert(language === 'en' ? 'Please enter a valid email address.' : 'Vui lòng nhập địa chỉ email hợp lệ.')
            return
        }

        if (!formData.message.trim()) {
            alert(language === 'en' ? 'Please enter your message.' : 'Vui lòng nhập tin nhắn của bạn.')
            return
        }

        // Submit form through Formspree
        handleFormspreeSubmit(e);
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Reset form after successful submission
    if (state.succeeded) {
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <section id="support" className="support-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t.support.title}</h2>
                    <p className="section-subtitle">{t.support.subtitle}</p>
                    <p className="section-description">{t.support.description}</p>
                </div>

                <div className="support-content">
                    <div className="support-info">
                        <div className="contact-info-card">
                            <h3>{t.support.contactInfo.title}</h3>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <p className="contact-label">Email</p>
                                    <a href={`mailto:${t.support.contactInfo.email}`} className="contact-value">
                                        {t.support.contactInfo.email}
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="contact-details">
                                    <p className="contact-label">Response Time</p>
                                    <p className="contact-value">{t.support.contactInfo.response}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="support-form">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t.support.form.name}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t.support.form.email}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder={t.support.form.subject}
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows={6}
                                    placeholder={t.support.form.message}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={state.submitting}
                            >
                                {state.submitting ? t.support.form.sending : t.support.form.submitBtn}
                                <i className="fas fa-paper-plane"></i>
                            </button>

                            {state.succeeded && (
                                <div className="form-message success-message">
                                    <i className="fas fa-check-circle"></i>
                                    {t.support.form.successMessage}
                                </div>
                            )}

                            {state.errors && Object.keys(state.errors).length > 0 && (
                                <div className="form-message error-message">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {t.support.form.errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
