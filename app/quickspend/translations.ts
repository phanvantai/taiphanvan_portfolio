import { Language } from '../contexts/LanguageContext';

type FeatureItem = {
    icon: string;
    title: string;
    description: string;
};

type TechStackItem = {
    name: string;
    description: string;
    icon: string;
};

type ArchitectureFeature = {
    title: string;
    description: string;
    icon: string;
};

type QuickSpendTranslationDictionary = {
    [key in Language]: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
            downloadBtn: string;
            viewGithub: string;
            badges: {
                flutter: string;
                dart: string;
                firebase: string;
                updated: string;
            };
        };
        features: {
            title: string;
            subtitle: string;
            coreFeatures: {
                title: string;
                items: FeatureItem[];
            };
            inputFeatures: {
                title: string;
                items: FeatureItem[];
            };
            analyticsFeatures: {
                title: string;
                items: FeatureItem[];
            };
        };
        techStack: {
            title: string;
            subtitle: string;
            items: TechStackItem[];
        };
        architecture: {
            title: string;
            subtitle: string;
            description: string;
            features: ArchitectureFeature[];
        };
        screenshots: {
            title: string;
            subtitle: string;
            gallery: {
                onboarding: string;
                home: string;
                voiceInput: string;
                statistics: string;
                settings: string;
            };
        };
        download: {
            title: string;
            subtitle: string;
            description: string;
            githubBtn: string;
            comingSoon: string;
            requirements: {
                title: string;
                items: string[];
            };
        };
        support: {
            title: string;
            subtitle: string;
            description: string;
            form: {
                name: string;
                email: string;
                subject: string;
                message: string;
                submitBtn: string;
                sending: string;
                successMessage: string;
                errorMessage: string;
            };
            contactInfo: {
                title: string;
                email: string;
                response: string;
            };
        };
        privacy: {
            title: string;
            lastUpdated: string;
            sections: {
                introduction: {
                    title: string;
                    content: string[];
                };
                dataCollection: {
                    title: string;
                    content: string[];
                    items: string[];
                };
                dataStorage: {
                    title: string;
                    content: string[];
                };
                aiDataProcessing: {
                    title: string;
                    content: string[];
                };
                dataSharing: {
                    title: string;
                    content: string[];
                };
                userRights: {
                    title: string;
                    content: string[];
                    rights: string[];
                };
                security: {
                    title: string;
                    content: string[];
                };
                changes: {
                    title: string;
                    content: string[];
                };
                contact: {
                    title: string;
                    content: string[];
                };
            };
        };
        terms: {
            title: string;
            lastUpdated: string;
            introduction: {
                title: string;
                content: string[];
            };
            acceptance: {
                title: string;
                content: string[];
            };
            description: {
                title: string;
                content: string[];
            };
            userAccounts: {
                title: string;
                content: string[];
            };
            userConduct: {
                title: string;
                content: string[];
                prohibitions: string[];
            };
            expenseData: {
                title: string;
                content: string[];
            };
            aiServices: {
                title: string;
                content: string[];
            };
            intellectualProperty: {
                title: string;
                content: string[];
            };
            disclaimers: {
                title: string;
                content: string[];
            };
            limitationOfLiability: {
                title: string;
                content: string[];
            };
            termination: {
                title: string;
                content: string[];
            };
            changes: {
                title: string;
                content: string[];
            };
            governingLaw: {
                title: string;
                content: string[];
            };
            contact: {
                title: string;
                content: string[];
            };
        };
    };
};

