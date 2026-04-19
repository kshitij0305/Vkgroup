"use client";

export default function WhyChooseUs() {
    const features = [
        {
            title: "Industry Leading Expertise",
            description:
                "Certified technicians with 25-year warranty coverage providing unmatched quality and professional service in solar energy solutions.",
            bgColor: "bg-white",
            textColor: "text-gray-900",
        },
        {
            title: "Comprehensive Warranty",
            description:
                "25-year panels, 5-year inverters, 24/7 support ensuring complete peace of mind with industry-leading warranty coverage.",
            bgColor: "bg-white",
            textColor: "text-gray-900",
        },
        {
            title: "Customer-Centric Approach",
            description:
                "Transparent pricing with flexible financing options and dedicated support throughout your solar journey.",
            additionalText:
                "Whether you're a homeowner or business owner, we customize our solutions to fit your energy needs and budget.",
            bgColor: "bg-emerald-500",
            textColor: "text-white",
            hasButton: true,
        },
        {
            title: "Professional Installation",
            description:
                "ISO certified processes and regular maintenance with authorized Adani Solar dealer credentials providing superior efficiency and reliability.",
            bgColor: "bg-white",
            textColor: "text-gray-900",
        },
    ];

    const warrantyStats = [
        {
            number: "25",
            unit: "Years",
            desc: "Solar Panels",
        },
        {
            number: "5",
            unit: "Years",
            desc: "Inverters",
        },
        {
            number: "24/7",
            unit: "Support",
            desc: "Available",
        },
    ];

    const certifications = [
        { text: "ISO Certified" },
        { text: "Government Approved" },
        { text: "Adani Authorized" },
    ];

    return (
        <section
            className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-200"
            id="why-us"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 text-emerald-700 mb-4">
                        <span className="text-sm font-medium">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Why{" "}
                        <span className="text-emerald-600">VK Solar Group</span>{" "}
                        <br />
                        is The Right Choice for You
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Unmatched quality, service, and support in solar energy
                        solutions with industry-leading expertise and
                        comprehensive warranty coverage.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} border border-gray-200 rounded-2xl p-8 ${feature.textColor} relative shadow-sm hover:shadow-md transition-all duration-300`}
                        >
                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-4 leading-tight">
                                {feature.title}
                            </h3>
                            <p
                                className={`text-base leading-relaxed mb-4 ${
                                    feature.textColor === "text-white"
                                        ? "text-white/90"
                                        : "text-gray-600"
                                }`}
                            >
                                {feature.description}
                            </p>

                            {feature.additionalText && (
                                <p
                                    className={`text-base leading-relaxed mb-8 ${
                                        feature.textColor === "text-white"
                                            ? "text-white/80"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {feature.additionalText}
                                </p>
                            )}

                            {/* CTA Button for Customer-Centric card */}
                            {feature.hasButton && (
                                <button className="bg-white text-emerald-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center transition-colors duration-200">
                                    Get Free Quote
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Warranty Information Section */}
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 text-center shadow-lg">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 text-emerald-700 mb-6">
                            <span className="text-sm font-medium">
                                Warranty Coverage
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Comprehensive Protection
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            Industry-leading warranty coverage that gives you
                            complete peace of mind
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                        {warrantyStats.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">
                                        {item.number}
                                    </div>
                                    <div className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.unit}
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {certifications.map((badge, index) => (
                                <div
                                    key={index}
                                    className="bg-emerald-50 border border-emerald-100 rounded-xl px-6 py-3 hover:bg-emerald-100 transition-all duration-300"
                                >
                                    <span className="text-emerald-700 font-semibold text-sm">
                                        {badge.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
