// Translation data
const translations = {
    en: {
        nav: {
            home: "Home",
            onboarding: "Onboarding",
            features: "Features",
            howItWorks: "How It Works",
            useCases: "Use Cases",
            about: "About",
            founder: "Founder",
            partners: "Partners",
            signIn: "Sign In",
            getStarted: "Get Started"
        },
        hero: {
            title: "Transform Your Enterprise with AI",
            subtitle: "Delivery Pilot is the leading Platform as a Service (PaaS) solution that accelerates your AI transformation journey. Deploy, manage, and scale AI applications with confidence.",
            startJourney: "Start Your Journey",
            learnMore: "Learn More"
        },
        features: {
            title: "Powerful Features for AI Transformation",
            rapidDeployment: {
                title: "Rapid Deployment",
                description: "Deploy AI models and applications in minutes, not months. Our streamlined platform eliminates complexity and accelerates time-to-market."
            },
            security: {
                title: "Enterprise Security",
                description: "Bank-grade security with compliance support for GDPR, SOC 2, and HIPAA. Your data and models are always protected."
            },
            analytics: {
                title: "AI Analytics",
                description: "Real-time monitoring and insights into your AI applications. Make data-driven decisions with comprehensive analytics dashboards."
            },
            autoScaling: {
                title: "Auto-Scaling",
                description: "Automatically scale your AI workloads based on demand. Pay only for what you use with intelligent resource optimization."
            },
            integration: {
                title: "Easy Integration",
                description: "Seamlessly integrate with your existing tools and workflows. Support for popular AI frameworks and enterprise systems."
            },
            support: {
                title: "Expert Support",
                description: "24/7 support from AI transformation experts. Get guidance from strategy to implementation and beyond."
            }
        },
        howItWorks: {
            title: "How It Works",
            description: "Our platform simplifies your AI transformation journey through a streamlined, four-step process designed for enterprise success.",
            step1: {
                title: "Assess Your Needs",
                description: "We start by understanding your business objectives, current infrastructure, and AI readiness. Our experts conduct a comprehensive assessment to identify opportunities and challenges.",
                detail1: "Business requirements analysis",
                detail2: "Current infrastructure evaluation",
                detail3: "AI readiness assessment",
                detail4: "ROI projection and timeline planning"
            },
            step2: {
                title: "Design & Plan",
                description: "Based on the assessment, we create a customized AI transformation roadmap tailored to your enterprise needs, complete with architecture design and implementation strategy.",
                detail1: "Custom architecture design",
                detail2: "Technology stack selection",
                detail3: "Integration planning",
                detail4: "Risk mitigation strategies"
            },
            step3: {
                title: "Deploy & Integrate",
                description: "Our platform enables rapid deployment of AI models and applications. We ensure seamless integration with your existing systems and provide comprehensive training for your team.",
                detail1: "One-click model deployment",
                detail2: "API and system integration",
                detail3: "Team training and onboarding",
                detail4: "Performance testing and validation"
            },
            step4: {
                title: "Monitor & Optimize",
                description: "Continuous monitoring and optimization ensure your AI applications deliver maximum value. Our analytics dashboard provides real-time insights and performance metrics.",
                detail1: "Real-time performance monitoring",
                detail2: "Automated scaling and optimization",
                detail3: "Regular performance reviews",
                detail4: "Continuous improvement recommendations"
            }
        },
        useCases: {
            title: "AI Transformation Use Cases",
            customerService: {
                title: "Customer Service Automation",
                description: "Deploy intelligent chatbots and virtual assistants that understand and respond to customer needs 24/7."
            },
            predictive: {
                title: "Predictive Analytics",
                description: "Leverage machine learning models to forecast trends, optimize operations, and make proactive decisions."
            },
            document: {
                title: "Document Intelligence",
                description: "Automate document processing with AI-powered extraction, classification, and analysis capabilities."
            },
            quality: {
                title: "Quality Assurance",
                description: "Implement AI-driven quality control systems that detect defects and ensure product excellence."
            }
        },
        raise: {
            title: "Solving the RAISE Challenge",
            subtitle: "Rapid AI Increases Skills Expectations - The Critical Challenge Facing Modern Enterprises",
            problem: {
                title: "The Problem",
                description: "AI technology is evolving at an unprecedented pace, creating a widening gap between required skills and current capabilities. Professionals struggle to keep up with rapidly changing tools, frameworks, and best practices, while enterprises face delivery gaps that threaten their competitive advantage."
            },
            solution: {
                title: "Our Solution",
                description: "Delivery Pilot bridges this gap through a systematic approach designed specifically for professionals and enterprises:",
                assessment: "📊 Assessments: Identify your current AI maturity level and pinpoint specific delivery gaps",
                workshops: "🎓 Workshops: Hands-on training on the Top 10 AI topics to rapidly upskill your team",
                gitBased: "💻 Git-Based Product Outputs: Real project deliverables that demonstrate practical skills and close the execution gap"
            },
            cta: {
                assess: "Identify Your Delivery Gaps",
                learn: "Learn About Our Process"
            }
        },
        about: {
            title: "About Delivery Pilot",
            description1: "Delivery Pilot is a cutting-edge Platform as a Service (PaaS) designed specifically for enterprises embarking on their AI transformation journey. We understand that adopting AI technology can be complex and challenging, which is why we've built a platform that simplifies every step of the process.",
            description2: "Our mission is to democratize AI for enterprises of all sizes, providing the tools, infrastructure, and expertise needed to successfully implement AI solutions that drive real business value.",
            stats: {
                customers: "Enterprise Customers",
                github: "in GitHub with +200 repos",
                deployment: "Faster Deployment"
            }
        },
        contact: {
            title: "Start Your AI Transformation",
            subtitle: "Ready to transform your enterprise with AI? Get in touch with our team to learn how Delivery Pilot can help.",
            form: {
                name: "Your Name",
                email: "Your Email",
                company: "Company Name",
                message: "Tell us about your AI transformation goals",
                submit: "Request Consultation",
                successMessage: "Thank you for your interest! Our team will contact you shortly to discuss your AI transformation journey."
            }
        },
        partners: {
            title: "Our Global Partners",
            subtitle: "Working with leading organizations worldwide to deliver exceptional AI transformation services",
            turkey: {
                title: "Turkey",
                academyPeak: {
                    description: "Academy Peak is a leading training and development organization in Turkey, specializing in professional development and enterprise training solutions. They help organizations build skilled teams through comprehensive training programs.",
                    focus: "Focus:",
                    focusAreas: "Professional Training, Enterprise Development, Skills Enhancement"
                }
            },
            uk: {
                title: "United Kingdom",
                pexabo: {
                    description: "Pexabo is a technology consulting firm based in the United Kingdom, providing innovative solutions for digital transformation and enterprise technology implementation. They work with organizations to modernize their technology infrastructure and processes.",
                    focus: "Focus:",
                    focusAreas: "Digital Transformation, Technology Consulting, Enterprise Solutions"
                }
            },
            backToHome: "← Back to Home"
        },
        footer: {
            tagline: "Enterprise AI Transformation Platform",
            platform: {
                title: "Platform",
                features: "Features",
                howItWorks: "How It Works",
                useCases: "Use Cases",
                pricing: "Pricing"
            },
            company: {
                title: "Company",
                about: "About",
                founder: "Founder",
                partners: "Partners",
                previousCustomers: "Previous Customers",
                careers: "Careers",
                contact: "Contact"
            },
            resources: {
                title: "Resources",
                documentation: "Documentation",
                blog: "Blog",
                support: "Support"
            },
            copyright: "© {year} Delivery Pilot. All rights reserved."
        },
        onboarding: {
            hero: {
                badge: "🚀 Enterprise AI Transformation",
                title: "Delivery Pilot 🚀",
                subtitle: "Solving RAISE: Rapid AI Increases Skills Expectations 📈",
                description: "Welcome to the new era of enterprise transformation! ✨ We bridge the gap between traditional engineering and the new world of Vibe Programming. Join the revolution where developers and non-developers unite in a continuous learning cycle.",
                process: "Assessment 🕵️‍♂️ → Training 🎓 → Implementation 🚀",
                startAssessment: "🚀 Start Your Assessment",
                exploreVibe: "✨ Explore the Vibe",
                author: "Delivery Pilot<br>by Rifat Erdem Sahin"
            },
            transformation: {
                title: "The 3 Stages of Transformation",
                subtitle: "A continuous cycle of learning and implementation for the AI era.",
                stage1: {
                    icon: "🔍",
                    number: "1. Assessment",
                    title: "Quarterly 1-1 Private Meetings.",
                    description: "Confidential assessments tailored to your role.",
                    feature1: "🔒 Private & Secure: 1-1 sessions are strictly confidential.",
                    feature2: "💻 Developers: Share your Git repositories (public or private).",
                    feature3: "✍️ Non-Developers: Share your prompts and workflows.",
                    feature4: "🎯 Identify Delivery Gaps: Pinpoint specific skill gaps and delivery bottlenecks.",
                    feature5: "📄 Outcome: Everyone receives a unique maturity assessment report containing a tailored training roadmap for the AI courses."
                },
                stage2: {
                    icon: "🎓",
                    number: "2. Workshops",
                    title: "One-to-Many hands-on implementation on top 10 AI topics.",
                    description: "After assessment comes the knowledge download. We cover the Top 10 AI Courses in a lecture style to get everyone on the same wavelength.",
                    curriculumTitle: "📚 Curriculum Includes:",
                    curriculum1: "✨ Vibe Programming",
                    curriculum2: "🤖 RAF & Xazi Frameworks",
                    curriculum3: "🧠 Model Training & Security",
                    curriculum4: "🔄 Hybrid AI Modeling"
                },
                stage3: {
                    icon: "⚙️",
                    number: "3. Express",
                    title: "Merging Worlds with Implementation.",
                    description: "This is where the magic happens. Developers and non-developers team up to bridge the gap between the deterministic and non-deterministic worlds.",
                    feature1: "🎨 Creativity at the Core: Essential for fulfilling demanding requirements.",
                    feature2: "💻 Git-Based Product Outputs: Real deliverables demonstrating practical skills and closing execution gaps.",
                    feature3: "🚀 Evolution: Stakeholders evolve from I-shaped to M-shaped and X-shaped skills.",
                    feature4: "🤝 Enterprise-Wide Collaboration: Solving RAISE together through continuous learning."
                }
            },
            framework: {
                title: "Where Vibe Programming meets Agentic Frameworks 🤝",
                subtitle: "The detailed methodology behind our implementation strategy.",
                real: {
                    icon: "🌍",
                    title: "Real - The Job That Starts with Objective and Key Results",
                    description: "Sets goals and objectives, aligning tasks with measurable results.",
                    action: "Action: Aim > Goals"
                },
                journey: {
                    icon: "✈️",
                    title: "Journey - Visual Story Explained with Steps",
                    description: "A self-learning guide from beginner to skilled in visual storytelling.",
                    action: "Action: Feel > Experience"
                },
                environments: {
                    icon: "🌳",
                    title: "Environments - The Roadmap and Use Cases",
                    description: "A roadmap with learning modules and real-world use cases to apply new skills.",
                    action: "Action: Create > Runtimes"
                },
                imaginary: {
                    icon: "🌌",
                    title: "Imaginary - What You Learn on the Road",
                    description: "Tracks concepts, theories, and skills acquired, promoting continuous growth.",
                    action: "Action: Capture > Screenshots"
                },
                formulas: {
                    icon: "📐",
                    title: "Formulas - The Guides That Are Mentioned",
                    description: "Essential guides and formulas for understanding and solving project challenges.",
                    action: "Action: GPT > Learn from it"
                },
                symbols: {
                    icon: "🔣",
                    title: "Symbols - Code That Is Implemented",
                    description: "Includes code snippets and examples to demonstrate each concept practically.",
                    action: "Action: Execute > Code"
                },
                semblance: {
                    icon: "🌀",
                    title: "Semblance - Errors Found in the Process",
                    description: "Documents mistakes and solutions, making errors valuable learning opportunities.",
                    action: "Action: Fix > Errors"
                }
            },
            courses: {
                title: "Top 10 AI Courses 🚀",
                subtitle: "Master the tools of the trade with our curated curriculum."
            },
            pricingCta: {
                title: "Ready to Get Started?",
                subtitle: "Explore our flexible pricing plans designed to meet your needs",
                viewPricing: "💰 View Pricing Plans",
                startAssessment: "🚀 Start Free Assessment"
            },
            cta: {
                title: "Ready to Build Always Learning Organizations?",
                description: "Transform your enterprise into an always learning organization! Let Delivery Pilot help you meet the vibe coders from juniors and the agentic frameworks from seniors. Stop letting skills gaps hold you back - identify your gaps and initiate self-learning in yourself and your teams today.",
                scheduleButton: "📅 Schedule Interview",
                linkedinButton: "Connect on LinkedIn"
            },
            resources: {
                title: "📄 Download Resources",
                subtitle: "Get the Delivery Pilot documentation in PDF format",
                downloadEnglish: "📥 Download PDF (English)",
                downloadTurkish: "📥 Download PDF (Turkish)"
            },
            contact: {
                title: "Get Started with Delivery Pilot",
                subtitle: "Ready to transform your enterprise? Get in touch with our team to start your AI transformation journey.",
                namePlaceholder: "Your Name",
                emailPlaceholder: "Your Email",
                companyPlaceholder: "Company Name",
                messagePlaceholder: "Tell us about your AI transformation goals",
                submitButton: "Request Consultation"
            }
        },
        agile: {
            hero: {
                title: "From Burnout to Breakthrough: How AI Completes the Agile Promise",
                subtitle: "Why AI transformation is the evolution Agile has been waiting for."
            },
            evolution: {
                title: "The Evolution of Digital Transformation",
                description1: "Agile transformation revolutionized the way we work, introducing frameworks for faster delivery and adaptability. However, as organizations scaled, Agile encountered friction: unintentionally reinforcing organizational silos and driving high-performance teams toward burnout.",
                quote: "AI Transformation does not replace Agile; it fixes it.",
                description2: "Where Agile provided the structure for speed, AI provides the capacity for sustainability. Instead of specialized teams sprinting in isolation, AI democratizes capabilities, allowing the Agile framework to finally live up to its promise of inclusive, sustainable innovation."
            },
            comparison: {
                title: "⚡ Agile Alone vs. 🤖 Agile + AI",
                subtitle: "How AI acts as the force multiplier for your existing Agile structures.",
                aspects: {
                    teamStructure: {
                        aspect: "Team Structure",
                        traditional: "Often creates specialized, isolated silos (DevOps, QA, Design).",
                        evolution: "Breaks down silos by enabling cross-functional understanding and contribution."
                    },
                    knowledge: {
                        aspect: "Knowledge Access",
                        traditional: "Expertise is concentrated in key specialists (the \"Bus Factor\").",
                        evolution: "Democratizes access, giving everyone instant \"senior-level\" context and guidance."
                    },
                    workload: {
                        aspect: "Workload Impact",
                        traditional: "Constant sprint pressure creates a culture of \"always-on\" urgency.",
                        evolution: "Reduces cognitive load by offloading repetitive tasks, making the pace sustainable."
                    },
                    contribution: {
                        aspect: "Contribution Model",
                        traditional: "Only technical specialists can influence technical decisions.",
                        evolution: "Inclusive contribution; non-tech roles can prototype and build with AI assistance."
                    },
                    innovation: {
                        aspect: "Innovation",
                        traditional: "Limited to R&D teams or specific \"Innovation Sprints.\"",
                        evolution: "Continuous innovation where any team member can rapidly prototype an idea."
                    }
                }
            },
            friction: {
                title: "🔴 The Friction Points of Agile",
                subtitle: "Agile was designed for speed, but without AI, that speed often comes at a high human cost.",
                silos: {
                    title: "Organizational Silos",
                    description: "Agile teams often optimize for their own velocity, creating boundaries that hinder cross-team collaboration."
                },
                burnout: {
                    title: "The Burnout Trap",
                    description: "The relentless cycle of planning, executing, and reviewing creates unsustainable pressure. Without support, \"working at a sustainable pace\" becomes a myth."
                },
                dependency: {
                    title: "Specialist Dependency",
                    description: "When knowledge is locked inside the heads of a few experts, workflows stall the moment those specialists are unavailable."
                },
                ceremony: {
                    title: "Ceremony Overload",
                    description: "Standups, retrospectives, and refinement sessions consume vast amounts of time—time that isn't spent creating value."
                }
            },
            unlock: {
                title: "🟢 How AI Unlocks the Agile Ideal",
                universal: {
                    title: "1. From Silos to Universal Contribution",
                    description: "AI acts as a universal translator and assistant. A marketing professional can now contribute to technical documentation; a developer can generate high-quality design assets. By lowering the barrier to entry for tasks, AI allows the entire organization to contribute to the product vision."
                },
                sustainable: {
                    title: "2. Restoring a Sustainable Pace",
                    description: "AI fundamentally changes the equation from \"work harder\" to \"work with augmentation.\" By handling the repetitive, draining tasks (like code generation, data cleaning, or meeting summarization), AI frees humans to focus on creative strategy, empathy, and complex problem-solving."
                },
                democratization: {
                    title: "3. Knowledge Democratization",
                    description: "The gap between junior and senior team members narrows. AI provides on-demand mentorship and technical guidance, allowing teams to upskill in real-time and reducing the bottleneck on senior staff."
                },
                innovation: {
                    title: "4. Innovation Without Boundaries",
                    description: "When technical complexity is handled by AI, innovation is no longer the domain of the few. The best ideas can be rapidly prototyped and tested by anyone in the organization, fostering a culture of true inclusivity."
                }
            },
            quote: {
                text: "Agile taught us how to iterate faster. AI gives us the capacity to include everyone in that iteration. The future isn't about specialized teams moving fast in isolation—it's about empowered individuals collaborating without boundaries.",
                author: "— Rifat Erdem Sahin"
            },
            pathForward: {
                title: "The Path Forward: The Era of the M-Shaped Employee",
                description: "Agile championed the T-shaped skill set (deep expertise in one area, broad knowledge of others). AI transformation accelerates the evolution into M-shaped skills—multiple areas of deep competence achieved through AI-augmented learning.",
                collaboration: {
                    title: "Collaboration Over Complexity",
                    description: "When AI handles the technical \"how,\" teams focus on the \"why.\""
                },
                humanCentric: {
                    title: "Human-Centric Value",
                    description: "Freed from administrative burdens, teams can focus on empathy, relationship building, and strategic thinking."
                },
                sustainableGrowth: {
                    title: "Sustainable Growth",
                    description: "Innovation becomes a natural byproduct of empowered workers, not a result of exhausting sprints."
                }
            },
            cta: {
                title: "Ready for an Inclusive Transformation?",
                description: "Move beyond the sprint. Empower everyone in your organization with the capabilities to build, create, and innovate.",
                pilotTitle: "🚀 Delivery Pilot",
                pilotDescription: "Start your AI transformation journey with a focused pilot.",
                pilotButton: "Get Started",
                maturityTitle: "🏢 Enterprise AI Maturity",
                maturityDescription: "Assess your organization's readiness for AI augmentation.",
                maturityButton: "Learn More"
            }
        }
    },
    tr: {
        nav: {
            home: "Ana Sayfa",
            onboarding: "Katılım",
            features: "Özellikler",
            howItWorks: "Nasıl Çalışır",
            useCases: "Kullanım Alanları",
            about: "Hakkımızda",
            founder: "Kurucu",
            partners: "Ortaklar",
            signIn: "Giriş Yap",
            getStarted: "Başlayın"
        },
        hero: {
            title: "İşletmenizi Yapay Zeka ile Dönüştürün",
            subtitle: "Delivery Pilot, yapay zeka dönüşüm yolculuğunuzu hızlandıran lider Hizmet Olarak Platform (PaaS) çözümüdür. Yapay zeka uygulamalarını güvenle dağıtın, yönetin ve ölçeklendirin.",
            startJourney: "Yolculuğunuza Başlayın",
            learnMore: "Daha Fazla Bilgi"
        },
        features: {
            title: "Yapay Zeka Dönüşümü için Güçlü Özellikler",
            rapidDeployment: {
                title: "Hızlı Dağıtım",
                description: "Yapay zeka modellerini ve uygulamalarını aylar değil, dakikalar içinde dağıtın. Kolaylaştırılmış platformumuz karmaşıklığı ortadan kaldırır ve pazara çıkış süresini hızlandırır."
            },
            security: {
                title: "Kurumsal Güvenlik",
                description: "GDPR, SOC 2 ve HIPAA uyumluluk desteği ile banka düzeyinde güvenlik. Verileriniz ve modelleriniz her zaman korunur."
            },
            analytics: {
                title: "Yapay Zeka Analitiği",
                description: "Yapay zeka uygulamalarınıza gerçek zamanlı izleme ve içgörüler. Kapsamlı analitik panolarıyla veriye dayalı kararlar alın."
            },
            autoScaling: {
                title: "Otomatik Ölçeklendirme",
                description: "Yapay zeka iş yüklerinizi talebe göre otomatik olarak ölçeklendirin. Akıllı kaynak optimizasyonu ile yalnızca kullandığınız kadar ödeyin."
            },
            integration: {
                title: "Kolay Entegrasyon",
                description: "Mevcut araçlarınız ve iş akışlarınızla sorunsuz bir şekilde entegre olun. Popüler yapay zeka çerçeveleri ve kurumsal sistemler için destek."
            },
            support: {
                title: "Uzman Desteği",
                description: "Yapay zeka dönüşüm uzmanlarından 7/24 destek. Stratejiden uygulamaya ve ötesine kadar rehberlik alın."
            }
        },
        howItWorks: {
            title: "Nasıl Çalışır",
            description: "Platformumuz, kurumsal başarı için tasarlanmış kolaylaştırılmış, dört adımlı bir süreç aracılığıyla yapay zeka dönüşüm yolculuğunuzu basitleştirir.",
            step1: {
                title: "İhtiyaçlarınızı Değerlendirin",
                description: "İş hedeflerinizi, mevcut altyapınızı ve yapay zeka hazırlığınızı anlayarak başlıyoruz. Uzmanlarımız, fırsatları ve zorlukları belirlemek için kapsamlı bir değerlendirme yapar.",
                detail1: "İş gereksinimleri analizi",
                detail2: "Mevcut altyapı değerlendirmesi",
                detail3: "Yapay zeka hazırlık değerlendirmesi",
                detail4: "Yatırım getirisi projeksiyonu ve zaman çizelgesi planlaması"
            },
            step2: {
                title: "Tasarlayın ve Planlayın",
                description: "Değerlendirmeye dayanarak, mimari tasarım ve uygulama stratejisiyle birlikte kurumsal ihtiyaçlarınıza özel özelleştirilmiş bir yapay zeka dönüşüm yol haritası oluşturuyoruz.",
                detail1: "Özel mimari tasarım",
                detail2: "Teknoloji yığını seçimi",
                detail3: "Entegrasyon planlaması",
                detail4: "Risk azaltma stratejileri"
            },
            step3: {
                title: "Dağıtın ve Entegre Edin",
                description: "Platformumuz, yapay zeka modellerinin ve uygulamalarının hızlı dağıtımını sağlar. Mevcut sistemlerinizle sorunsuz entegrasyon sağlıyor ve ekibiniz için kapsamlı eğitim sunuyoruz.",
                detail1: "Tek tıkla model dağıtımı",
                detail2: "API ve sistem entegrasyonu",
                detail3: "Ekip eğitimi ve işe alıştırma",
                detail4: "Performans testi ve doğrulama"
            },
            step4: {
                title: "İzleyin ve Optimize Edin",
                description: "Sürekli izleme ve optimizasyon, yapay zeka uygulamalarınızın maksimum değer sağlamasını garanti eder. Analitik panosumuz gerçek zamanlı içgörüler ve performans metrikleri sağlar.",
                detail1: "Gerçek zamanlı performans izleme",
                detail2: "Otomatik ölçeklendirme ve optimizasyon",
                detail3: "Düzenli performans incelemeleri",
                detail4: "Sürekli iyileştirme önerileri"
            }
        },
        useCases: {
            title: "Yapay Zeka Dönüşümü Kullanım Alanları",
            customerService: {
                title: "Müşteri Hizmetleri Otomasyonu",
                description: "Müşteri ihtiyaçlarını anlayan ve 7/24 yanıt veren akıllı sohbet robotları ve sanal asistanlar dağıtın."
            },
            predictive: {
                title: "Tahmine Dayalı Analitik",
                description: "Trendleri tahmin etmek, operasyonları optimize etmek ve proaktif kararlar almak için makine öğrenimi modellerinden yararlanın."
            },
            document: {
                title: "Belge Zekası",
                description: "Yapay zeka destekli çıkarma, sınıflandırma ve analiz yetenekleriyle belge işlemeyi otomatikleştirin."
            },
            quality: {
                title: "Kalite Güvencesi",
                description: "Kusurları tespit eden ve ürün mükemmelliğini sağlayan yapay zeka odaklı kalite kontrol sistemleri uygulayın."
            }
        },
        raise: {
            title: "RAISE Zorluğunu Çözmek",
            subtitle: "Hızlı Yapay Zeka Beceri Beklentilerini Artırıyor - Modern İşletmelerin Karşılaştığı Kritik Zorluk",
            problem: {
                title: "Sorun",
                description: "Yapay zeka teknolojisi benzeri görülmemiş bir hızla gelişiyor ve gerekli beceriler ile mevcut yetenekler arasında genişleyen bir boşluk yaratıyor. Profesyoneller hızla değişen araçlara, çerçevelere ve en iyi uygulamalara ayak uydurmakta zorlanırken, işletmeler rekabet avantajlarını tehdit eden teslimat boşluklarıyla karşı karşıya kalıyor."
            },
            solution: {
                title: "Çözümümüz",
                description: "Delivery Pilot, profesyoneller ve işletmeler için özel olarak tasarlanmış sistematik bir yaklaşımla bu boşluğu kapatır:",
                assessment: "📊 Değerlendirmeler: Mevcut yapay zeka olgunluk seviyenizi belirleyin ve spesifik teslimat boşluklarını tespit edin",
                workshops: "🎓 Atölyeler: Ekibinizi hızla geliştirmek için En İyi 10 Yapay Zeka konusunda uygulamalı eğitim",
                gitBased: "💻 Git Tabanlı Ürün Çıktıları: Pratik becerileri gösteren ve yürütme boşluğunu kapatan gerçek proje teslimatları"
            },
            cta: {
                assess: "Teslimat Boşluklarınızı Belirleyin",
                learn: "Sürecimiz Hakkında Bilgi Edinin"
            }
        },
        about: {
            title: "Delivery Pilot Hakkında",
            description1: "Delivery Pilot, yapay zeka dönüşüm yolculuğuna çıkan işletmeler için özel olarak tasarlanmış son teknoloji bir Hizmet Olarak Platform (PaaS) çözümüdür. Yapay zeka teknolojisini benimsemenin karmaşık ve zorlayıcı olabileceğini anlıyoruz, bu yüzden sürecin her adımını basitleştiren bir platform oluşturduk.",
            description2: "Misyonumuz, gerçek iş değeri sağlayan yapay zeka çözümlerini başarıyla uygulamak için gereken araçları, altyapıyı ve uzmanlığı sağlayarak her büyüklükteki işletme için yapay zekayı demokratikleştirmektir.",
            stats: {
                customers: "Kurumsal Müşteri",
                github: "GitHub'da +200 repo",
                deployment: "Daha Hızlı Dağıtım"
            }
        },
        contact: {
            title: "Yapay Zeka Dönüşümünüze Başlayın",
            subtitle: "İşletmenizi yapay zeka ile dönüştürmeye hazır mısınız? Delivery Pilot'un nasıl yardımcı olabileceğini öğrenmek için ekibimizle iletişime geçin.",
            form: {
                name: "Adınız",
                email: "E-posta Adresiniz",
                company: "Şirket Adı",
                message: "Yapay zeka dönüşüm hedefleriniz hakkında bize bilgi verin",
                submit: "Danışmanlık Talep Edin",
                successMessage: "İlginiz için teşekkür ederiz! Ekibimiz, yapay zeka dönüşüm yolculuğunuzu görüşmek için yakında sizinle iletişime geçecek."
            }
        },
        partners: {
            title: "Küresel Ortaklarımız",
            subtitle: "Olağanüstü yapay zeka dönüşüm hizmetleri sunmak için dünya çapında önde gelen kuruluşlarla çalışıyoruz",
            turkey: {
                title: "Türkiye",
                academyPeak: {
                    description: "Academy Peak, profesyonel gelişim ve kurumsal eğitim çözümlerinde uzmanlaşmış, Türkiye'nin önde gelen eğitim ve geliştirme kuruluşudur. Kapsamlı eğitim programları aracılığıyla kuruluşların yetenekli ekipler oluşturmasına yardımcı olurlar.",
                    focus: "Odak:",
                    focusAreas: "Profesyonel Eğitim, Kurumsal Gelişim, Beceri Geliştirme"
                }
            },
            uk: {
                title: "Birleşik Krallık",
                pexabo: {
                    description: "Pexabo, Birleşik Krallık merkezli bir teknoloji danışmanlık firmasıdır ve dijital dönüşüm ve kurumsal teknoloji uygulaması için yenilikçi çözümler sunmaktadır. Kuruluşların teknoloji altyapısını ve süreçlerini modernize etmelerine yardımcı olurlar.",
                    focus: "Odak:",
                    focusAreas: "Dijital Dönüşüm, Teknoloji Danışmanlığı, Kurumsal Çözümler"
                }
            },
            backToHome: "← Ana Sayfaya Dön"
        },
        footer: {
            tagline: "Kurumsal Yapay Zeka Dönüşüm Platformu",
            platform: {
                title: "Platform",
                features: "Özellikler",
                howItWorks: "Nasıl Çalışır",
                useCases: "Kullanım Alanları",
                pricing: "Fiyatlandırma"
            },
            company: {
                title: "Şirket",
                about: "Hakkımızda",
                founder: "Kurucu",
                partners: "Ortaklar",
                previousCustomers: "Önceki Müşteriler",
                careers: "Kariyer",
                contact: "İletişim"
            },
            resources: {
                title: "Kaynaklar",
                documentation: "Dokümantasyon",
                blog: "Blog",
                support: "Destek"
            },
            copyright: "© {year} Delivery Pilot. Tüm hakları saklıdır."
        },
        onboarding: {
            hero: {
                badge: "Kurumsal Yapay Zeka Dönüşümü",
                title: "Delivery Pilot 🚀",
                subtitle: "RAISE Çözümü: Hızlı Yapay Zeka Beceri Beklentilerini Artırıyor 📈",
                description: "Kurumsal dönüşümün yeni çağına hoş geldiniz! ✨ Geleneksel mühendislik ile Vibe Programlamanın yeni dünyası arasında köprü kuruyoruz. Geliştiricilerin ve geliştiriciolmayanların sürekli öğrenme döngüsünde birleştiği devrime katılın.",
                process: "Değerlendirme 🕵️‍♂️ → Eğitim 🎓 → Uygulama 🚀",
                startAssessment: "🚀 Değerlendirmenizi Başlatın",
                exploreVibe: "✨ Vibe'ı Keşfedin",
                author: "Delivery Pilot<br>Rifat Erdem Sahin tarafından"
            },
            transformation: {
                title: "Dönüşümün 3 Aşaması",
                subtitle: "Yapay zeka çağı için sürekli öğrenme ve uygulama döngüsü.",
                stage1: {
                    icon: "🔍",
                    number: "1. Değerlendirme",
                    title: "Üç Ayda Bir 1-1 Özel Toplantılar.",
                    description: "Rolünüze özel gizli değerlendirmeler.",
                    feature1: "🔒 Özel ve Güvenli: 1-1 oturumlar kesinlikle gizlidir.",
                    feature2: "💻 Geliştiriciler: Git depolarınızı paylaşın (genel veya özel).",
                    feature3: "✍️ Geliştirici Olmayanlar: Promptlarınızı ve iş akışlarınızı paylaşın.",
                    feature4: "🎯 Teslimat Boşluklarını Belirleyin: Spesifik beceri boşluklarını ve teslimat darboğazlarını tespit edin.",
                    feature5: "📄 Sonuç: Herkes, yapay zeka kursları için özel bir eğitim yol haritası içeren benzersiz bir olgunluk değerlendirme raporu alır."
                },
                stage2: {
                    icon: "🎓",
                    number: "2. Atölyeler",
                    title: "En İyi 10 Yapay Zeka konusunda bire-çok uygulamalı uygulama.",
                    description: "Değerlendirmeden sonra bilgi indirmesi gelir. Herkesi aynı dalga boyuna getirmek için En İyi 10 Yapay Zeka Kursunu ders tarzında kapsıyoruz.",
                    curriculumTitle: "📚 Müfredat İçeriği:",
                    curriculum1: "✨ Vibe Programlama",
                    curriculum2: "🤖 RAF ve Xazi Çerçeveleri",
                    curriculum3: "🧠 Model Eğitimi ve Güvenlik",
                    curriculum4: "🔄 Hibrit Yapay Zeka Modelleme"
                },
                stage3: {
                    icon: "⚙️",
                    number: "3. Express",
                    title: "Uygulama ile Dünyaları Birleştirme.",
                    description: "Sihir burada gerçekleşir. Geliştiriciler ve geliştirici olmayanlar, deterministik ve deterministik olmayan dünyalar arasındaki boşluğu kapatmak için bir araya gelir.",
                    feature1: "🎨 Özünde Yaratıcılık: Zorlu gereksinimleri yerine getirmek için gereklidir.",
                    feature2: "💻 Git Tabanlı Ürün Çıktıları: Pratik becerileri gösteren ve yürütme boşluğunu kapatan gerçek teslimatlar.",
                    feature3: "🚀 Evrim: Paydaşlar I-şekilli becerilerden M-şekilli ve X-şekilli becerilere evrilir.",
                    feature4: "🤝 Kurumsal Çapta İşbirliği: RAISE'yi birlikte çözmek."
                }
            },
            framework: {
                title: "Vibe Programlama Aracı Çerçeveleriyle Buluşuyor 🤝",
                subtitle: "Uygulama stratejimizin arkasındaki detaylı metodoloji.",
                real: {
                    icon: "🌍",
                    title: "Gerçek - Hedef ve Anahtar Sonuçlarla Başlayan İş",
                    description: "Hedefleri ve amaçları belirler, görevleri ölçülebilir sonuçlarla hizalar.",
                    action: "Aksiyon: Hedefle > Hedefler"
                },
                journey: {
                    icon: "✈️",
                    title: "Yolculuk - Adımlarla Açıklanan Görsel Hikaye",
                    description: "Görsel hikaye anlatımında yeni başlayandan yetenekliye kendi kendine öğrenme rehberi.",
                    action: "Aksiyon: Hisset > Deneyim"
                },
                environments: {
                    icon: "🌳",
                    title: "Ortamlar - Yol Haritası ve Kullanım Durumları",
                    description: "Öğrenme modülleri ve yeni becerileri uygulamak için gerçek dünya kullanım durumları ile bir yol haritası.",
                    action: "Aksiyon: Oluştur > Çalışma Zamanları"
                },
                imaginary: {
                    icon: "🌌",
                    title: "Hayali - Yolda Öğrendikleriniz",
                    description: "Edinilen kavramları, teorileri ve becerileri izler, sürekli büyümeyi teşvik eder.",
                    action: "Aksiyon: Yakala > Ekran Görüntüleri"
                },
                formulas: {
                    icon: "📐",
                    title: "Formüller - Bahsedilen Rehberler",
                    description: "Proje zorluklarını anlamak ve çözmek için temel kılavuzlar ve formüller.",
                    action: "Aksiyon: GPT > Ondan öğren"
                },
                symbols: {
                    icon: "🔣",
                    title: "Semboller - Uygulanan Kod",
                    description: "Her konsepti pratik olarak göstermek için kod parçacıkları ve örnekler içerir.",
                    action: "Aksiyon: Çalıştır > Kod"
                },
                semblance: {
                    icon: "🌀",
                    title: "Benzerlik - Süreçte Bulunan Hatalar",
                    description: "Hataları ve çözümleri belgeler, hataları değerli öğrenme fırsatları haline getirir.",
                    action: "Aksiyon: Düzelt > Hatalar"
                }
            },
            courses: {
                title: "En İyi 10 Yapay Zeka Kursu 🚀",
                subtitle: "Küratörlüğünü yaptığımız müfredatla mesleğin araçlarında ustalaşın."
            },
            pricingCta: {
                title: "Başlamaya Hazır mısınız?",
                subtitle: "İhtiyaçlarınıza göre tasarlanmış esnek fiyatlandırma planlarımızı keşfedin",
                viewPricing: "💰 Fiyatlandırma Planlarını Görüntüle",
                startAssessment: "🚀 Ücretsiz Değerlendirme Başlat"
            },
            supportPlans: {
                title: "Destek Planları",
                subtitle: "Öğrenme ve uygulama ihtiyaçlarınıza uygun destek planını seçin",
                prosumer: {
                    name: "Prosumer",
                    subtitle: "1'e 1 Değerlendirme",
                    price: "$50",
                    period: "oturum başına",
                    bookButton: "📅 Değerlendirme Rezervasyonu"
                },
                workshops: {
                    name: "Atölyeler",
                    subtitle: "Yerinde İngiltere ve Küresel Oturumlar",
                    price: "£500",
                    period: "danışman/gün başına",
                    scheduleButton: "📅 Görüşme Planla"
                },
                enterprise: {
                    badge: "En Popüler",
                    name: "Profesyonel ve Kurumsal",
                    subtitle: "Ekip Kurumsal Çapta Yapay Zeka Adaptasyonu",
                    price: "Teklif İsteyin",
                    period: "özel fiyatlandırma",
                    scheduleButton: "📅 Görüşme Planla"
                },
                assessmentCta: {
                    title: "🔍 Ücretsiz Değerlendirme Görüşmesi Planlayın",
                    description: "Buradan başlayın: Belirli beceri boşluklarını belirlemek ve öğrenmenize nerede odaklanmanız gerektiği konusunda kişiselleştirilmiş geri bildirim almak için kodunuzu yapay zeka tarafından değerlendirin",
                    button: "🚀 Değerlendirmenizi Başlatın"
                }
            },
            cta: {
                title: "Her Zaman Öğrenen Organizasyonlar Oluşturmaya Hazır mısınız?",
                description: "İşletmenizi her zaman öğrenen bir organizasyona dönüştürün! Delivery Pilot'un juniorlardan vibe kodlayıcılarla ve seniorlardan aracı çerçevelerle tanışmanıza yardımcı olmasına izin verin. Beceri boşluklarının sizi geri tutmasına izin vermeyin - boşluklarınızı belirleyin ve kendinizde ve ekiplerinizde bugün kendi kendine öğrenmeyi başlatın.",
                scheduleButton: "📅 Görüşme Planla",
                linkedinButton: "LinkedIn'de Bağlantı Kurun"
            },
            resources: {
                title: "📄 Kaynakları İndirin",
                subtitle: "Delivery Pilot dokümantasyonunu PDF formatında alın",
                downloadEnglish: "📥 PDF İndir (İngilizce)",
                downloadTurkish: "📥 PDF İndir (Türkçe)"
            },
            contact: {
                title: "Delivery Pilot ile Başlayın",
                subtitle: "İşletmenizi dönüştürmeye hazır mısınız? Yapay zeka dönüşüm yolculuğunuza başlamak için ekibimizle iletişime geçin.",
                namePlaceholder: "Adınız",
                emailPlaceholder: "E-postanız",
                companyPlaceholder: "Şirket Adı",
                messagePlaceholder: "Yapay zeka dönüşüm hedefleriniz hakkında bize bilgi verin",
                submitButton: "Danışmanlık Talep Edin"
            }
        },
        founder: {
            hero: {
                title: "Kurucumuzu Tanıyın",
                subtitle: "Rifat Erdem Sahin - Yapay Zeka ve DevOps'ta Vizyoner Lider"
            },
            profile: {
                title: "PROFESYONEL PROFİL",
                description: "CI/CD, DevOps ve yapay zeka tabanlı mimarilerde derin uzmanlığa sahip deneyimli bir mühendis. Otomasyon, ölçeklenebilirlik ve güvenliğe odaklanarak kurumsal sistemleri optimize etme ve otomatikleştirme konusunda kanıtlanmış bir geçmişe sahibim.",
                clearanceUK: "İngiltere SC Onaylı",
                clearanceNATO: "NATO Onaylı"
            },
            expertise: {
                title: "TEMEL UZMANLIK",
                genai: "Üretken Yapay Zeka ve RAG: GenAI çözümleri ve Vektör veritabanları oluşturma/dağıtma.",
                security: "Yapay Zeka Güvenliği: Prompt enjeksiyon önleme ve güvenli model dağıtımı.",
                devops: "DevOps/SRE: CI/CD, Kod Olarak Altyapı, Kubernetes, Docker.",
                cloud: "Bulut: Azure, AWS, GCP, Terraform, Ansible."
            },
            accomplishments: {
                title: "SON BAŞARILAR",
                goldman2024: "🏆 2024 (Goldman Sachs): Yapay zeka destekli CI/CD çerçevesi geliştirdi, dağıtım sıklığını %300 artırdı.",
                ypsomed2023: "🏆 2023 (Ypsomed): IoT sistemlerini taşıdı, sürüm çakışmalarını %40 azalttı.",
                cushman2022: "🏆 2022 (Cushman & Wakefield): ETL süreçlerini otomatikleştirdi, hızı %50 artırdı.",
                emerson2021: "🏆 2021 (Emerson): GPU tabanlı konteynerler kullanarak hesaplama verimliliğini %45 artırdı.",
                microsoft2016: "🏆 2016 (Microsoft): Kurumsal Dönüşüm Mimarı olarak teknoloji kullanımını %50 artırdı."
            },
            social: {
                title: "Rifat Erdem Sahin ile Bağlantı Kurun",
                linkedin: "LinkedIn Profili",
                youtube: "YouTube Kanalı"
            }
        },
        agile: {
            hero: {
                title: "Tükenmişlikten Atılıma: Yapay Zeka Çevik Vaadini Nasıl Tamamlıyor",
                subtitle: "Yapay zeka dönüşümü neden Çevik'in beklediği evrimdir."
            },
            evolution: {
                title: "Dijital Dönüşümün Evrimi",
                description1: "Çevik dönüşüm, çalışma şeklimizde devrim yarattı, daha hızlı teslimat ve uyarlanabilirlik için çerçeveler sundu. Ancak, organizasyonlar ölçeklendikçe, Çevik sürtünmeyle karşılaştı: istemeden kurumsal siloları güçlendirdi ve yüksek performanslı ekipleri tükenmişliğe sürükledi.",
                quote: "Yapay Zeka Dönüşümü Çevik'i değiştirmez; onu düzeltir.",
                description2: "Çevik hız için yapıyı sağlarken, yapay zeka sürdürülebilirlik için kapasiteyi sağlar. İzole sprint yapan özel ekipler yerine, yapay zeka yetenekleri demokratikleştirir ve Çevik çerçevenin nihayet kapsayıcı, sürdürülebilir yenilik vaadine kavuşmasını sağlar."
            },
            comparison: {
                title: "⚡ Sadece Çevik vs. 🤖 Çevik + Yapay Zeka",
                subtitle: "Yapay zeka mevcut Çevik yapılarınız için nasıl güç çarpanı görevi görür.",
                aspects: {
                    teamStructure: {
                        aspect: "Ekip Yapısı",
                        traditional: "Genellikle özel, izole silolar oluşturur (DevOps, QA, Tasarım).",
                        evolution: "Fonksiyonlar arası anlayış ve katkıyı mümkün kılarak siloları yıkar."
                    },
                    knowledge: {
                        aspect: "Bilgi Erişimi",
                        traditional: "Uzmanlık önemli uzmanlar arasında yoğunlaşır (\"Otobüs Faktörü\").",
                        evolution: "Erişimi demokratikleştirir, herkese anında \"kıdemli seviyede\" bağlam ve rehberlik verir."
                    },
                    workload: {
                        aspect: "İş Yükü Etkisi",
                        traditional: "Sürekli sprint baskısı \"her zaman açık\" aciliyet kültürü yaratır.",
                        evolution: "Tekrarlayan görevleri devrederek bilişsel yükü azaltır, tempoyu sürdürülebilir kılar."
                    },
                    contribution: {
                        aspect: "Katkı Modeli",
                        traditional: "Sadece teknik uzmanlar teknik kararlara etki edebilir.",
                        evolution: "Kapsayıcı katkı; teknik olmayan roller yapay zeka yardımıyla prototip yapabilir ve oluşturabilir."
                    },
                    innovation: {
                        aspect: "Yenilik",
                        traditional: "Ar-Ge ekipleriyle veya belirli \"Yenilik Sprintleri\" ile sınırlı.",
                        evolution: "Herhangi bir ekip üyesinin hızlı bir şekilde bir fikir prototipini yapabileceği sürekli yenilik."
                    }
                }
            },
            friction: {
                title: "🔴 Çevik'in Sürtünme Noktaları",
                subtitle: "Çevik hız için tasarlandı, ancak yapay zeka olmadan bu hız genellikle yüksek bir insani maliyetle gelir.",
                silos: {
                    title: "Organizasyonel Silolar",
                    description: "Çevik ekipler genellikle kendi hızları için optimize olurlar, ekipler arası işbirliğini engelleyen sınırlar yaratırlar."
                },
                burnout: {
                    title: "Tükenmişlik Tuzağı",
                    description: "Planlama, yürütme ve gözden geçirmenin amansız döngüsü sürdürülemez baskı yaratır. Destek olmadan, \"sürdürülebilir bir tempoda çalışmak\" bir efsaneye dönüşür."
                },
                dependency: {
                    title: "Uzman Bağımlılığı",
                    description: "Bilgi birkaç uzmanın kafasında kilitli olduğunda, bu uzmanlar müsait olmadığı anda iş akışları durur."
                },
                ceremony: {
                    title: "Tören Aşırı Yükü",
                    description: "Standuplar, retrospektifler ve iyileştirme oturumları muazzam miktarda zaman tüketir—değer yaratmak için harcanmayan zaman."
                }
            },
            unlock: {
                title: "🟢 Yapay Zeka Çevik İdeali Nasıl Açar",
                universal: {
                    icon: "🌐",
                    title: "1. Silolardan Evrensel Katkıya",
                    description: "Yapay zeka evrensel bir çevirmen ve asistan görevi görür. Bir pazarlama profesyoneli artık teknik dokümantasyona katkıda bulunabilir; bir geliştirici yüksek kaliteli tasarım varlıkları üretebilir. Görevler için giriş engelini düşürerek, yapay zeka tüm organizasyonun ürün vizyonuna katkıda bulunmasını sağlar."
                },
                sustainable: {
                    icon: "⚖️",
                    title: "2. Sürdürülebilir Bir Tempoyu Geri Getirme",
                    description: "Yapay zeka denklemi temelden \"daha çok çalış\"tan \"artırma ile çalış\"a değiştirir. Tekrarlayan, yıpratıcı görevleri (kod üretimi, veri temizleme veya toplantı özetleme gibi) ele alarak, yapay zeka insanları yaratıcı strateji, empati ve karmaşık problem çözmeye odaklanmaları için özgür kılar."
                },
                democratization: {
                    icon: "📚",
                    title: "3. Bilgi Demokratikleşmesi",
                    description: "Junior ve senior ekip üyeleri arasındaki boşluk daralır. Yapay zeka talep üzerine mentorluk ve teknik rehberlik sağlar, ekiplerin gerçek zamanlı olarak yeteneklerini geliştirmelerine ve kıdemli personel üzerindeki darboğazı azaltmasına olanak tanır."
                },
                innovation: {
                    icon: "💡",
                    title: "4. Sınırsız Yenilik",
                    description: "Teknik karmaşıklık yapay zeka tarafından ele alındığında, yenilik artık azınlığın alanı değildir. En iyi fikirler organizasyondaki herkes tarafından hızlı bir şekilde prototiplenebilir ve test edilebilir, gerçek bir kapsayıcılık kültürünü teşvik eder."
                }
            },
            quote: {
                text: "Çevik bize nasıl daha hızlı yineleme yapacağımızı öğretti. Yapay zeka bize bu yinelemeye herkesi dahil etme kapasitesini veriyor. Gelecek, izolasyonda hızla hareket eden özel ekiplerle ilgili değil—sınırlar olmadan işbirliği yapan güçlendirilmiş bireylerle ilgili.",
                author: "— Rifat Erdem Sahin"
            },
            pathForward: {
                title: "İleriye Giden Yol: M-Şekilli Çalışan Çağı",
                description: "Çevik, T-şekilli beceri setini (bir alanda derin uzmanlık, diğerlerinde geniş bilgi) savundu. Yapay zeka dönüşümü, M-şekilli becerilere—yapay zeka destekli öğrenme ile elde edilen birden fazla derin yetkinlik alanı—evrimini hızlandırır.",
                collaboration: {
                    icon: "🤝",
                    title: "Karmaşıklık Üzerinden İşbirliği",
                    description: "Yapay zeka teknik \"nasıl\"ı ele aldığında, ekipler \"neden\"e odaklanır."
                },
                humanCentric: {
                    icon: "❤️",
                    title: "İnsan Merkezli Değer",
                    description: "İdari yüklerden kurtulan ekipler empati, ilişki kurma ve stratejik düşünceye odaklanabilir."
                },
                sustainableGrowth: {
                    icon: "🌱",
                    title: "Sürdürülebilir Büyüme",
                    description: "Yenilik, yorucu sprintlerin bir sonucu değil, güçlendirilmiş çalışanların doğal bir yan ürünü haline gelir."
                }
            },
            cta: {
                title: "Kapsayıcı Bir Dönüşüme Hazır mısınız?",
                description: "Sprintin ötesine geçin. Organizasyonunuzdaki herkesi oluşturma, yaratma ve yenilik yapma yetenekleriyle güçlendirin.",
                pilotTitle: "🚀 Delivery Pilot",
                pilotDescription: "Odaklanmış bir pilot ile yapay zeka dönüşüm yolculuğunuza başlayın.",
                pilotButton: "Başlayın",
                maturityTitle: "🏢 Kurumsal Yapay Zeka Olgunluğu",
                maturityDescription: "Organizasyonunuzun yapay zeka artırma hazırlığını değerlendirin.",
                maturityButton: "Daha Fazla Bilgi"
            }
        },
        previousCustomers: {
            hero: {
                title: "Mükemmellik Mirasımız",
                subtitle: "Yapay zeka dönüşümlerine güvenen 500+ kurumsal müşteriyle yolculuğumuzu kutluyoruz"
            },
            stats: {
                clients: "Önceki Kurumsal Müşteri",
                years: "Yıllık Hizmet",
                countries: "Ülkeye Hizmet Verildi",
                satisfaction: "Müşteri Memnuniyeti"
            },
            journey: {
                title: "Kurumsal Müşterilerle Yolculuğumuz",
                description1: "2009'dan 2024'e kadar Delivery Pilot, kurumsal yapay zeka dönüşümünün ön saflarında yer aldı ve dünya çapında 500'den fazla organizasyona hizmet verdi. Platformumuz yıllar içinde önemli ölçüde evrildi ve sürekli olarak kurumsal müşterilerin değişen ihtiyaçlarını karşılamak için uyum sağladı.",
                description2: "İleriye doğru ilerlerken, daha derin ortaklıklar ve daha özelleştirilmiş yapay zeka dönüşüm yolculukları sağlayarak, seçkin bir 50+ kurumsal müşteri grubuna daha özel çözümler sunmaya odaklanıyoruz. Bu stratejik değişim, gelişmiş destek, özel kaynaklar ve anlamlı iş sonuçları sağlayan özelleştirilmiş çözümler sunmamızı sağlıyor.",
                description3: "Yolculuğumuzun bir parçası olan tüm önceki müşterilerimize minnettarız. Güvenleri ve geri bildirimleri Delivery Pilot'u bugün sahip olduğu sağlam platforma dönüştürdü."
            },
            industries: {
                title: "Hizmet Verdiğimiz Endüstriler",
                financial: "🏦 Finansal Hizmetler",
                healthcare: "🏥 Sağlık",
                manufacturing: "🏭 Üretim",
                retail: "🛒 Perakende ve E-ticaret",
                automotive: "🚗 Otomotiv",
                transportation: "✈️ Ulaşım",
                telecom: "📱 Telekomünikasyon",
                energy: "⚡ Enerji ve Kamu Hizmetleri",
                education: "🎓 Eğitim",
                government: "🏛️ Devlet",
                media: "🎮 Medya ve Eğlence",
                hospitality: "🏨 Konaklama"
            },
            backToHome: "← Ana Sayfaya Dön"
        }
    }
};

// Current language
let currentLang = 'en';

// Function to get nested translation value
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Function to update page content
function updateContent(lang) {
    currentLang = lang;
    
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            // Replace {year} placeholder with current year
            element.textContent = translation.replace('{year}', currentYear);
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Store preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Function to update copyright year in elements without data-i18n
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    
    // Update copyright elements that don't use the translation system
    // Only target elements without data-i18n attribute to avoid conflicts
    document.querySelectorAll('.footer-bottom p, footer p').forEach(element => {
        // Skip elements that use the translation system
        if (element.hasAttribute('data-i18n')) {
            return;
        }
        
        // Match copyright text with 4-digit year and replace with current year
        const copyrightPattern = /©\s*(\d{4})\s+Delivery Pilot/;
        if (copyrightPattern.test(element.textContent)) {
            element.textContent = element.textContent.replace(copyrightPattern, `© ${currentYear} Delivery Pilot`);
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language from localStorage or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(savedLang);
    
    // Update copyright year for pages that don't use the translation system
    // This runs after updateContent() to avoid conflicts
    updateCopyrightYear();
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateContent(lang);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .use-case-card, .stat, .step-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