export const quickSpendTranslations: QuickSpendTranslationDictionary = {
    en: {
        hero: {
            title: "Quick Spend",
            subtitle: "Smart Expense & Income Tracking with Voice Input",
            description: "A Flutter mobile app for quickly logging expenses and income with AI-powered voice input. Supports 6 languages (English, Vietnamese, Japanese, Korean, Thai, Spanish) with natural language understanding and slang recognition across 6 currencies.",
            downloadBtn: "Download on App Store",
            viewGithub: "View on GitHub",
            badges: {
                flutter: "Flutter",
                dart: "Dart",
                firebase: "Firebase AI",
                updated: "Updated 2025"
            }
        },
        features: {
            title: "Powerful Features",
            subtitle: "Everything you need for effortless expense tracking",
            coreFeatures: {
                title: "Core Features",
                items: [
                    {
                        icon: "🎤",
                        title: "Voice Input - 6 Languages",
                        description: "Natural language voice input in English, Vietnamese, Japanese, Korean, Thai, and Spanish with automatic speech-to-text conversion"
                    },
                    {
                        icon: "🤖",
                        title: "AI-Powered Categorization",
                        description: "Automatic categorization using Gemini 2.5 Flash with 15 daily AI parses, plus unlimited fallback rule-based parsing"
                    },
                    {
                        icon: "💰",
                        title: "Expense & Income Tracking",
                        description: "Track both expenses and income across 13 categories (7 expense + 6 income) with color-coded display"
                    },
                    {
                        icon: "🌏",
                        title: "Multi-Language Support",
                        description: "Fully localized in 6 languages with slang recognition (Vietnamese: ca/củ/cọc, etc.) across 6 major currencies"
                    },
                    {
                        icon: "💾",
                        title: "Local-First Storage",
                        description: "SQLite database with complete offline functionality. Export to JSON (full backup), import with duplicate detection"
                    },
                    {
                        icon: "📊",
                        title: "Advanced Analytics",
                        description: "Donut charts, trend analysis, calendar view, period filtering, and comparison between current and previous periods"
                    }
                ]
            },
            inputFeatures: {
                title: "Smart Input Recognition",
                items: [
                    {
                        icon: "💬",
                        title: "Natural Language",
                        description: "Understands phrases like '50k coffee' or '1.5m shopping' automatically across all 6 supported languages"
                    },
                    {
                        icon: "🔢",
                        title: "Multiple Formats",
                        description: "Supports various number formats: 50k, 1.5m, 100 nghìn, 45 ca tiền, and more in different languages"
                    },
                    {
                        icon: "📝",
                        title: "Batch Entry",
                        description: "Extract multiple expenses/income entries from a single voice or text input (e.g., '50k coffee and 30k parking')"
                    },
                    {
                        icon: "🏷️",
                        title: "Smart Categorization",
                        description: "13 fully localized categories with custom category creation, icons, and colors. Context-based auto-categorization"
                    }
                ]
            },
            analyticsFeatures: {
                title: "Analytics & Data Management",
                items: [
                    {
                        icon: "📈",
                        title: "Comprehensive Trends",
                        description: "Track spending/income patterns with donut charts, trend analysis, and period comparison (current vs previous)"
                    },
                    {
                        icon: "📅",
                        title: "Calendar View & Filtering",
                        description: "Calendar showing daily totals, filter by Today, Week, Month, Year, or Custom date ranges"
                    },
                    {
                        icon: "📤",
                        title: "Export & Import",
                        description: "Export to JSON for complete backup with categories and settings. Import from JSON with automatic duplicate detection"
                    },
                    {
                        icon: "✏️",
                        title: "Easy Management",
                        description: "Swipeable cards for quick editing and deletion. Custom categories with personalized icons and colors"
                    }
                ]
            }
        },
        techStack: {
            title: "Modern Tech Stack",
            subtitle: "Built with cutting-edge Flutter technologies",
            items: [
                {
                    name: "Flutter",
                    description: "Latest stable Flutter framework for cross-platform development",
                    icon: "📱"
                },
                {
                    name: "SQLite (sqflite)",
                    description: "Fast local database for reliable expense storage",
                    icon: "💾"
                },
                {
                    name: "Firebase AI + Gemini 2.5",
                    description: "AI-powered expense parsing and categorization",
                    icon: "🤖"
                },
                {
                    name: "Provider",
                    description: "State management for reactive UI updates",
                    icon: "⚡"
                },
                {
                    name: "speech_to_text",
                    description: "Voice recognition for hands-free expense logging",
                    icon: "🎤"
                },
                {
                    name: "fl_chart",
                    description: "Beautiful charts and statistics visualization",
                    icon: "📊"
                },
                {
                    name: "easy_localization",
                    description: "Seamless English and Vietnamese language support",
                    icon: "🌏"
                }
            ]
        },
        architecture: {
            title: "Clean Architecture",
            subtitle: "Provider-based state management with local-first design",
            description: "Quick Spend follows clean architecture principles with Provider for state management, ensuring a responsive and maintainable codebase.",
            features: [
                {
                    title: "Provider Pattern",
                    description: "Three main providers for expense, settings, and statistics management",
                    icon: "🏗️"
                },
                {
                    title: "Local-First Design",
                    description: "All data stored locally with SQLite for complete offline functionality",
                    icon: "📱"
                },
                {
                    title: "Service Layer",
                    description: "Dedicated services for amount parsing, language detection, and categorization",
                    icon: "🔌"
                },
                {
                    title: "Material Design 3",
                    description: "Comprehensive design system with semantic colors and spacing",
                    icon: "🎨"
                }
            ]
        },
        screenshots: {
            title: "App Screenshots",
            subtitle: "Beautiful and intuitive user interface",
            gallery: {
                onboarding: "Onboarding & Setup",
                home: "Home Screen",
                voiceInput: "Voice Input",
                statistics: "Statistics & Reports",
                settings: "Settings"
            }
        },
        download: {
            title: "Get Started Today",
            subtitle: "Download Quick Spend and take control of your finances",
            description: "Start tracking your expenses effortlessly with voice input and AI-powered categorization.",
            githubBtn: "View Source Code",
            comingSoon: "Coming Soon to App Store & Play Store",
            requirements: {
                title: "Requirements",
                items: [
                    "Android 5.0+ or iOS 12.0+",
                    "Microphone access for voice input",
                    "Internet connection for AI categorization (optional)",
                    "Completely free and open source"
                ]
            }
        },
        support: {
            title: "Support & Feedback",
            subtitle: "We're here to help improve your experience",
            description: "Have questions, feedback, or need assistance? We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                submitBtn: "Send Message",
                sending: "Sending...",
                successMessage: "Thank you for your message! We'll get back to you soon.",
                errorMessage: "Something went wrong. Please try again later."
            },
            contactInfo: {
                title: "Get in Touch",
                email: "taipv.swe@gmail.com",
                response: "We typically respond within 24 hours"
            }
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: November 2025",
            sections: {
                introduction: {
                    title: "Introduction",
                    content: [
                        "Welcome to Quick Spend, a mobile expense tracking app with voice input and AI categorization. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.",
                        "We are committed to protecting your privacy and financial data. This policy describes our practices regarding data collection and use.",
                        "By using Quick Spend, you agree to the collection and use of information in accordance with this policy."
                    ]
                },
                dataCollection: {
                    title: "Information We Collect",
                    content: [
                        "Quick Spend is designed with privacy in mind. We collect minimal information to provide expense tracking functionality:",
                        "Data collected and stored locally on your device:"
                    ],
                    items: [
                        "Expense and income data: amounts, descriptions, categories, and dates",
                        "Voice input: temporarily processed for speech-to-text conversion (not stored)",
                        "User preferences: currency, language, and app settings across 6 languages and 6 currencies",
                        "All personal data is stored locally on your device only",
                        "No financial account information or passwords are collected",
                        "Optional anonymized data for ML training: Only if you explicitly opt-in, we collect fully anonymized transaction patterns (amount, category, date) - NEVER descriptions, user IDs, or any identifiable information",
                        "Basic device information for app compatibility"
                    ]
                },
                dataStorage: {
                    title: "Data Storage",
                    content: [
                        "All your expense and income data is stored locally on your device using SQLite database.",
                        "Your data never leaves your device except when using AI categorization features or if you opt-in to ML training data collection.",
                        "You can export your data to JSON (complete backup with categories and settings) for backup purposes.",
                        "Import functionality supports JSON with automatic duplicate detection and version compatibility (v1.0-v4.0).",
                        "You have complete control over your data and can delete it at any time.",
                        "No cloud backup or sync features mean your data stays private on your device."
                    ]
                },
                aiDataProcessing: {
                    title: "AI Data Processing & ML Training",
                    content: [
                        "AI Categorization: Voice audio is temporarily sent to speech-to-text services (supports 6 languages). Transaction descriptions are sent to Firebase AI (Gemini 2.5 Flash) for parsing and categorization.",
                        "Daily limit of 15 Gemini AI parses with unlimited fallback rule-based parsing for reliability.",
                        "Only the description text is sent - no personal information or amounts.",
                        "AI processing happens in real-time and no data is stored on external servers.",
                        "Optional ML Training Data (Opt-In Only): If you explicitly consent, we collect anonymized transaction patterns (amount, category, date only) to improve future ML models.",
                        "ML training data NEVER includes descriptions, user IDs, device information, or any personally identifiable information.",
                        "You can opt-out of ML training data collection at any time in Settings.",
                        "You can disable AI features entirely and use manual entry if preferred."
                    ]
                },
                dataSharing: {
                    title: "How We Share Your Information",
                    content: [
                        "We do not sell, trade, or rent your personal expense/income data to third parties.",
                        "Limited data sharing occurs only for essential app functionality:",
                        "Speech-to-text services: Voice audio for conversion in 6 supported languages (temporary, not stored)",
                        "Firebase AI: Transaction descriptions for categorization (temporary, not stored)",
                        "Optional ML Training: Anonymized transaction patterns (amount, category, date only) if you opt-in - NEVER descriptions or identifiable info",
                        "No analytics, advertising, or user tracking services are used",
                        "Your financial data remains completely private on your device"
                    ]
                },
                userRights: {
                    title: "Your Rights and Choices",
                    content: [
                        "You have complete control over your data:"
                    ],
                    rights: [
                        "Access: All your data is accessible within the app",
                        "Modification: Edit or update any expense or income entry at any time",
                        "Deletion: Delete individual transactions or clear all data",
                        "Export: Export to JSON (full backup with categories and settings)",
                        "Import: Import from JSON with automatic duplicate detection",
                        "Disable AI: Turn off AI features and use manual entry",
                        "ML Training Opt-Out: Disable anonymized ML training data collection at any time in Settings",
                        "Custom Categories: Create personalized categories with custom icons and colors",
                        "Uninstall: Deleting the app removes all local data"
                    ]
                },
                security: {
                    title: "Data Security",
                    content: [
                        "We implement appropriate security measures to protect your information:",
                        "Local SQLite database with device-level encryption",
                        "No cloud storage means no remote data breach risk",
                        "Secure communication with AI services over HTTPS",
                        "Regular security updates and dependency patches",
                        "Open-source code available for security audits"
                    ]
                },
                changes: {
                    title: "Changes to This Privacy Policy",
                    content: [
                        "We may update this Privacy Policy from time to time. We will notify you of any changes by:",
                        "Posting the new Privacy Policy in the app",
                        "Updating the 'Last updated' date at the top of this policy",
                        "Your continued use of the app after changes constitutes acceptance of the updated policy."
                    ]
                },
                contact: {
                    title: "Contact Us",
                    content: [
                        "If you have any questions about this Privacy Policy, please contact us:",
                        "Email: taipv.swe@gmail.com",
                        "GitHub: https://github.com/phanvantai/quick_spend",
                        "We will respond to your inquiry within 30 days."
                    ]
                }
            }
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last updated: November 2025",
            introduction: {
                title: "Introduction",
                content: [
                    "Welcome to Quick Spend! These Terms of Service ('Terms') govern your use of the Quick Spend mobile application ('App', 'Service') operated by Tai Phan Van ('we', 'us', 'our').",
                    "By downloading, installing, or using our App, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.",
                    "These Terms apply to all users who access or use the Service."
                ]
            },
            acceptance: {
                title: "Acceptance of Terms",
                content: [
                    "By accessing and using Quick Spend, you accept and agree to be bound by the terms and provision of this agreement.",
                    "You must be at least 13 years old to use this Service.",
                    "The app is provided free of charge and open source under the MIT license."
                ]
            },
            description: {
                title: "Description of Service",
                content: [
                    "Quick Spend is an expense and income tracking mobile application that provides:",
                    "Voice input for quick transaction logging in 6 languages (English, Vietnamese, Japanese, Korean, Thai, Spanish)",
                    "AI-powered automatic categorization with Gemini 2.5 Flash (15 daily AI parses + unlimited fallback parsing)",
                    "Local SQLite database storage with complete offline functionality",
                    "13 default categories (7 expense + 6 income) with custom category creation",
                    "Statistics, analytics, and trend comparison with calendar view",
                    "Export to JSON and import with duplicate detection",
                    "Optional anonymized ML training data collection (opt-in only, never includes descriptions or identifiable info)",
                    "Support for 6 currencies with fully localized interfaces",
                    "The Service is provided 'as is' and we reserve the right to modify, suspend, or discontinue any part of the Service at any time."
                ]
            },
            userAccounts: {
                title: "User Accounts",
                content: [
                    "Quick Spend does not require user accounts or registration.",
                    "All data is stored locally on your device.",
                    "You are responsible for maintaining the security of your device.",
                    "We are not responsible for any loss of data due to device issues or uninstallation."
                ]
            },
            userConduct: {
                title: "User Conduct",
                content: [
                    "You agree to use the Service only for lawful purposes and in accordance with these Terms.",
                    "You agree NOT to use the Service:"
                ],
                prohibitions: [
                    "To violate any applicable local, state, national, or international law",
                    "To attempt to gain unauthorized access to the Service or its related systems",
                    "To interfere with or disrupt the Service",
                    "To use the Service for any illegal financial activities",
                    "To reverse engineer or decompile the App (except as permitted by open source license)",
                    "To use the Service to track expenses for illegal activities"
                ]
            },
            expenseData: {
                title: "Transaction Data and Privacy",
                content: [
                    "You retain full ownership of all expense and income data you enter into the Service.",
                    "Your data is stored locally on your device and is not transmitted to our servers.",
                    "Limited data (transaction descriptions) may be sent to AI services for categorization only.",
                    "Optional ML Training: If you explicitly opt-in, anonymized transaction patterns (amount, category, date only) may be collected. NEVER descriptions, user IDs, or identifiable information.",
                    "You can export your data to JSON (full backup) and are responsible for backing up if desired.",
                    "We are not responsible for any loss of data."
                ]
            },
            aiServices: {
                title: "AI Services & ML Training Data",
                content: [
                    "Quick Spend uses Firebase AI (Gemini 2.5 Flash) for automatic transaction parsing and categorization.",
                    "AI processing includes voice-to-text (6 languages) and natural language understanding with daily limit of 15 Gemini parses plus unlimited fallback parsing.",
                    "AI categorization is provided for convenience and may not always be accurate. You can review and modify AI-generated categories at any time.",
                    "Optional ML Training: You may opt-in to contribute anonymized transaction data (amount, category, date only) to help improve future ML models. This NEVER includes descriptions, user IDs, or any identifiable information.",
                    "You can opt-out of ML training data collection at any time in app Settings.",
                    "You can disable AI features entirely and use manual categorization if preferred.",
                    "We do not guarantee 100% accuracy of AI categorization."
                ]
            },
            intellectualProperty: {
                title: "Intellectual Property Rights",
                content: [
                    "Quick Spend is open source software licensed under the MIT License.",
                    "You are free to use, modify, and distribute the app in accordance with the MIT License.",
                    "The app name and branding are trademarks of Tai Phan Van.",
                    "Third-party libraries and dependencies are subject to their respective licenses."
                ]
            },
            disclaimers: {
                title: "Disclaimers",
                content: [
                    "The Service is provided on an 'as is' and 'as available' basis.",
                    "We make no warranties, express or implied, regarding the Service.",
                    "We do not warrant that the Service will be uninterrupted, secure, or error-free.",
                    "Expense and income tracking is for personal use and should not replace professional financial advice.",
                    "AI categorization and ML models are provided for convenience and may not always be accurate.",
                    "You use the Service at your own risk."
                ]
            },
            limitationOfLiability: {
                title: "Limitation of Liability",
                content: [
                    "In no event shall Tai Phan Van be liable for any indirect, incidental, special, consequential, or punitive damages.",
                    "We are not liable for any loss of data, financial losses, or damages arising from use of the Service.",
                    "Our total liability shall not exceed the amount you paid for the Service (which is $0 as it's free).",
                    "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
                ]
            },
            termination: {
                title: "Termination",
                content: [
                    "You may stop using the Service at any time by uninstalling the app.",
                    "Uninstalling the app will delete all locally stored data.",
                    "We may discontinue the Service at any time without notice.",
                    "All provisions of the Terms which by their nature should survive termination shall survive."
                ]
            },
            changes: {
                title: "Changes to Terms",
                content: [
                    "We reserve the right to modify or replace these Terms at any time.",
                    "We will provide notice of material changes through the app or GitHub repository.",
                    "By continuing to use the Service after changes, you agree to the revised terms."
                ]
            },
            governingLaw: {
                title: "Governing Law",
                content: [
                    "These Terms shall be governed by the laws of Vietnam.",
                    "Any disputes shall be resolved in the courts of Vietnam.",
                    "If any provision is held invalid, the remaining provisions shall remain in effect."
                ]
            },
            contact: {
                title: "Contact Information",
                content: [
                    "If you have any questions about these Terms of Service, please contact us:",
                    "Email: taipv.swe@gmail.com",
                    "GitHub: https://github.com/phanvantai/quick_spend"
                ]
            }
        }
    },
    vi: {
        hero: {
            title: "Quick Spend",
            subtitle: "Quản Lý Chi Tiêu & Thu Nhập Thông Minh Với Giọng Nói",
            description: "Ứng dụng Flutter quản lý chi tiêu và thu nhập nhanh chóng với giọng nói AI. Hỗ trợ 6 ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Thái, Tiếng Tây Ban Nha) với nhận dạng ngôn ngữ tự nhiên và tiếng lóng trên 6 loại tiền tệ.",
            downloadBtn: "Tải về App Store",
            viewGithub: "Xem trên GitHub",
            badges: {
                flutter: "Flutter",
                dart: "Dart",
                firebase: "Firebase AI",
                updated: "Cập nhật 2025"
            }
        },
        features: {
            title: "Tính Năng Mạnh Mẽ",
            subtitle: "Mọi thứ bạn cần để theo dõi chi tiêu dễ dàng",
            coreFeatures: {
                title: "Tính Năng Cốt Lõi",
                items: [
                    {
                        icon: "🎤",
                        title: "Nhập Giọng Nói - 6 Ngôn Ngữ",
                        description: "Nhập liệu tự nhiên bằng Tiếng Anh, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Thái và Tiếng Tây Ban Nha với chuyển đổi giọng nói tự động"
                    },
                    {
                        icon: "🤖",
                        title: "Phân Loại Bằng AI",
                        description: "Tự động phân loại bằng Gemini 2.5 Flash với 15 lượt AI mỗi ngày, cộng thêm phân tích dự phòng không giới hạn"
                    },
                    {
                        icon: "💰",
                        title: "Theo Dõi Chi Tiêu & Thu Nhập",
                        description: "Theo dõi cả chi tiêu và thu nhập qua 13 danh mục (7 chi tiêu + 6 thu nhập) với màu sắc phân biệt"
                    },
                    {
                        icon: "🌏",
                        title: "Hỗ Trợ Đa Ngôn Ngữ",
                        description: "Bản địa hóa đầy đủ cho 6 ngôn ngữ với nhận dạng tiếng lóng (Việt Nam: ca/củ/cọc, v.v.) trên 6 loại tiền tệ"
                    },
                    {
                        icon: "💾",
                        title: "Lưu Trữ Cục Bộ Ưu Tiên",
                        description: "Cơ sở dữ liệu SQLite với chức năng offline hoàn toàn. Xuất JSON (sao lưu đầy đủ), nhập với phát hiện trùng lặp"
                    },
                    {
                        icon: "📊",
                        title: "Phân Tích Nâng Cao",
                        description: "Biểu đồ tròn, phân tích xu hướng, xem lịch, lọc theo thời gian và so sánh giai đoạn hiện tại với trước đó"
                    }
                ]
            },
            inputFeatures: {
                title: "Nhận Dạng Thông Minh",
                items: [
                    {
                        icon: "💬",
                        title: "Ngôn Ngữ Tự Nhiên",
                        description: "Hiểu các cụm từ như '50k cà phê' hoặc '1.5m shopping' tự động trên tất cả 6 ngôn ngữ được hỗ trợ"
                    },
                    {
                        icon: "🔢",
                        title: "Nhiều Định Dạng",
                        description: "Hỗ trợ nhiều định dạng số: 50k, 1.5m, 100 nghìn, 45 ca tiền và nhiều hơn nữa trong các ngôn ngữ khác"
                    },
                    {
                        icon: "📝",
                        title: "Nhập Hàng Loạt",
                        description: "Trích xuất nhiều chi tiêu/thu nhập từ một lần nhập giọng nói hoặc văn bản (ví dụ: '50k cà phê và 30k đỗ xe')"
                    },
                    {
                        icon: "🏷️",
                        title: "Phân Loại Thông Minh",
                        description: "13 danh mục được bản địa hóa đầy đủ với tạo danh mục tùy chỉnh, biểu tượng và màu sắc. Tự động phân loại theo ngữ cảnh"
                    }
                ]
            },
            analyticsFeatures: {
                title: "Phân Tích & Quản Lý Dữ Liệu",
                items: [
                    {
                        icon: "📈",
                        title: "Xu Hướng Toàn Diện",
                        description: "Theo dõi mô hình chi tiêu/thu nhập với biểu đồ tròn, phân tích xu hướng và so sánh giai đoạn (hiện tại vs trước đó)"
                    },
                    {
                        icon: "📅",
                        title: "Xem Lịch & Lọc",
                        description: "Lịch hiển thị tổng hàng ngày, lọc theo Hôm nay, Tuần, Tháng, Năm hoặc Tùy chỉnh"
                    },
                    {
                        icon: "📤",
                        title: "Xuất & Nhập",
                        description: "Xuất sang JSON để sao lưu đầy đủ với danh mục và cài đặt. Nhập từ JSON với phát hiện trùng lặp tự động"
                    },
                    {
                        icon: "✏️",
                        title: "Quản Lý Dễ Dàng",
                        description: "Thẻ có thể vuốt để chỉnh sửa và xóa nhanh. Danh mục tùy chỉnh với biểu tượng và màu sắc cá nhân hóa"
                    }
                ]
            }
        },
        techStack: {
            title: "Công Nghệ Hiện Đại",
            subtitle: "Xây dựng với các công nghệ Flutter tiên tiến",
            items: [
                {
                    name: "Flutter",
                    description: "Flutter framework ổn định mới nhất cho phát triển đa nền tảng",
                    icon: "📱"
                },
                {
                    name: "SQLite (sqflite)",
                    description: "Cơ sở dữ liệu cục bộ nhanh cho lưu trữ chi tiêu đáng tin cậy",
                    icon: "💾"
                },
                {
                    name: "Firebase AI + Gemini 2.5",
                    description: "Phân tích và phân loại chi tiêu bằng AI",
                    icon: "🤖"
                },
                {
                    name: "Provider",
                    description: "Quản lý trạng thái cho cập nhật UI phản ứng",
                    icon: "⚡"
                },
                {
                    name: "speech_to_text",
                    description: "Nhận dạng giọng nói cho ghi chi tiêu rảnh tay",
                    icon: "🎤"
                },
                {
                    name: "fl_chart",
                    description: "Biểu đồ đẹp và trực quan hóa thống kê",
                    icon: "📊"
                },
                {
                    name: "easy_localization",
                    description: "Hỗ trợ ngôn ngữ tiếng Anh và tiếng Việt liền mạch",
                    icon: "🌏"
                }
            ]
        },
        architecture: {
            title: "Kiến Trúc Sạch",
            subtitle: "Quản lý trạng thái dựa trên Provider với thiết kế local-first",
            description: "Quick Spend tuân theo nguyên tắc kiến trúc sạch với Provider để quản lý trạng thái, đảm bảo codebase phản ứng và dễ bảo trì.",
            features: [
                {
                    title: "Mô Hình Provider",
                    description: "Ba provider chính cho quản lý chi tiêu, cài đặt và thống kê",
                    icon: "🏗️"
                },
                {
                    title: "Thiết Kế Local-First",
                    description: "Tất cả dữ liệu lưu cục bộ với SQLite cho chức năng offline hoàn toàn",
                    icon: "📱"
                },
                {
                    title: "Lớp Dịch Vụ",
                    description: "Các dịch vụ chuyên dụng cho phân tích số tiền, phát hiện ngôn ngữ và phân loại",
                    icon: "🔌"
                },
                {
                    title: "Material Design 3",
                    description: "Hệ thống thiết kế toàn diện với màu sắc và khoảng cách ngữ nghĩa",
                    icon: "🎨"
                }
            ]
        },
        screenshots: {
            title: "Ảnh Chụp Màn Hình",
            subtitle: "Giao diện người dùng đẹp và trực quan",
            gallery: {
                onboarding: "Giới Thiệu & Cài Đặt",
                home: "Màn Hình Chính",
                voiceInput: "Nhập Giọng Nói",
                statistics: "Thống Kê & Báo Cáo",
                settings: "Cài Đặt"
            }
        },
        download: {
            title: "Bắt Đầu Ngay Hôm Nay",
            subtitle: "Tải Quick Spend và kiểm soát tài chính của bạn",
            description: "Bắt đầu theo dõi chi tiêu dễ dàng với giọng nói và phân loại tự động bằng AI.",
            githubBtn: "Xem Mã Nguồn",
            comingSoon: "Sắp Ra Mắt Trên App Store & Play Store",
            requirements: {
                title: "Yêu Cầu",
                items: [
                    "Android 5.0+ hoặc iOS 12.0+",
                    "Quyền truy cập microphone cho nhập giọng nói",
                    "Kết nối Internet cho phân loại AI (tùy chọn)",
                    "Hoàn toàn miễn phí và mã nguồn mở"
                ]
            }
        },
        support: {
            title: "Hỗ Trợ & Phản Hồi",
            subtitle: "Chúng tôi ở đây để cải thiện trải nghiệm của bạn",
            description: "Có câu hỏi, phản hồi hoặc cần hỗ trợ? Chúng tôi rất muốn nghe từ bạn! Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất có thể.",
            form: {
                name: "Tên của bạn",
                email: "Email của bạn",
                subject: "Tiêu đề",
                message: "Tin nhắn của bạn",
                submitBtn: "Gửi tin nhắn",
                sending: "Đang gửi...",
                successMessage: "Cảm ơn tin nhắn của bạn! Chúng tôi sẽ phản hồi sớm.",
                errorMessage: "Đã xảy ra lỗi. Vui lòng thử lại sau."
            },
            contactInfo: {
                title: "Liên Hệ",
                email: "taipv.swe@gmail.com",
                response: "Chúng tôi thường phản hồi trong vòng 24 giờ"
            }
        },
        privacy: {
            title: "Chính Sách Bảo Mật",
            lastUpdated: "Cập nhật lần cuối: Tháng 11 2025",
            sections: {
                introduction: {
                    title: "Giới Thiệu",
                    content: [
                        "Chào mừng bạn đến với Quick Spend, ứng dụng theo dõi chi tiêu với giọng nói và phân loại AI. Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi sử dụng ứng dụng.",
                        "Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu tài chính của bạn. Chính sách này mô tả các thực hành của chúng tôi về thu thập và sử dụng dữ liệu.",
                        "Bằng cách sử dụng Quick Spend, bạn đồng ý với việc thu thập và sử dụng thông tin theo chính sách này."
                    ]
                },
                dataCollection: {
                    title: "Thông Tin Chúng Tôi Thu Thập",
                    content: [
                        "Quick Spend được thiết kế với tư duy bảo mật. Chúng tôi thu thập thông tin tối thiểu để cung cấp chức năng theo dõi chi tiêu:",
                        "Dữ liệu được thu thập và lưu trữ cục bộ trên thiết bị của bạn:"
                    ],
                    items: [
                        "Dữ liệu chi tiêu và thu nhập: số tiền, mô tả, danh mục và ngày tháng",
                        "Đầu vào giọng nói: được xử lý tạm thời để chuyển đổi thành văn bản (không lưu trữ)",
                        "Tùy chọn người dùng: tiền tệ, ngôn ngữ và cài đặt ứng dụng trên 6 ngôn ngữ và 6 loại tiền tệ",
                        "Tất cả dữ liệu cá nhân chỉ được lưu trữ cục bộ trên thiết bị của bạn",
                        "Không thu thập thông tin tài khoản tài chính hoặc mật khẩu",
                        "Dữ liệu ẩn danh tùy chọn cho ML training: Chỉ khi bạn chọn tham gia, chúng tôi thu thập các mẫu giao dịch ẩn danh hoàn toàn (số tiền, danh mục, ngày) - KHÔNG BAO GIỜ mô tả, ID người dùng hoặc bất kỳ thông tin nhận dạng nào",
                        "Thông tin thiết bị cơ bản để tương thích ứng dụng"
                    ]
                },
                dataStorage: {
                    title: "Lưu Trữ Dữ Liệu",
                    content: [
                        "Tất cả dữ liệu chi tiêu và thu nhập của bạn được lưu trữ cục bộ trên thiết bị bằng cơ sở dữ liệu SQLite.",
                        "Dữ liệu của bạn không bao giờ rời khỏi thiết bị trừ khi sử dụng tính năng phân loại AI hoặc nếu bạn chọn tham gia thu thập dữ liệu ML training.",
                        "Bạn có thể xuất dữ liệu sang JSON (sao lưu đầy đủ với danh mục và cài đặt) để sao lưu.",
                        "Chức năng nhập hỗ trợ JSON với phát hiện trùng lặp tự động và tương thích phiên bản (v1.0-v4.0).",
                        "Bạn có toàn quyền kiểm soát dữ liệu của mình và có thể xóa bất cứ lúc nào.",
                        "Không có tính năng sao lưu hoặc đồng bộ đám mây có nghĩa là dữ liệu của bạn vẫn riêng tư trên thiết bị."
                    ]
                },
                aiDataProcessing: {
                    title: "Xử Lý Dữ Liệu AI & ML Training",
                    content: [
                        "Phân loại AI: Âm thanh giọng nói được gửi tạm thời đến dịch vụ chuyển đổi giọng nói thành văn bản (hỗ trợ 6 ngôn ngữ). Mô tả giao dịch được gửi đến Firebase AI (Gemini 2.5 Flash) để phân tích và phân loại.",
                        "Giới hạn hàng ngày 15 lượt phân tích Gemini AI với phân tích dự phòng dựa trên quy tắc không giới hạn để đảm bảo độ tin cậy.",
                        "Chỉ văn bản mô tả được gửi - không có thông tin cá nhân hoặc số tiền.",
                        "Xử lý AI diễn ra theo thời gian thực và không lưu trữ dữ liệu trên máy chủ bên ngoài.",
                        "Dữ liệu ML Training Tùy chọn (Chỉ khi Chọn tham gia): Nếu bạn đồng ý rõ ràng, chúng tôi thu thập các mẫu giao dịch ẩn danh (chỉ số tiền, danh mục, ngày) để cải thiện các mô hình ML trong tương lai.",
                        "Dữ liệu ML training KHÔNG BAO GIỜ bao gồm mô tả, ID người dùng, thông tin thiết bị hoặc bất kỳ thông tin nhận dạng cá nhân nào.",
                        "Bạn có thể từ chối thu thập dữ liệu ML training bất cứ lúc nào trong Cài đặt.",
                        "Bạn có thể tắt hoàn toàn tính năng AI và sử dụng nhập thủ công nếu muốn."
                    ]
                },
                dataSharing: {
                    title: "Cách Chúng Tôi Chia Sẻ Thông Tin",
                    content: [
                        "Chúng tôi không bán, trao đổi hoặc cho thuê dữ liệu chi tiêu/thu nhập cá nhân của bạn cho bên thứ ba.",
                        "Chia sẻ dữ liệu hạn chế chỉ xảy ra cho chức năng thiết yếu của ứng dụng:",
                        "Dịch vụ chuyển giọng nói thành văn bản: Âm thanh giọng nói để chuyển đổi trong 6 ngôn ngữ được hỗ trợ (tạm thời, không lưu trữ)",
                        "Firebase AI: Mô tả giao dịch để phân loại (tạm thời, không lưu trữ)",
                        "ML Training Tùy chọn: Các mẫu giao dịch ẩn danh (chỉ số tiền, danh mục, ngày) nếu bạn chọn tham gia - KHÔNG BAO GIỜ mô tả hoặc thông tin nhận dạng",
                        "Không sử dụng dịch vụ phân tích, quảng cáo hoặc theo dõi người dùng",
                        "Dữ liệu tài chính của bạn hoàn toàn riêng tư trên thiết bị"
                    ]
                },
                userRights: {
                    title: "Quyền và Lựa Chọn Của Bạn",
                    content: [
                        "Bạn có toàn quyền kiểm soát dữ liệu của mình:"
                    ],
                    rights: [
                        "Truy cập: Tất cả dữ liệu của bạn có thể truy cập trong ứng dụng",
                        "Sửa đổi: Chỉnh sửa hoặc cập nhật bất kỳ giao dịch chi tiêu hoặc thu nhập nào bất cứ lúc nào",
                        "Xóa: Xóa từng giao dịch hoặc xóa tất cả dữ liệu",
                        "Xuất: Xuất sang JSON (sao lưu đầy đủ với danh mục và cài đặt)",
                        "Nhập: Nhập từ JSON với phát hiện trùng lặp tự động",
                        "Tắt AI: Tắt tính năng AI và sử dụng nhập thủ công",
                        "Từ chối ML Training: Tắt thu thập dữ liệu ML training ẩn danh bất cứ lúc nào trong Cài đặt",
                        "Danh mục Tùy chỉnh: Tạo danh mục cá nhân với biểu tượng và màu sắc tùy chỉnh",
                        "Gỡ cài đặt: Xóa ứng dụng sẽ xóa tất cả dữ liệu cục bộ"
                    ]
                },
                security: {
                    title: "Bảo Mật Dữ Liệu",
                    content: [
                        "Chúng tôi thực hiện các biện pháp bảo mật thích hợp để bảo vệ thông tin của bạn:",
                        "Cơ sở dữ liệu SQLite cục bộ với mã hóa cấp thiết bị",
                        "Không có lưu trữ đám mây có nghĩa là không có rủi ro vi phạm dữ liệu từ xa",
                        "Giao tiếp an toàn với các dịch vụ AI qua HTTPS",
                        "Cập nhật bảo mật thường xuyên và vá lỗi dependency",
                        "Mã nguồn mở có sẵn để kiểm toán bảo mật"
                    ]
                },
                changes: {
                    title: "Thay Đổi Chính Sách Bảo Mật",
                    content: [
                        "Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách:",
                        "Đăng Chính sách Bảo mật mới trong ứng dụng",
                        "Cập nhật ngày 'Cập nhật lần cuối' ở đầu chính sách này",
                        "Việc bạn tiếp tục sử dụng ứng dụng sau các thay đổi được coi là chấp nhận chính sách đã cập nhật."
                    ]
                },
                contact: {
                    title: "Liên Hệ Với Chúng Tôi",
                    content: [
                        "Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này, vui lòng liên hệ:",
                        "Email: taipv.swe@gmail.com",
                        "GitHub: https://github.com/phanvantai/quick_spend",
                        "Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 30 ngày."
                    ]
                }
            }
        },
        terms: {
            title: "Điều Khoản Dịch Vụ",
            lastUpdated: "Cập nhật lần cuối: Tháng 11 2025",
            introduction: {
                title: "Giới Thiệu",
                content: [
                    "Chào mừng bạn đến với Quick Spend! Các Điều khoản Dịch vụ này ('Điều khoản') điều chỉnh việc sử dụng ứng dụng Quick Spend ('Ứng dụng', 'Dịch vụ') được vận hành bởi Phan Văn Tài ('chúng tôi').",
                    "Bằng cách tải xuống, cài đặt hoặc sử dụng Ứng dụng, bạn đồng ý bị ràng buộc bởi các Điều khoản này. Nếu bạn không đồng ý với bất kỳ phần nào, bạn không được truy cập Dịch vụ.",
                    "Các Điều khoản này áp dụng cho tất cả người dùng truy cập hoặc sử dụng Dịch vụ."
                ]
            },
            acceptance: {
                title: "Chấp Nhận Điều Khoản",
                content: [
                    "Bằng cách truy cập và sử dụng Quick Spend, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản của thỏa thuận này.",
                    "Bạn phải ít nhất 13 tuổi để sử dụng Dịch vụ này.",
                    "Ứng dụng được cung cấp miễn phí và mã nguồn mở theo giấy phép MIT."
                ]
            },
            description: {
                title: "Mô Tả Dịch Vụ",
                content: [
                    "Quick Spend là ứng dụng theo dõi chi tiêu và thu nhập cung cấp:",
                    "Nhập giọng nói để ghi giao dịch nhanh trong 6 ngôn ngữ (Tiếng Anh, Tiếng Việt, Tiếng Nhật, Tiếng Hàn, Tiếng Thái, Tiếng Tây Ban Nha)",
                    "Phân loại tự động bằng AI với Gemini 2.5 Flash (15 lượt AI mỗi ngày + phân tích dự phòng không giới hạn)",
                    "Lưu trữ cơ sở dữ liệu SQLite cục bộ với chức năng offline hoàn toàn",
                    "13 danh mục mặc định (7 chi tiêu + 6 thu nhập) với tạo danh mục tùy chỉnh",
                    "Thống kê, phân tích và so sánh xu hướng với xem lịch",
                    "Xuất sang JSON và nhập với phát hiện trùng lặp",
                    "Thu thập dữ liệu ML training ẩn danh tùy chọn (chỉ khi chọn tham gia, không bao giờ bao gồm mô tả hoặc thông tin nhận dạng)",
                    "Hỗ trợ 6 loại tiền tệ với giao diện được bản địa hóa đầy đủ",
                    "Dịch vụ được cung cấp 'như hiện tại' và chúng tôi có quyền sửa đổi, tạm ngưng hoặc ngừng bất kỳ phần nào bất cứ lúc nào."
                ]
            },
            userAccounts: {
                title: "Tài Khoản Người Dùng",
                content: [
                    "Quick Spend không yêu cầu tài khoản người dùng hoặc đăng ký.",
                    "Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị của bạn.",
                    "Bạn có trách nhiệm duy trì bảo mật thiết bị của mình.",
                    "Chúng tôi không chịu trách nhiệm về bất kỳ mất mát dữ liệu nào do sự cố thiết bị hoặc gỡ cài đặt."
                ]
            },
            userConduct: {
                title: "Hành Vi Người Dùng",
                content: [
                    "Bạn đồng ý chỉ sử dụng Dịch vụ cho mục đích hợp pháp và theo các Điều khoản này.",
                    "Bạn đồng ý KHÔNG sử dụng Dịch vụ:"
                ],
                prohibitions: [
                    "Để vi phạm bất kỳ luật địa phương, tiểu bang, quốc gia hoặc quốc tế nào có thể áp dụng",
                    "Để cố gắng truy cập trái phép vào Dịch vụ hoặc các hệ thống liên quan",
                    "Để can thiệp hoặc làm gián đoạn Dịch vụ",
                    "Để sử dụng Dịch vụ cho bất kỳ hoạt động tài chính bất hợp pháp nào",
                    "Để kỹ thuật đảo ngược hoặc dịch ngược Ứng dụng (trừ khi được phép bởi giấy phép mã nguồn mở)",
                    "Để sử dụng Dịch vụ theo dõi chi tiêu cho các hoạt động bất hợp pháp"
                ]
            },
            expenseData: {
                title: "Dữ Liệu Giao Dịch và Quyền Riêng Tư",
                content: [
                    "Bạn giữ toàn quyền sở hữu tất cả dữ liệu chi tiêu và thu nhập mà bạn nhập vào Dịch vụ.",
                    "Dữ liệu của bạn được lưu trữ cục bộ trên thiết bị và không được truyền đến máy chủ của chúng tôi.",
                    "Dữ liệu hạn chế (mô tả giao dịch) có thể được gửi đến dịch vụ AI chỉ để phân loại.",
                    "ML Training Tùy chọn: Nếu bạn chọn tham gia rõ ràng, các mẫu giao dịch ẩn danh (chỉ số tiền, danh mục, ngày) có thể được thu thập. KHÔNG BAO GIỜ mô tả, ID người dùng hoặc thông tin nhận dạng.",
                    "Bạn có thể xuất dữ liệu sang JSON (sao lưu đầy đủ) và có trách nhiệm sao lưu nếu muốn.",
                    "Chúng tôi không chịu trách nhiệm về bất kỳ mất mát dữ liệu nào."
                ]
            },
            aiServices: {
                title: "Dịch Vụ AI & Dữ Liệu ML Training",
                content: [
                    "Quick Spend sử dụng Firebase AI (Gemini 2.5 Flash) để phân tích và phân loại giao dịch tự động.",
                    "Xử lý AI bao gồm giọng nói thành văn bản (6 ngôn ngữ) và hiểu ngôn ngữ tự nhiên với giới hạn hàng ngày 15 lượt Gemini cộng phân tích dự phòng không giới hạn.",
                    "Phân loại AI được cung cấp để thuận tiện và có thể không luôn chính xác. Bạn có thể xem lại và sửa đổi các danh mục do AI tạo bất cứ lúc nào.",
                    "ML Training Tùy chọn: Bạn có thể chọn tham gia đóng góp dữ liệu giao dịch ẩn danh (chỉ số tiền, danh mục, ngày) để giúp cải thiện các mô hình ML trong tương lai. Điều này KHÔNG BAO GIỜ bao gồm mô tả, ID người dùng hoặc bất kỳ thông tin nhận dạng nào.",
                    "Bạn có thể từ chối thu thập dữ liệu ML training bất cứ lúc nào trong Cài đặt ứng dụng.",
                    "Bạn có thể tắt hoàn toàn tính năng AI và sử dụng phân loại thủ công nếu muốn.",
                    "Chúng tôi không đảm bảo độ chính xác 100% của phân loại AI."
                ]
            },
            intellectualProperty: {
                title: "Quyền Sở Hữu Trí Tuệ",
                content: [
                    "Quick Spend là phần mềm mã nguồn mở được cấp phép theo Giấy phép MIT.",
                    "Bạn được tự do sử dụng, sửa đổi và phân phối ứng dụng theo Giấy phép MIT.",
                    "Tên ứng dụng và thương hiệu là nhãn hiệu của Phan Văn Tài.",
                    "Các thư viện và dependency của bên thứ ba tuân theo giấy phép tương ứng của chúng."
                ]
            },
            disclaimers: {
                title: "Tuyên Bố Từ Chối Trách Nhiệm",
                content: [
                    "Dịch vụ được cung cấp trên cơ sở 'như hiện tại' và 'như có sẵn'.",
                    "Chúng tôi không đưa ra bảo đảm nào, rõ ràng hoặc ngụ ý, liên quan đến Dịch vụ.",
                    "Chúng tôi không đảm bảo rằng Dịch vụ sẽ không bị gián đoạn, an toàn hoặc không có lỗi.",
                    "Theo dõi chi tiêu và thu nhập là cho mục đích cá nhân và không nên thay thế lời khuyên tài chính chuyên nghiệp.",
                    "Phân loại AI và các mô hình ML được cung cấp để thuận tiện và có thể không luôn chính xác.",
                    "Bạn sử dụng Dịch vụ với rủi ro của riêng mình."
                ]
            },
            limitationOfLiability: {
                title: "Giới Hạn Trách Nhiệm",
                content: [
                    "Trong mọi trường hợp, Phan Văn Tài sẽ không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng phạt nào.",
                    "Chúng tôi không chịu trách nhiệm về bất kỳ mất mát dữ liệu, tổn thất tài chính hoặc thiệt hại phát sinh từ việc sử dụng Dịch vụ.",
                    "Tổng trách nhiệm của chúng tôi không vượt quá số tiền bạn đã trả cho Dịch vụ (là $0 vì nó miễn phí).",
                    "Một số khu vực pháp lý không cho phép giới hạn trách nhiệm, vì vậy các giới hạn này có thể không áp dụng cho bạn."
                ]
            },
            termination: {
                title: "Chấm Dứt",
                content: [
                    "Bạn có thể ngừng sử dụng Dịch vụ bất cứ lúc nào bằng cách gỡ cài đặt ứng dụng.",
                    "Gỡ cài đặt ứng dụng sẽ xóa tất cả dữ liệu được lưu trữ cục bộ.",
                    "Chúng tôi có thể ngừng Dịch vụ bất cứ lúc nào mà không cần thông báo.",
                    "Tất cả các điều khoản mà theo bản chất nên tồn tại sau khi chấm dứt sẽ tồn tại."
                ]
            },
            changes: {
                title: "Thay Đổi Điều Khoản",
                content: [
                    "Chúng tôi có quyền sửa đổi hoặc thay thế các Điều khoản này bất cứ lúc nào.",
                    "Chúng tôi sẽ thông báo về các thay đổi quan trọng thông qua ứng dụng hoặc GitHub repository.",
                    "Bằng cách tiếp tục sử dụng Dịch vụ sau các thay đổi, bạn đồng ý với các điều khoản đã sửa đổi."
                ]
            },
            governingLaw: {
                title: "Luật Áp Dụng",
                content: [
                    "Các Điều khoản này sẽ được điều chỉnh bởi luật pháp Việt Nam.",
                    "Bất kỳ tranh chấp nào sẽ được giải quyết tại các tòa án Việt Nam.",
                    "Nếu bất kỳ điều khoản nào bị coi là không hợp lệ, các điều khoản còn lại sẽ vẫn có hiệu lực."
                ]
            },
            contact: {
                title: "Thông Tin Liên Hệ",
                content: [
                    "Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản Dịch vụ này, vui lòng liên hệ:",
                    "Email: taipv.swe@gmail.com",
                    "GitHub: https://github.com/phanvantai/quick_spend"
                ]
            }
        }
    }
};
