"use client";

import { Button } from "@/components/ui/button";
import { LightbulbIcon } from "lucide-react";

export default function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-between overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/bg.jpeg"
                >
                    <source src="/solar.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
                {/* Fallback background image */}
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/bg.jpeg')`,
                        display: 'none'
                    }}
                ></div>
            </div>
            
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-[1]"></div>

            {/* Main Content */}
            <div className="relative z-[2] flex-1 mt-32 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Technology Badge */}
                        <div className="mb-8 animate-fade-in">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white">
                                <span className="text-sm font-medium">
                                    New Technology {new Date().getFullYear()}
                                </span>
                                <LightbulbIcon className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1
                            className="text-5xl md:text-6xl tracking-tight leading-tight lg:text-7xl font-bold text-white mb-6 animate-fade-in"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Solar Solutions for
                            <br />
                            <span className="block">a Greener Planet</span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className="text-xl md:text-2xl font-medium text-white/80 mb-8 max-w-2xl leading-relaxed animate-fade-in"
                            style={{ animationDelay: "0.4s" }}
                        >
                            Discover renewable energy with our cutting-edge
                            solar panels. Designed for sustainability and
                            cost-efficiency.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="mb-16 flex flex-col gap-4 sm:flex-row animate-fade-in"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <Button
                                onClick={scrollToContact}
                                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                            >
                                Get Started
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="relative z-[2] bg-white/10 backdrop-blur-md border-t border-white/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-6">
                        <div className="text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                25+
                            </div>
                            <div className="text-white/80 text-sm">
                                Years Warranty
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                100%
                            </div>
                            <div className="text-white/80 text-sm">
                                Bill Reduction
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                3-5
                            </div>
                            <div className="text-white/80 text-sm">
                                Year Payback
                            </div>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                        <div className="flex items-center text-white/90">
                            <svg
                                className="w-5 h-5 mr-2 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">
                                Zero Operating Costs
                            </span>
                        </div>
                        <div className="flex items-center text-white/90">
                            <svg
                                className="w-5 h-5 mr-2 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">25-Year Warranty</span>
                        </div>
                        <div className="flex items-center text-white/90">
                            <svg
                                className="w-5 h-5 mr-2 text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm">Eco-Friendly</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
