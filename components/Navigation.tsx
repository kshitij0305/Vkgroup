"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
    { label: "About & Vision", href: "#about" },
    { label: "Solutions", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "From Our Customers", href: "#testimonials" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledMore, setIsScrolledMore] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setIsScrolledMore(window.scrollY > 800);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        // Remove the '#' from the beginning if it exists
        const cleanId = sectionId.startsWith("#")
            ? sectionId.substring(1)
            : sectionId;
        const element = document.getElementById(cleanId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/30 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center space-x-3">
                            {/* Company Name */}
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                className="h-12 w-auto"
                                width={100}
                                height={100}
                            />
                            <div className="flex flex-col">
                                <div
                                    className={cn(
                                        "md:text-2xl text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent",
                                        isScrolledMore &&
                                            "from-gray-800 to-gray-600"
                                    )}
                                >
                                    V.K. Group
                                </div>
                                <span
                                    className={cn(
                                        "text-xs font-medium text-white/80 -mt-1",
                                        isScrolledMore && "text-gray-500"
                                    )}
                                >
                                    Solar Solutions
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className={cn(
                                        "text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors",
                                        isScrolledMore && "text-gray-700"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex md:items-center md:gap-3">
                        <Button
                            asChild
                            className={cn(
                                "rounded-full bg-emerald-500 px-6 py-2 text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-400",
                                isScrolledMore &&
                                    "border border-emerald-200 bg-emerald-600 text-white"
                            )}
                        >
                            <Link href="/payment">Apply Now</Link>
                        </Button>
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className={cn(
                                "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-full px-6 py-2 transition-all duration-300",
                                isScrolledMore && "text-gray-700"
                            )}
                            variant="outline"
                        >
                            Contact Us
                            <svg
                                className="w-4 h-4 ml-2"
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

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className={cn(
                                "text-white hover:text-gray-200 p-2",
                                isScrolledMore && "text-gray-700"
                            )}
                        >
                            {isMobileMenuOpen ? (
                                <CloseIcon className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className={cn(
                                        "text-gray-700 hover:text-solar-600 block px-3 py-2 text-base font-medium w-full text-left",
                                        isScrolledMore && "text-gray-700"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="pt-2">
                                <Button
                                    asChild
                                    className="mb-2 w-full bg-emerald-600 text-white hover:bg-emerald-700"
                                >
                                    <Link href="/payment">Apply Now</Link>
                                </Button>
                                <Button
                                    onClick={() => scrollToSection("contact")}
                                    className={cn(
                                        "bg-solar-600 hover:bg-solar-700 text-white w-full",
                                        isScrolledMore && "text-gray-700"
                                    )}
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
