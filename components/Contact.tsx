"use client";

import type React from "react";

import { useState, useId } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Send,
    CheckCircle,
    Clock,
    AlertCircle,
    MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Simple form data interface
interface FormData {
    name: string;
    email: string;
    phone: string;
    systemType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    systemType?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        systemType: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const formId = useId();

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim() || formData.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim() || formData.phone.length < 10) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.systemType) {
            newErrors.systemType = "Please select a system type";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Simulate API call
            console.log("Form submitted:", formData);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                systemType: "",
                message: "",
            });
            setErrors({});
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch {
            setSubmitError(
                "There was an error submitting your request. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    return (
        <section
            id="contact"
            className="py-16 md:py-24 relative overflow-hidden"
            aria-labelledby="contact-heading"
            style={{
                backgroundImage: `url('/bg.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white mb-6">
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>
                    <h2
                        id="contact-heading"
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get Your Free Solar
                        <span className="block text-emerald-400">
                            Consultation
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">
                        Ready to start saving on your electricity bills? Contact
                        us today for a free consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-6">
                            Request Free Consultation
                        </h3>

                        {isSubmitted ? (
                            <div
                                className="text-center py-8"
                                aria-live="polite"
                            >
                                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle
                                        className="w-8 h-8 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-emerald-400 mb-2">
                                    Thank You!
                                </h4>
                                <p className="text-white/80">
                                    We&apos;ve received your request and will contact
                                    you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form
                                id={formId}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                                aria-label="Contact form"
                            >
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            aria-required="true"
                                            aria-invalid={
                                                errors.name ? "true" : "false"
                                            }
                                            aria-describedby={
                                                errors.name
                                                    ? "name-error"
                                                    : undefined
                                            }
                                            placeholder="Your name"
                                            className="h-12 px-3 py-3 text-base bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:bg-white/20 transition-all"
                                        />
                                        {errors.name && (
                                            <p
                                                id="name-error"
                                                className="text-red-300 text-sm mt-1"
                                                role="alert"
                                            >
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-white text-sm font-medium mb-2"
                                        >
                                            Phone Number *
                                        </label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            aria-required="true"
                                            aria-invalid={
                                                errors.phone ? "true" : "false"
                                            }
                                            aria-describedby={
                                                errors.phone
                                                    ? "phone-error"
                                                    : undefined
                                            }
                                            placeholder="Your phone number"
                                            className="h-12 px-3 py-3 text-base bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:bg-white/20 transition-all"
                                        />
                                        {errors.phone && (
                                            <p
                                                id="phone-error"
                                                className="text-red-300 text-sm mt-1"
                                                role="alert"
                                            >
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-white text-sm font-medium mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-required="true"
                                        aria-invalid={
                                            errors.email ? "true" : "false"
                                        }
                                        aria-describedby={
                                            errors.email
                                                ? "email-error"
                                                : undefined
                                        }
                                        placeholder="Your email address"
                                        className="h-12 px-3 py-3 text-base bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:bg-white/20 transition-all"
                                    />
                                    {errors.email && (
                                        <p
                                            id="email-error"
                                            className="text-red-300 text-sm mt-1"
                                            role="alert"
                                        >
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="systemType"
                                        className="block text-white text-sm font-medium mb-2"
                                    >
                                        System Type *
                                    </label>
                                    <select
                                        id="systemType"
                                        name="systemType"
                                        value={formData.systemType}
                                        onChange={handleChange}
                                        aria-required="true"
                                        aria-invalid={
                                            errors.systemType ? "true" : "false"
                                        }
                                        aria-describedby={
                                            errors.systemType
                                                ? "systemType-error"
                                                : undefined
                                        }
                                        className="w-full h-12 px-3 py-3 text-base bg-white/10 border border-white/30 rounded-lg text-white focus:border-emerald-400 focus:bg-white/20 transition-all"
                                    >
                                        <option
                                            value=""
                                            className="text-gray-900"
                                        >
                                            Select system type
                                        </option>
                                        <option
                                            value="on-grid"
                                            className="text-gray-900"
                                        >
                                            On-Grid Solar System
                                        </option>
                                        <option
                                            value="off-grid"
                                            className="text-gray-900"
                                        >
                                            Off-Grid Solar System
                                        </option>
                                        <option
                                            value="water-pump"
                                            className="text-gray-900"
                                        >
                                            Solar Water Pump
                                        </option>
                                        <option
                                            value="street-lights"
                                            className="text-gray-900"
                                        >
                                            Solar Street Lights
                                        </option>
                                        <option
                                            value="not-sure"
                                            className="text-gray-900"
                                        >
                                            Not Sure - Need Consultation
                                        </option>
                                    </select>
                                    {errors.systemType && (
                                        <p
                                            id="systemType-error"
                                            className="text-red-300 text-sm mt-1"
                                            role="alert"
                                        >
                                            {errors.systemType}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-white text-sm font-medium mb-2"
                                    >
                                        Your Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your energy needs..."
                                        className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:bg-white/20 transition-all"
                                    />
                                </div>

                                {submitError && (
                                    <div
                                        className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 flex items-start gap-2"
                                        role="alert"
                                    >
                                        <AlertCircle className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                                        <p className="text-red-200 text-sm">
                                            {submitError}
                                        </p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-5 py-6 font-semibold group transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label={
                                        isSubmitting
                                            ? "Submitting..."
                                            : "Get Free Consultation"
                                    }
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-pulse">
                                                Processing...
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            Get Free Consultation
                                            <Send
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                aria-hidden="true"
                                            />
                                        </>
                                    )}
                                </Button>

                                <p
                                    className="text-xs text-white/60 text-center"
                                    id="privacy-note"
                                >
                                    By submitting this form, you agree to our
                                    privacy policy. We&apos;ll never share your
                                    information.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        Phone
                                    </h4>
                                    <a
                                        href="tel:+919818213114"
                                        className="text-emerald-400 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                                        aria-label="Call Geeta Mittal at +91 98182 13114"
                                    >
                                        +91 98182 13114
                                    </a>
                                    <p className="text-white/60 text-sm">
                                        Geeta Mittal
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        WhatsApp
                                    </h4>
                                    <a
                                        href="https://wa.me/919818213114"
                                        className="text-emerald-400 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Message us on WhatsApp"
                                    >
                                        +91 98182 13114
                                    </a>
                                    <p className="text-white/60 text-sm">
                                        Quick responses
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:vkgroup2024@gmail.com"
                                        className="text-emerald-400 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                                        aria-label="Email us at vkgroup2024@gmail.com"
                                    >
                                        vkgroup2024@gmail.com
                                    </a>
                                    <p className="text-white/60 text-sm">
                                        We respond within 24 hours
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mt-1"
                                    aria-hidden="true"
                                >
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        Address
                                    </h4>
                                    <a
                                        href="https://maps.google.com/?q=First+floor,+RZ-73/B,+H-Block,+Sagarpur+West,+New+Delhi+-+110046"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/80 text-sm hover:text-emerald-400 focus:outline-none focus:text-emerald-400 transition-colors"
                                        aria-label="View our location on Google Maps"
                                    >
                                        First floor, RZ-73/B, H-Block,
                                        <br />
                                        Sagarpur West, New Delhi - 110046
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div
                                    className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mt-1"
                                    aria-hidden="true"
                                >
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">
                                        Business Hours
                                    </h4>
                                    <p className="text-white/80 text-sm">
                                        Monday - Friday: 9:00 AM - 6:00 PM
                                        <br />
                                        Saturday: 10:00 AM - 4:00 PM
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
