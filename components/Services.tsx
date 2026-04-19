"use client";

import { Grid, Battery, Droplets, Lightbulb } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Grid,
            title: "On-Grid Solar Systems",
            description:
                "Grid-connected systems that reduce electricity bills by up to 90%",
            savings: "3-5 year payback",
            image: "/on-grid-solar-system.jpg",
        },
        {
            icon: Battery,
            title: "Off-Grid Solar Systems",
            description:
                "Complete energy independence with battery storage solutions",
            savings: "100% independence",
            image: "/off-grid-solar-system.jpg",
        },
        {
            icon: Droplets,
            title: "Solar Water Pumps",
            description: "Eco-friendly pumping from 0.25HP to 50HP capacity",
            savings: "Zero operating costs",
            image: "/solar-water-pumps.jpg",
        },
        {
            icon: Lightbulb,
            title: "Solar Street Lights",
            description: "Smart LED lighting with motion detection features",
            savings: "Autonomous lighting",
            image: "/solar-street-lights.jpg",
        },
    ];

    return (
        <section
            id="services"
            className="py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-200"
        >
            {/* Section Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-full px-4 py-2 text-emerald-700 mb-4">
                        <Grid className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                        Solar Solutions
                        <br />
                        <span className="text-emerald-600">For Every Need</span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                        From residential to commercial applications, we provide
                        comprehensive solar energy solutions tailored to your
                        specific requirements.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* First Two Services */}
                    {services.slice(0, 2).map((service, index) => (
                    <div key={index} className="relative group">
                        {/* Background Image */}
                        <div
                            className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                            
                            {/* Service Card */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                                    {/* Icon and Title */}
                                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                            <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                        </div>
                                        <h3 className="text-sm md:text-lg font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Savings Badge */}
                                    <div className="inline-flex items-center px-2 md:px-3 py-1 bg-emerald-500 rounded-full">
                                        <span className="text-white text-xs font-medium">
                                            {service.savings}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Second Row Services */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 mb-12">
                    {/* Last Two Services */}
                    {services.slice(2, 4).map((service, index) => (
                    <div key={index} className="relative group">
                        {/* Background Image */}
                        <div
                            className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                            
                            {/* Service Card */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                                    {/* Icon and Title */}
                                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                            <service.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                        </div>
                                        <h3 className="text-sm md:text-lg font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Savings Badge */}
                                    <div className="inline-flex items-center px-2 md:px-3 py-1 bg-emerald-500 rounded-full">
                                        <span className="text-white text-xs font-medium">
                                            {service.savings}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            {/* Company Stats */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                1000+
                            </div>
                            <div className="text-gray-600 text-xs md:text-sm">
                                Happy Customers
                            </div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                25+
                            </div>
                            <div className="text-gray-600 text-xs md:text-sm">
                                Years Warranty
                            </div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                500MW
                            </div>
                            <div className="text-gray-600 text-xs md:text-sm">
                                Installed Capacity
                            </div>
                        </div>
                        <div>
                            <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                24/7
                            </div>
                            <div className="text-gray-600 text-xs md:text-sm">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
