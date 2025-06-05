"use client"

import { useLanguage } from '../../contexts/LanguageContext'

export default function SoftDreamsFooter() {
    const { language } = useLanguage();

    return (
        <footer className="softdreams-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>SoftDreams</h3>
                        <p>{language === 'en' ? 'Magical bedtime stories powered by AI' : 'Câu chuyện ru ngủ kỳ diệu được hỗ trợ bởi AI'}</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>{language === 'en' ? 'App' : 'Ứng Dụng'}</h4>
                            <a href="#features">{language === 'en' ? 'Features' : 'Tính Năng'}</a>
                            <a href="#download">{language === 'en' ? 'Download' : 'Tải Về'}</a>
                            <a href="#support">{language === 'en' ? 'Support' : 'Hỗ Trợ'}</a>
                        </div>

                        <div className="link-group">
                            <h4>{language === 'en' ? 'Legal' : 'Pháp Lý'}</h4>
                            <a href="/softdreams/privacy">{language === 'en' ? 'Privacy Policy' : 'Chính Sách Bảo Mật'}</a>
                            <a href="/softdreams/terms">{language === 'en' ? 'Terms of Service' : 'Điều Khoản Dịch Vụ'}</a>
                        </div>

                        <div className="link-group">
                            <h4>{language === 'en' ? 'Connect' : 'Kết Nối'}</h4>
                            <a href="mailto:taipv.swe@gmail.com">{language === 'en' ? 'Contact' : 'Liên Hệ'}</a>
                            <a href="https://github.com/taiphanvan/softdreams" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2025 SoftDreams. {language === 'en' ? 'All rights reserved.' : 'Tất cả quyền được bảo lưu.'}</p>
                    </div>
                    <div className="footer-badges">
                        <span className="badge">iOS 17.0+</span>
                        <span className="badge">Swift 5.0</span>
                        <span className="badge">SwiftUI</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
