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
        }
    }
};
