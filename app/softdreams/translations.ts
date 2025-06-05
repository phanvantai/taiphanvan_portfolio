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

type SoftDreamsTranslationDictionary = {
    [key in Language]: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
            downloadBtn: string;
            viewGithub: string;
            badges: {
                ios: string;
                swift: string;
                swiftui: string;
                xcode: string;
                testing: string;
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
            subscriptionFeatures: {
                title: string;
                items: FeatureItem[];
            };
            smartFeatures: {
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
                generation: string;
                library: string;
                settings: string;
                profile: string;
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
                aiDataProcessing: {
                    title: string;
                    content: string[];
                };
                childrenPrivacy: {
                    title: string;
                    content: string[];
                };
                dataSharing: {
                    title: string;
                    content: string[];
                    thirdParties: {
                        title: string;
                        items: string[];
                    };
                };
                dataRetention: {
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
                cookies: {
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
            dreamContent: {
                title: string;
                content: string[];
            };
            aiServices: {
                title: string;
                content: string[];
            };
            subscriptions: {
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

export const softDreamsTranslations: SoftDreamsTranslationDictionary = {
    en: {
        hero: {
            title: "SoftDreams",
            subtitle: "Personalized AI-Powered Bedtime Stories",
            description: "A magical iOS app that creates personalized bedtime stories tailored to your child's interests and developmental stage using advanced AI technology.",
            downloadBtn: "Download on App Store",
            viewGithub: "View on GitHub",
            badges: {
                ios: "iOS 17.0+",
                swift: "Swift 5.0",
                swiftui: "SwiftUI Framework",
                xcode: "Xcode 15.0+",
                testing: "Swift Testing",
                updated: "Updated June 2025"
            }
        },
        features: {
            title: "Powerful Features",
            subtitle: "Everything you need for magical bedtime storytelling",
            coreFeatures: {
                title: "Core Features",
                items: [
                    {
                        icon: "🎭",
                        title: "Personalized Stories",
                        description: "AI-generated bedtime stories customized to your child's profile, interests, and preferences"
                    },
                    {
                        icon: "🤖",
                        title: "Multiple AI Models",
                        description: "Support for OpenAI GPT-3.5/GPT-4 and Anthropic Claude with model selection"
                    },
                    {
                        icon: "👶",
                        title: "Age-Appropriate Content",
                        description: "Stories tailored to different developmental stages from pregnancy to preschooler"
                    },
                    {
                        icon: "📖",
                        title: "Story Library",
                        description: "CoreData-powered library to save and organize your child's favorite stories"
                    },
                    {
                        icon: "🎨",
                        title: "Custom Themes",
                        description: "Choose from various story themes, lengths, and character types"
                    },
                    {
                        icon: "📱",
                        title: "Universal App",
                        description: "Designed for both iPhone and iPad with responsive layouts"
                    }
                ]
            },
            subscriptionFeatures: {
                title: "Subscription Features",
                items: [
                    {
                        icon: "💰",
                        title: "Freemium Model",
                        description: "3 stories per day for free users, 20 stories for premium subscribers"
                    },
                    {
                        icon: "🔐",
                        title: "Premium Benefits",
                        description: "Access to advanced AI models (GPT-4, Claude), custom story settings"
                    },
                    {
                        icon: "💳",
                        title: "StoreKit Integration",
                        description: "Monthly and yearly subscription options with 7-day free trial"
                    },
                    {
                        icon: "🌍",
                        title: "Localized Pricing",
                        description: "Automatic currency and pricing localization"
                    }
                ]
            },
            smartFeatures: {
                title: "Smart Features",
                items: [
                    {
                        icon: "🔔",
                        title: "Smart Notifications",
                        description: "Story time reminders and pregnancy milestone notifications"
                    },
                    {
                        icon: "📊",
                        title: "Auto Profile Updates",
                        description: "Automatic age progression and developmental milestone tracking"
                    },
                    {
                        icon: "🌐",
                        title: "Multi-Language Support",
                        description: "Currently supports English and Vietnamese with easy expansion"
                    },
                    {
                        icon: "⚙️",
                        title: "Theme Management",
                        description: "Light, dark, and auto theme switching"
                    }
                ]
            }
        },
        techStack: {
            title: "Modern Tech Stack",
            subtitle: "Built with cutting-edge iOS technologies",
            items: [
                {
                    name: "SwiftUI",
                    description: "Native iOS framework for modern UI development",
                    icon: "📱"
                },
                {
                    name: "Swift 5.0",
                    description: "Latest Swift language features and performance",
                    icon: "⚡"
                },
                {
                    name: "CoreData",
                    description: "Robust data persistence for story library",
                    icon: "💾"
                },
                {
                    name: "StoreKit 2",
                    description: "Modern in-app purchase implementation",
                    icon: "💳"
                },
                {
                    name: "OpenAI API",
                    description: "GPT-3.5 and GPT-4 for story generation",
                    icon: "🧠"
                },
                {
                    name: "Anthropic Claude",
                    description: "Alternative AI model for diverse storytelling",
                    icon: "🎭"
                }
            ]
        },
        architecture: {
            title: "Clean Architecture",
            subtitle: "MVVM pattern with Test-Driven Development",
            description: "SoftDreams follows the MVVM architectural pattern with strict TDD practices for clean, maintainable, and thoroughly tested code.",
            features: [
                {
                    title: "MVVM Pattern",
                    description: "Clear separation of concerns with ViewModels handling business logic",
                    icon: "🏗️"
                },
                {
                    title: "Protocol-Oriented",
                    description: "Services defined by protocols for maximum testability",
                    icon: "🔌"
                },
                {
                    title: "Dependency Injection",
                    description: "ServiceFactory pattern for clean architecture",
                    icon: "💉"
                },
                {
                    title: "Test-Driven Development",
                    description: "Comprehensive test suite with 80%+ code coverage",
                    icon: "🧪"
                }
            ]
        },
        screenshots: {
            title: "App Screenshots",
            subtitle: "Beautiful and intuitive user interface",
            gallery: {
                onboarding: "Onboarding Flow",
                home: "Home Screen",
                generation: "Story Generation",
                library: "Story Library",
                settings: "Settings",
                profile: "Profile Management"
            }
        },
        download: {
            title: "Get Started Today",
            subtitle: "Download SoftDreams and create magical bedtime moments",
            description: "Transform bedtime into an adventure with personalized AI-generated stories that grow with your child.",
            githubBtn: "View Source Code",
            comingSoon: "Coming Soon to App Store",
            requirements: {
                title: "Requirements",
                items: [
                    "iOS 17.0 or later",
                    "iPhone or iPad",
                    "Internet connection for story generation",
                    "Optional: OpenAI API key for advanced features"
                ]
            }
        },
        support: {
            title: "Support & Feedback",
            subtitle: "We're here to help make your experience magical",
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
            lastUpdated: "Last updated: June 5, 2025",
            sections: {
                introduction: {
                    title: "Introduction",
                    content: [
                        "Welcome to SoftDreams, a personalized AI-powered bedtime story app for children. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.",
                        "We are committed to protecting your privacy and the privacy of your children. This policy describes our practices regarding data collection and use, particularly as they relate to children's information.",
                        "By using SoftDreams, you agree to the collection and use of information in accordance with this policy."
                    ]
                },
                dataCollection: {
                    title: "Information We Collect",
                    content: [
                        "SoftDreams is designed with privacy in mind. We use minimal information only to create personalized stories for your child:",
                        "Personal Information used for story generation:"
                    ],
                    items: [
                        "Child's name, age, and favorite interests (used only for personalization)",
                        "Story preferences and themes",
                        "All personal data is stored locally on your device only",
                        "No personal information is transmitted to external servers",
                        "Only anonymous usage statistics are collected to improve the app",
                        "Basic device information for app compatibility and crash reporting"
                    ]
                },
                aiDataProcessing: {
                    title: "AI Data Processing",
                    content: [
                        "SoftDreams uses artificial intelligence to generate personalized stories while protecting your privacy:",
                        "When generating stories, only general story prompts and themes are sent to AI services - never personal information like names or specific details about your child.",
                        "All personalization (adding your child's name, age-appropriate content, favorite characters) happens locally on your device.",
                        "No conversation logs, personal data, or identifiable information is stored on external servers.",
                        "Generated story templates are personalized locally and stored only on your device.",
                        "AI providers process only generic story requests and cannot identify individual users or children."
                    ]
                },
                childrenPrivacy: {
                    title: "Children's Privacy",
                    content: [
                        "SoftDreams is designed with children's privacy as our top priority. We comply with COPPA (Children's Online Privacy Protection Act) and other applicable laws.",
                        "We do not collect, store, or transmit any personal information about children to external servers.",
                        "All personal data (names, ages, preferences) is stored locally on your device only and never leaves your device.",
                        "Parents have complete control over their child's information since it remains on their device.",
                        "No personal information is shared with third parties, including AI providers.",
                        "The app functions entirely offline for personalization, ensuring maximum privacy protection."
                    ]
                },
                dataSharing: {
                    title: "How We Share Your Information",
                    content: [
                        "We do not collect, store, or share your personal information with any third parties. Here's what we do share:"
                    ],
                    thirdParties: {
                        title: "Limited Third-Party Interactions:",
                        items: [
                            "AI Services: Only generic story templates are requested (no personal information is sent)",
                            "Apple App Store: For subscription management only (handled by Apple's secure systems)",
                            "Analytics: Only anonymous app usage statistics (no personal or identifiable data)",
                            "No personal data, names, ages, or preferences are ever shared with any external service"
                        ]
                    }
                },
                dataRetention: {
                    title: "Data Retention",
                    content: [
                        "Since all personal data is stored locally on your device, you have complete control over data retention:",
                        "Personal data: Stored only on your device until you delete the app or clear data",
                        "Story library: Stored locally on your device with optional iCloud backup (controlled by you)",
                        "Anonymous analytics: Retained for up to 2 years for app improvement purposes only",
                        "Subscription data: Managed by Apple according to their terms and policies"
                    ]
                },
                userRights: {
                    title: "Your Rights and Choices",
                    content: [
                        "You have several rights regarding your personal information:"
                    ],
                    rights: [
                        "Access: Request a copy of the personal information we hold about you",
                        "Rectification: Request correction of inaccurate personal information",
                        "Erasure: Request deletion of your personal information",
                        "Portability: Request transfer of your data in a machine-readable format",
                        "Objection: Object to processing of your personal information",
                        "Restriction: Request restriction of processing under certain circumstances"
                    ]
                },
                security: {
                    title: "Data Security",
                    content: [
                        "We implement appropriate technical and organizational security measures to protect your personal information:",
                        "Data encryption in transit and at rest",
                        "Regular security assessments and updates",
                        "Limited access to personal information on a need-to-know basis",
                        "Secure cloud infrastructure with industry-standard protections",
                        "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
                    ]
                },
                cookies: {
                    title: "Cookies and Tracking",
                    content: [
                        "SoftDreams is a native iOS app and does not use web cookies.",
                        "We may use device identifiers and analytics tools to understand app usage and improve performance.",
                        "You can manage analytics sharing through your device's privacy settings.",
                        "We do not use tracking technologies for advertising purposes."
                    ]
                },
                changes: {
                    title: "Changes to This Privacy Policy",
                    content: [
                        "We may update this Privacy Policy from time to time. We will notify you of any changes by:",
                        "Posting the new Privacy Policy in the app",
                        "Updating the 'Last updated' date at the top of this policy",
                        "Sending a notification through the app for significant changes",
                        "Your continued use of the app after changes constitutes acceptance of the updated policy."
                    ]
                },
                contact: {
                    title: "Contact Us",
                    content: [
                        "If you have any questions about this Privacy Policy or our data practices, please contact us:",
                        "Email: taipv.swe@gmail.com",
                        "We will respond to your inquiry within 30 days.",
                        "For immediate concerns about children's privacy, please contact us directly."
                    ]
                }
            }
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last updated: December 2024",
            introduction: {
                title: "Introduction",
                content: [
                    "Welcome to SoftDreams! These Terms of Service ('Terms') govern your use of the SoftDreams mobile application ('App', 'Service') operated by Tai Phan Van ('we', 'us', 'our').",
                    "By downloading, installing, or using our App, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.",
                    "These Terms apply to all visitors, users, and others who access or use the Service."
                ]
            },
            acceptance: {
                title: "Acceptance of Terms",
                content: [
                    "By accessing and using SoftDreams, you accept and agree to be bound by the terms and provision of this agreement.",
                    "You must be at least 13 years old to use this Service. If you are under 18, you must have your parent or guardian's permission to use the Service.",
                    "If you use SoftDreams on behalf of a business, you represent and warrant that you have authority to bind that business to these Terms."
                ]
            },
            description: {
                title: "Description of Service",
                content: [
                    "SoftDreams is an AI-powered dream interpretation mobile application that provides:",
                    "Dream journaling and recording capabilities",
                    "AI-powered dream analysis and interpretation",
                    "Dream pattern tracking and insights",
                    "Personalized dream meanings based on your entries",
                    "The Service is provided 'as is' and we reserve the right to modify, suspend, or discontinue any part of the Service at any time."
                ]
            },
            userAccounts: {
                title: "User Accounts",
                content: [
                    "To access certain features of the Service, you may be required to create an account.",
                    "You are responsible for maintaining the confidentiality of your account and password.",
                    "You agree to accept responsibility for all activities that occur under your account.",
                    "You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
                    "We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion."
                ]
            },
            userConduct: {
                title: "User Conduct",
                content: [
                    "You agree to use the Service only for lawful purposes and in accordance with these Terms.",
                    "You agree NOT to use the Service:"
                ],
                prohibitions: [
                    "To violate any applicable local, state, national, or international law or regulation",
                    "To submit false, misleading, or inappropriate content",
                    "To attempt to gain unauthorized access to the Service or its related systems",
                    "To interfere with or disrupt the Service or servers or networks connected to the Service",
                    "To harass, abuse, or harm other users of the Service",
                    "To distribute malware, viruses, or any other malicious code",
                    "To use the Service for any commercial purpose without our explicit consent",
                    "To reverse engineer, decompile, or disassemble the App"
                ]
            },
            dreamContent: {
                title: "Dream Content and Privacy",
                content: [
                    "You retain ownership of all dream content you submit to the Service.",
                    "By submitting content, you grant us a limited, non-exclusive license to process your content for the purpose of providing dream interpretation services.",
                    "We do not share your personal dream content with third parties except as described in our Privacy Policy.",
                    "You are responsible for the accuracy and appropriateness of the content you submit.",
                    "We reserve the right to remove content that violates these Terms or our community guidelines."
                ]
            },
            aiServices: {
                title: "AI Services and Interpretations",
                content: [
                    "SoftDreams uses artificial intelligence to provide dream interpretations and insights.",
                    "AI interpretations are for entertainment and self-reflection purposes only and should not be considered professional psychological or medical advice.",
                    "The accuracy of AI interpretations may vary and should not be solely relied upon for important decisions.",
                    "We do not guarantee the accuracy, completeness, or usefulness of any AI-generated content.",
                    "You acknowledge that AI services may occasionally produce unexpected or inappropriate results."
                ]
            },
            subscriptions: {
                title: "Subscriptions and Payments",
                content: [
                    "SoftDreams offers both free and premium subscription features.",
                    "Subscription fees are charged through your Apple App Store account.",
                    "Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period.",
                    "You can manage your subscription and turn off auto-renewal in your Apple App Store account settings.",
                    "No refunds will be provided for the unused portion of any subscription period.",
                    "We reserve the right to change subscription prices with advance notice to existing subscribers."
                ]
            },
            intellectualProperty: {
                title: "Intellectual Property Rights",
                content: [
                    "The Service and its original content, features, and functionality are and will remain the exclusive property of Tai Phan Van and its licensors.",
                    "The Service is protected by copyright, trademark, and other laws.",
                    "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service.",
                    "Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent."
                ]
            },
            disclaimers: {
                title: "Disclaimers",
                content: [
                    "The information on this Service is provided on an 'as is' basis.",
                    "We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.",
                    "We do not warrant that the Service will be uninterrupted, timely, secure, or error-free.",
                    "Dream interpretations are for entertainment purposes only and should not replace professional medical or psychological advice.",
                    "You use the Service at your own risk."
                ]
            },
            limitationOfLiability: {
                title: "Limitation of Liability",
                content: [
                    "In no event shall Tai Phan Van, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.",
                    "Our total liability to you for any damages shall not exceed the amount you paid for the Service in the 12 months preceding the claim.",
                    "Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for damages, so some of the above limitations may not apply to you."
                ]
            },
            termination: {
                title: "Termination",
                content: [
                    "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever.",
                    "You may terminate your account at any time by contacting us or deleting the App.",
                    "Upon termination, your right to use the Service will cease immediately.",
                    "All provisions of the Terms which by their nature should survive termination shall survive termination."
                ]
            },
            changes: {
                title: "Changes to Terms",
                content: [
                    "We reserve the right, at our sole discretion, to modify or replace these Terms at any time.",
                    "If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.",
                    "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms."
                ]
            },
            governingLaw: {
                title: "Governing Law",
                content: [
                    "These Terms shall be interpreted and governed by the laws of Vietnam, without regard to its conflict of law provisions.",
                    "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.",
                    "If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect."
                ]
            },
            contact: {
                title: "Contact Information",
                content: [
                    "If you have any questions about these Terms of Service, please contact us:",
                    "Email: taipv.swe@gmail.com",
                    "We will respond to your inquiry within a reasonable time frame.",
                    "For urgent matters, please clearly mark your communication as 'Urgent' in the subject line."
                ]
            }
        }
    },
    vi: {
        hero: {
            title: "SoftDreams",
            subtitle: "Câu Chuyện Ru Ngủ Cá Nhân Hóa Bằng AI",
            description: "Ứng dụng iOS kỳ diệu tạo ra những câu chuyện ru ngủ được cá nhân hóa phù hợp với sở thích và giai đoạn phát triển của con bạn bằng công nghệ AI tiên tiến.",
            downloadBtn: "Tải về App Store",
            viewGithub: "Xem trên GitHub",
            badges: {
                ios: "iOS 17.0+",
                swift: "Swift 5.0",
                swiftui: "SwiftUI Framework",
                xcode: "Xcode 15.0+",
                testing: "Swift Testing",
                updated: "Cập nhật tháng 6 2025"
            }
        },
        features: {
            title: "Tính Năng Mạnh Mẽ",
            subtitle: "Mọi thứ bạn cần cho những câu chuyện ru ngủ kỳ diệu",
            coreFeatures: {
                title: "Tính Năng Cốt Lõi",
                items: [
                    {
                        icon: "🎭",
                        title: "Câu Chuyện Cá Nhân Hóa",
                        description: "Câu chuyện ru ngủ do AI tạo ra được tùy chỉnh theo hồ sơ, sở thích và preferences của con bạn"
                    },
                    {
                        icon: "🤖",
                        title: "Nhiều Mô Hình AI",
                        description: "Hỗ trợ OpenAI GPT-3.5/GPT-4 và Anthropic Claude với tính năng lựa chọn mô hình"
                    },
                    {
                        icon: "👶",
                        title: "Nội Dung Phù Hợp Độ Tuổi",
                        description: "Câu chuyện phù hợp với các giai đoạn phát triển khác nhau từ thai kỳ đến trẻ mầm non"
                    },
                    {
                        icon: "📖",
                        title: "Thư Viện Câu Chuyện",
                        description: "Thư viện được hỗ trợ bởi CoreData để lưu và tổ chức các câu chuyện yêu thích của con bạn"
                    },
                    {
                        icon: "🎨",
                        title: "Chủ Đề Tùy Chỉnh",
                        description: "Chọn từ nhiều chủ đề câu chuyện, độ dài và loại nhân vật khác nhau"
                    },
                    {
                        icon: "📱",
                        title: "Ứng Dụng Đa Năng",
                        description: "Được thiết kế cho cả iPhone và iPad với bố cục responsive"
                    }
                ]
            },
            subscriptionFeatures: {
                title: "Tính Năng Đăng Ký",
                items: [
                    {
                        icon: "💰",
                        title: "Mô Hình Freemium",
                        description: "3 câu chuyện mỗi ngày cho người dùng miễn phí, 20 câu chuyện cho người đăng ký premium"
                    },
                    {
                        icon: "🔐",
                        title: "Lợi Ích Premium",
                        description: "Truy cập vào các mô hình AI tiên tiến (GPT-4, Claude), cài đặt câu chuyện tùy chỉnh"
                    },
                    {
                        icon: "💳",
                        title: "Tích Hợp StoreKit",
                        description: "Tùy chọn đăng ký hàng tháng và hàng năm với bản dùng thử miễn phí 7 ngày"
                    },
                    {
                        icon: "🌍",
                        title: "Định Giá Địa Phương",
                        description: "Tự động địa phương hóa tiền tệ và giá cả"
                    }
                ]
            },
            smartFeatures: {
                title: "Tính Năng Thông Minh",
                items: [
                    {
                        icon: "🔔",
                        title: "Thông Báo Thông Minh",
                        description: "Nhắc nhở giờ kể chuyện và thông báo mốc thai kỳ"
                    },
                    {
                        icon: "📊",
                        title: "Cập Nhật Hồ Sơ Tự Động",
                        description: "Tự động cập nhật tuổi và theo dõi các mốc phát triển"
                    },
                    {
                        icon: "🌐",
                        title: "Hỗ Trợ Đa Ngôn Ngữ",
                        description: "Hiện tại hỗ trợ tiếng Anh và tiếng Việt với khả năng mở rộng dễ dàng"
                    },
                    {
                        icon: "⚙️",
                        title: "Quản Lý Chủ Đề",
                        description: "Chuyển đổi chủ đề sáng, tối và tự động"
                    }
                ]
            }
        },
        techStack: {
            title: "Công Nghệ Hiện Đại",
            subtitle: "Xây dựng với các công nghệ iOS tiên tiến",
            items: [
                {
                    name: "SwiftUI",
                    description: "Framework iOS native cho phát triển UI hiện đại",
                    icon: "📱"
                },
                {
                    name: "Swift 5.0",
                    description: "Các tính năng và hiệu suất mới nhất của ngôn ngữ Swift",
                    icon: "⚡"
                },
                {
                    name: "CoreData",
                    description: "Lưu trữ dữ liệu mạnh mẽ cho thư viện câu chuyện",
                    icon: "💾"
                },
                {
                    name: "StoreKit 2",
                    description: "Triển khai mua hàng trong ứng dụng hiện đại",
                    icon: "💳"
                },
                {
                    name: "OpenAI API",
                    description: "GPT-3.5 và GPT-4 cho việc tạo câu chuyện",
                    icon: "🧠"
                },
                {
                    name: "Anthropic Claude",
                    description: "Mô hình AI thay thế cho việc kể chuyện đa dạng",
                    icon: "🎭"
                }
            ]
        },
        architecture: {
            title: "Kiến Trúc Sạch",
            subtitle: "Mô hình MVVM với Test-Driven Development",
            description: "SoftDreams tuân theo mô hình kiến trúc MVVM với các thực hành TDD nghiêm ngặt cho mã sạch, có thể bảo trì và được kiểm tra kỹ lưỡng.",
            features: [
                {
                    title: "Mô Hình MVVM",
                    description: "Tách biệt rõ ràng các mối quan tâm với ViewModels xử lý logic nghiệp vụ",
                    icon: "🏗️"
                },
                {
                    title: "Hướng Protocol",
                    description: "Các dịch vụ được định nghĩa bởi protocols để tối đa khả năng kiểm tra",
                    icon: "🔌"
                },
                {
                    title: "Dependency Injection",
                    description: "Mô hình ServiceFactory cho kiến trúc sạch",
                    icon: "💉"
                },
                {
                    title: "Test-Driven Development",
                    description: "Bộ kiểm tra toàn diện với độ bao phủ mã 80%+",
                    icon: "🧪"
                }
            ]
        },
        screenshots: {
            title: "Ảnh Chụp Màn Hình",
            subtitle: "Giao diện người dùng đẹp và trực quan",
            gallery: {
                onboarding: "Luồng Giới Thiệu",
                home: "Màn Hình Chính",
                generation: "Tạo Câu Chuyện",
                library: "Thư Viện Câu Chuyện",
                settings: "Cài Đặt",
                profile: "Quản Lý Hồ Sơ"
            }
        },
        download: {
            title: "Bắt Đầu Ngay Hôm Nay",
            subtitle: "Tải SoftDreams và tạo những khoảnh khắc ru ngủ kỳ diệu",
            description: "Biến giờ đi ngủ thành một cuộc phiêu lưu với những câu chuyện được tạo bởi AI được cá nhân hóa phát triển cùng con bạn.",
            githubBtn: "Xem Mã Nguồn",
            comingSoon: "Sắp Ra Mắt Trên App Store",
            requirements: {
                title: "Yêu Cầu",
                items: [
                    "iOS 17.0 trở lên",
                    "iPhone hoặc iPad",
                    "Kết nối Internet để tạo câu chuyện",
                    "Tùy chọn: Khóa API OpenAI cho các tính năng nâng cao"
                ]
            }
        },
        support: {
            title: "Hỗ Trợ & Phản Hồi",
            subtitle: "Chúng tôi ở đây để giúp trải nghiệm của bạn trở nên kỳ diệu",
            description: "Có câu hỏi, phản hồi, hoặc cần hỗ trợ? Chúng tôi rất muốn nghe từ bạn! Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi bạn sớm nhất có thể.",
            form: {
                name: "Tên của bạn",
                email: "Email của bạn",
                subject: "Tiêu đề",
                message: "Tin nhắn của bạn",
                submitBtn: "Gửi tin nhắn",
                sending: "Đang gửi...",
                successMessage: "Cảm ơn tin nhắn của bạn! Chúng tôi sẽ phản hồi bạn sớm.",
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
            lastUpdated: "Cập nhật lần cuối: 5 tháng 6, 2025",
            sections: {
                introduction: {
                    title: "Giới Thiệu",
                    content: [
                        "Chào mừng bạn đến với SoftDreams, ứng dụng câu chuyện ru ngủ được cá nhân hóa bằng AI cho trẻ em. Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi sử dụng ứng dụng di động của chúng tôi.",
                        "Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và con bạn. Chính sách này mô tả các thực hành của chúng tôi về việc thu thập và sử dụng dữ liệu, đặc biệt liên quan đến thông tin của trẻ em.",
                        "Bằng cách sử dụng SoftDreams, bạn đồng ý với việc thu thập và sử dụng thông tin theo chính sách này."
                    ]
                },
                dataCollection: {
                    title: "Thông Tin Chúng Tôi Thu Thập",
                    content: [
                        "SoftDreams được thiết kế với tư duy bảo mật. Chúng tôi chỉ sử dụng thông tin tối thiểu để tạo những câu chuyện cá nhân hóa cho con bạn:",
                        "Thông tin cá nhân được sử dụng để tạo câu chuyện:"
                    ],
                    items: [
                        "Tên, tuổi và sở thích yêu thích của trẻ (chỉ được sử dụng để cá nhân hóa)",
                        "Sở thích và chủ đề câu chuyện",
                        "Tất cả dữ liệu cá nhân chỉ được lưu trữ cục bộ trên thiết bị của bạn",
                        "Không có thông tin cá nhân nào được truyền đến máy chủ bên ngoài",
                        "Chỉ thu thập thống kê sử dụng ẩn danh để cải thiện ứng dụng",
                        "Thông tin thiết bị cơ bản để tương thích ứng dụng và báo cáo lỗi"
                    ]
                },
                aiDataProcessing: {
                    title: "Xử Lý Dữ Liệu AI",
                    content: [
                        "SoftDreams sử dụng trí tuệ nhân tạo để tạo câu chuyện cá nhân hóa trong khi bảo vệ quyền riêng tư của bạn:",
                        "Khi tạo câu chuyện, chỉ các gợi ý và chủ đề câu chuyện chung được gửi đến dịch vụ AI - không bao giờ là thông tin cá nhân như tên hoặc chi tiết cụ thể về con bạn.",
                        "Tất cả việc cá nhân hóa (thêm tên con bạn, nội dung phù hợp độ tuổi, nhân vật yêu thích) đều xảy ra cục bộ trên thiết bị của bạn.",
                        "Không có nhật ký hội thoại, dữ liệu cá nhân hoặc thông tin có thể nhận dạng nào được lưu trữ trên máy chủ bên ngoài.",
                        "Các mẫu câu chuyện được tạo ra được cá nhân hóa cục bộ và chỉ lưu trữ trên thiết bị của bạn.",
                        "Các nhà cung cấp AI chỉ xử lý các yêu cầu câu chuyện chung và không thể nhận dạng người dùng hoặc trẻ em cá nhân."
                    ]
                },
                childrenPrivacy: {
                    title: "Quyền Riêng Tư Của Trẻ Em",
                    content: [
                        "SoftDreams được thiết kế với quyền riêng tư của trẻ em là ưu tiên hàng đầu. Chúng tôi tuân thủ COPPA (Đạo luật Bảo vệ Quyền riêng tư Trực tuyến của Trẻ em) và các luật áp dụng khác.",
                        "Chúng tôi không thu thập, lưu trữ hoặc truyền bất kỳ thông tin cá nhân nào về trẻ em đến máy chủ bên ngoài.",
                        "Tất cả dữ liệu cá nhân (tên, tuổi, sở thích) chỉ được lưu trữ cục bộ trên thiết bị của bạn và không bao giờ rời khỏi thiết bị của bạn.",
                        "Cha mẹ có toàn quyền kiểm soát thông tin của con họ vì nó vẫn ở trên thiết bị của họ.",
                        "Không có thông tin cá nhân nào được chia sẻ với bên thứ ba, bao gồm cả các nhà cung cấp AI.",
                        "Ứng dụng hoạt động hoàn toàn offline để cá nhân hóa, đảm bảo bảo vệ quyền riêng tư tối đa."
                    ]
                },
                dataSharing: {
                    title: "Cách Chúng Tôi Chia Sẻ Thông Tin",
                    content: [
                        "Chúng tôi không thu thập, lưu trữ hoặc chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào. Đây là những gì chúng tôi chia sẻ:"
                    ],
                    thirdParties: {
                        title: "Tương Tác Bên Thứ Ba Hạn Chế:",
                        items: [
                            "Dịch vụ AI: Chỉ yêu cầu các mẫu câu chuyện chung (không gửi thông tin cá nhân)",
                            "Apple App Store: Chỉ để quản lý đăng ký (được xử lý bởi hệ thống bảo mật của Apple)",
                            "Phân tích: Chỉ thống kê sử dụng ứng dụng ẩn danh (không có dữ liệu cá nhân hoặc có thể nhận dạng)",
                            "Không có dữ liệu cá nhân, tên, tuổi hoặc sở thích nào được chia sẻ với bất kỳ dịch vụ bên ngoài nào"
                        ]
                    }
                },
                dataRetention: {
                    title: "Lưu Giữ Dữ Liệu",
                    content: [
                        "Vì tất cả dữ liệu cá nhân được lưu trữ cục bộ trên thiết bị của bạn, bạn có toàn quyền kiểm soát việc lưu giữ dữ liệu:",
                        "Dữ liệu cá nhân: Chỉ được lưu trữ trên thiết bị của bạn cho đến khi bạn xóa ứng dụng hoặc xóa dữ liệu",
                        "Thư viện câu chuyện: Được lưu trữ cục bộ trên thiết bị của bạn với tùy chọn sao lưu iCloud (do bạn kiểm soát)",
                        "Phân tích ẩn danh: Được giữ lại tối đa 2 năm chỉ cho mục đích cải thiện ứng dụng",
                        "Dữ liệu đăng ký: Được quản lý bởi Apple theo các điều khoản và chính sách của họ"
                    ]
                },
                userRights: {
                    title: "Quyền và Lựa Chọn Của Bạn",
                    content: [
                        "Bạn có một số quyền liên quan đến thông tin cá nhân của mình:"
                    ],
                    rights: [
                        "Truy cập: Yêu cầu bản sao thông tin cá nhân chúng tôi lưu trữ về bạn",
                        "Chỉnh sửa: Yêu cầu sửa chữa thông tin cá nhân không chính xác",
                        "Xóa: Yêu cầu xóa thông tin cá nhân của bạn",
                        "Di chuyển: Yêu cầu chuyển giao dữ liệu của bạn ở định dạng có thể đọc được bằng máy",
                        "Phản đối: Phản đối việc xử lý thông tin cá nhân của bạn",
                        "Hạn chế: Yêu cầu hạn chế xử lý trong một số trường hợp nhất định"
                    ]
                },
                security: {
                    title: "Bảo Mật Dữ Liệu",
                    content: [
                        "Chúng tôi thực hiện các biện pháp bảo mật kỹ thuật và tổ chức thích hợp để bảo vệ thông tin cá nhân của bạn:",
                        "Mã hóa dữ liệu khi truyền tải và lưu trữ",
                        "Đánh giá và cập nhật bảo mật thường xuyên",
                        "Hạn chế truy cập thông tin cá nhân trên cơ sở cần biết",
                        "Cơ sở hạ tầng đám mây an toàn với các biện pháp bảo vệ tiêu chuẩn ngành",
                        "Tuy nhiên, không có phương thức truyền tải qua internet nào là 100% an toàn, và chúng tôi không thể đảm bảo bảo mật tuyệt đối."
                    ]
                },
                cookies: {
                    title: "Cookie và Theo Dõi",
                    content: [
                        "SoftDreams là ứng dụng iOS gốc và không sử dụng cookie web.",
                        "Chúng tôi có thể sử dụng định danh thiết bị và công cụ phân tích để hiểu việc sử dụng ứng dụng và cải thiện hiệu suất.",
                        "Bạn có thể quản lý việc chia sẻ phân tích thông qua cài đặt quyền riêng tư của thiết bị.",
                        "Chúng tôi không sử dụng công nghệ theo dõi cho mục đích quảng cáo."
                    ]
                },
                changes: {
                    title: "Thay Đổi Chính Sách Bảo Mật",
                    content: [
                        "Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách:",
                        "Đăng Chính sách Bảo mật mới trong ứng dụng",
                        "Cập nhật ngày 'Cập nhật lần cuối' ở đầu chính sách này",
                        "Gửi thông báo qua ứng dụng cho những thay đổi quan trọng",
                        "Việc bạn tiếp tục sử dụng ứng dụng sau các thay đổi được coi là chấp nhận chính sách đã cập nhật."
                    ]
                },
                contact: {
                    title: "Liên Hệ Với Chúng Tôi",
                    content: [
                        "Nếu bạn có bất kỳ câu hỏi nào về Chính sách Bảo mật này hoặc thực hành dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi:",
                        "Email: taipv.swe@gmail.com",
                        "Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 30 ngày.",
                        "Đối với những lo ngại cấp bách về quyền riêng tư của trẻ em, vui lòng liên hệ trực tiếp với chúng tôi."
                    ]
                }
            }
        },
        terms: {
            title: "Điều Khoản Dịch Vụ",
            lastUpdated: "Cập nhật lần cuối: Tháng 12 2024",
            introduction: {
                title: "Giới Thiệu",
                content: [
                    "Chào mừng bạn đến với SoftDreams! Các Điều khoản Dịch vụ này ('Điều khoản') điều chỉnh việc sử dụng ứng dụng di động SoftDreams ('Ứng dụng', 'Dịch vụ') được vận hành bởi Phan Văn Tài ('chúng tôi', 'của chúng tôi').",
                    "Bằng cách tải xuống, cài đặt hoặc sử dụng Ứng dụng của chúng tôi, bạn đồng ý bị ràng buộc bởi các Điều khoản này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, thì bạn không được truy cập Dịch vụ.",
                    "Các Điều khoản này áp dụng cho tất cả khách truy cập, người dùng và những người khác truy cập hoặc sử dụng Dịch vụ."
                ]
            },
            acceptance: {
                title: "Chấp Nhận Điều Khoản",
                content: [
                    "Bằng cách truy cập và sử dụng SoftDreams, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản và điều kiện của thỏa thuận này.",
                    "Bạn phải ít nhất 13 tuổi để sử dụng Dịch vụ này. Nếu bạn dưới 18 tuổi, bạn phải có sự cho phép của cha mẹ hoặc người giám hộ để sử dụng Dịch vụ.",
                    "Nếu bạn sử dụng SoftDreams thay mặt cho một doanh nghiệp, bạn đại diện và đảm bảo rằng bạn có thẩm quyền ràng buộc doanh nghiệp đó với các Điều khoản này."
                ]
            },
            description: {
                title: "Mô Tả Dịch Vụ",
                content: [
                    "SoftDreams là ứng dụng di động giải thích giấc mơ được hỗ trợ bởi AI cung cấp:",
                    "Khả năng ghi chép và ghi lại giấc mơ",
                    "Phân tích và giải thích giấc mơ được hỗ trợ bởi AI",
                    "Theo dõi mô hình giấc mơ và thông tin chi tiết",
                    "Ý nghĩa giấc mơ được cá nhân hóa dựa trên các mục nhập của bạn",
                    "Dịch vụ được cung cấp 'như hiện tại' và chúng tôi có quyền sửa đổi, tạm ngưng hoặc ngừng bất kỳ phần nào của Dịch vụ bất cứ lúc nào."
                ]
            },
            userAccounts: {
                title: "Tài Khoản Người Dùng",
                content: [
                    "Để truy cập các tính năng nhất định của Dịch vụ, bạn có thể được yêu cầu tạo một tài khoản.",
                    "Bạn có trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu của mình.",
                    "Bạn đồng ý chịu trách nhiệm cho tất cả các hoạt động xảy ra dưới tài khoản của bạn.",
                    "Bạn phải thông báo cho chúng tôi ngay lập tức khi biết về bất kỳ vi phạm bảo mật hoặc sử dụng trái phép tài khoản của bạn.",
                    "Chúng tôi có quyền từ chối dịch vụ, chấm dứt tài khoản hoặc xóa nội dung theo quyết định riêng của chúng tôi."
                ]
            },
            userConduct: {
                title: "Hành Vi Người Dùng",
                content: [
                    "Bạn đồng ý chỉ sử dụng Dịch vụ cho các mục đích hợp pháp và theo các Điều khoản này.",
                    "Bạn đồng ý KHÔNG sử dụng Dịch vụ:"
                ],
                prohibitions: [
                    "Để vi phạm bất kỳ luật hoặc quy định địa phương, tiểu bang, quốc gia hoặc quốc tế nào có thể áp dụng",
                    "Để gửi nội dung sai lệch, gây hiểu lầm hoặc không phù hợp",
                    "Để cố gắng truy cập trái phép vào Dịch vụ hoặc các hệ thống liên quan",
                    "Để can thiệp hoặc làm gián đoạn Dịch vụ hoặc máy chủ hoặc mạng được kết nối với Dịch vụ",
                    "Để quấy rối, lạm dụng hoặc làm hại người dùng khác của Dịch vụ",
                    "Để phân phối phần mềm độc hại, vi-rút hoặc bất kỳ mã độc hại nào khác",
                    "Để sử dụng Dịch vụ cho bất kỳ mục đích thương mại nào mà không có sự đồng ý rõ ràng của chúng tôi",
                    "Để kỹ thuật đảo ngược, dịch ngược hoặc tháo rời Ứng dụng"
                ]
            },
            dreamContent: {
                title: "Nội Dung Giấc Mơ và Quyền Riêng Tư",
                content: [
                    "Bạn giữ quyền sở hữu tất cả nội dung giấc mơ mà bạn gửi đến Dịch vụ.",
                    "Bằng cách gửi nội dung, bạn cấp cho chúng tôi giấy phép hạn chế, không độc quyền để xử lý nội dung của bạn nhằm mục đích cung cấp dịch vụ giải thích giấc mơ.",
                    "Chúng tôi không chia sẻ nội dung giấc mơ cá nhân của bạn với bên thứ ba trừ khi được mô tả trong Chính sách Bảo mật của chúng tôi.",
                    "Bạn có trách nhiệm về tính chính xác và phù hợp của nội dung bạn gửi.",
                    "Chúng tôi có quyền xóa nội dung vi phạm các Điều khoản này hoặc hướng dẫn cộng đồng của chúng tôi."
                ]
            },
            aiServices: {
                title: "Dịch Vụ AI và Giải Thích",
                content: [
                    "SoftDreams sử dụng trí tuệ nhân tạo để cung cấp giải thích và thông tin chi tiết về giấc mơ.",
                    "Giải thích AI chỉ dành cho mục đích giải trí và tự phản ánh và không nên được coi là lời khuyên tâm lý hoặc y tế chuyên nghiệp.",
                    "Độ chính xác của giải thích AI có thể thay đổi và không nên chỉ dựa vào đó cho các quyết định quan trọng.",
                    "Chúng tôi không đảm bảo tính chính xác, đầy đủ hoặc hữu ích của bất kỳ nội dung được tạo bởi AI nào.",
                    "Bạn thừa nhận rằng các dịch vụ AI đôi khi có thể tạo ra kết quả bất ngờ hoặc không phù hợp."
                ]
            },
            subscriptions: {
                title: "Đăng Ký và Thanh Toán",
                content: [
                    "SoftDreams cung cấp cả tính năng miễn phí và đăng ký cao cấp.",
                    "Phí đăng ký được tính thông qua tài khoản Apple App Store của bạn.",
                    "Đăng ký tự động gia hạn trừ khi tự động gia hạn được tắt ít nhất 24 giờ trước khi kết thúc thời kỳ hiện tại.",
                    "Bạn có thể quản lý đăng ký của mình và tắt tự động gia hạn trong cài đặt tài khoản Apple App Store của bạn.",
                    "Không có hoàn tiền nào được cung cấp cho phần chưa sử dụng của bất kỳ thời kỳ đăng ký nào.",
                    "Chúng tôi có quyền thay đổi giá đăng ký với thông báo trước cho các thuê bao hiện tại."
                ]
            },
            intellectualProperty: {
                title: "Quyền Sở Hữu Trí Tuệ",
                content: [
                    "Dịch vụ và nội dung, tính năng và chức năng gốc của nó là và sẽ vẫn là tài sản độc quyền của Phan Văn Tài và những người cấp phép của ông.",
                    "Dịch vụ được bảo vệ bởi bản quyền, nhãn hiệu và các luật khác.",
                    "Bạn không được sao chép, phân phối, sửa đổi, tạo các tác phẩm phái sinh, hiển thị công khai, biểu diễn công khai, xuất bản lại, tải xuống, lưu trữ hoặc truyền tải bất kỳ tài liệu nào trên Dịch vụ của chúng tôi.",
                    "Nhãn hiệu và trang phục thương mại của chúng tôi không được sử dụng liên quan đến bất kỳ sản phẩm hoặc dịch vụ nào mà không có sự đồng ý trước bằng văn bản của chúng tôi."
                ]
            },
            disclaimers: {
                title: "Tuyên Bố Từ Chối Trách Nhiệm",
                content: [
                    "Thông tin trên Dịch vụ này được cung cấp trên cơ sở 'như hiện tại'.",
                    "Chúng tôi từ chối tất cả các bảo đảm, rõ ràng hoặc ngụ ý, bao gồm nhưng không giới hạn ở các bảo đảm ngụ ý về khả năng bán được và sự phù hợp cho một mục đích cụ thể.",
                    "Chúng tôi không đảm bảo rằng Dịch vụ sẽ không bị gián đoạn, kịp thời, an toàn hoặc không có lỗi.",
                    "Giải thích giấc mơ chỉ dành cho mục đích giải trí và không nên thay thế lời khuyên y tế hoặc tâm lý chuyên nghiệp.",
                    "Bạn sử dụng Dịch vụ với rủi ro của riêng mình."
                ]
            },
            limitationOfLiability: {
                title: "Giới Hạn Trách Nhiệm",
                content: [
                    "Trong mọi trường hợp, Phan Văn Tài, cũng như các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc chi nhánh của ông, sẽ không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng phạt nào.",
                    "Tổng trách nhiệm của chúng tôi đối với bạn về bất kỳ thiệt hại nào sẽ không vượt quá số tiền bạn đã trả cho Dịch vụ trong 12 tháng trước khi khiếu nại.",
                    "Một số khu vực pháp lý không cho phép loại trừ các bảo đảm nhất định hoặc giới hạn trách nhiệm về thiệt hại, vì vậy một số giới hạn trên có thể không áp dụng cho bạn."
                ]
            },
            termination: {
                title: "Chấm Dứt",
                content: [
                    "Chúng tôi có thể chấm dứt hoặc đình chỉ tài khoản của bạn và cấm truy cập vào Dịch vụ ngay lập tức, mà không cần thông báo trước hoặc chịu trách nhiệm, vì bất kỳ lý do gì.",
                    "Bạn có thể chấm dứt tài khoản của mình bất cứ lúc nào bằng cách liên hệ với chúng tôi hoặc xóa Ứng dụng.",
                    "Khi chấm dứt, quyền sử dụng Dịch vụ của bạn sẽ chấm dứt ngay lập tức.",
                    "Tất cả các điều khoản của Điều khoản mà theo bản chất nên tồn tại sau khi chấm dứt sẽ tồn tại sau khi chấm dứt."
                ]
            },
            changes: {
                title: "Thay Đổi Điều Khoản",
                content: [
                    "Chúng tôi có quyền, theo quyết định riêng của mình, sửa đổi hoặc thay thế các Điều khoản này bất cứ lúc nào.",
                    "Nếu một bản sửa đổi là quan trọng, chúng tôi sẽ cố gắng cung cấp thông báo ít nhất 30 ngày trước khi các điều khoản mới có hiệu lực.",
                    "Bằng cách tiếp tục truy cập hoặc sử dụng Dịch vụ của chúng tôi sau khi các bản sửa đổi đó có hiệu lực, bạn đồng ý bị ràng buộc bởi các điều khoản đã được sửa đổi."
                ]
            },
            governingLaw: {
                title: "Luật Áp Dụng",
                content: [
                    "Các Điều khoản này sẽ được giải thích và điều chỉnh bởi luật pháp Việt Nam, không quan tâm đến các điều khoản xung đột pháp luật của nó.",
                    "Việc chúng tôi không thực thi bất kỳ quyền hoặc điều khoản nào của các Điều khoản này sẽ không được coi là từ bỏ các quyền đó.",
                    "Nếu bất kỳ điều khoản nào của các Điều khoản này bị tòa án coi là không hợp lệ hoặc không thể thực thi, các điều khoản còn lại của các Điều khoản này sẽ vẫn có hiệu lực."
                ]
            },
            contact: {
                title: "Thông Tin Liên Hệ",
                content: [
                    "Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản Dịch vụ này, vui lòng liên hệ với chúng tôi:",
                    "Email: taipv.swe@gmail.com",
                    "Chúng tôi sẽ phản hồi yêu cầu của bạn trong một khung thời gian hợp lý.",
                    "Đối với các vấn đề khẩn cấp, vui lòng đánh dấu rõ ràng thông tin liên lạc của bạn là 'Khẩn cấp' trong dòng chủ đề."
                ]
            }
        }
    }
};
