"use client";

import { Sun, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-blue-400/5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                                <Sun className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold">
                                    VK Solar Group
                                </span>
                                <p className="text-emerald-400 text-xs">
                                    Sustainable Energy Solutions
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Trusted in sustainable energy solutions
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-emerald-400">
                            <span>🏆 ISO Certified</span>
                            <span>•</span>
                            <span>⚡ Adani Authorized</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {["Home", "About Us", "Services", "Contact"].map(
                                (link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link
                                                .toLowerCase()
                                                .replace(" ", "-")}`}
                                            className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                            Contact Info
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-emerald-400" />
                                <span className="text-gray-300 text-sm">
                                    +91 89604 26206
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-emerald-400" />
                                <span className="text-gray-300 text-sm">
                                    vkgroup2024@gmail.com
                                </span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    RZ-73/B, H-Block, Sagarpur West,
                                    <br />
                                    New Delhi - 110046
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} VK Solar Group. All rights reserved. |
                        <span className="text-emerald-400">
                            {" "}
                            Empowering a sustainable future
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
