"use client";

import {
    Target,
    Eye,
    Heart,
    Globe,
    Award,
    Users,
} from "lucide-react";
import Image from "next/image";

export default function About() {
    const values = [
        {
            icon: Target,
            title: "Mission",
            description:
                "To provide sustainable, cost-effective solar energy solutions that empower homeowners to achieve energy independence while contributing to a cleaner environment.",
        },
        {
            icon: Eye,
            title: "Vision",
            description:
                "To be India's most trusted solar energy company, making clean energy accessible to every home and building a sustainable future for generations to come.",
        },
        {
            icon: Heart,
            title: "Values",
            description:
                "Quality, integrity, innovation, and customer satisfaction drive everything we do. We believe in transparent pricing and long-term relationships with our customers.",
        },
    ];

    return (
        <section id="about" className="bg-gray-50">
            <div className="container mx-auto pt-16 px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 text-emerald-700 mb-4">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm font-medium">Who are we?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Experts In The World
                        <br />
                        <span className="text-emerald-600">
                            Of Solar Energy
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Trusted in sustainable energy solutions.
                        We specialize in providing cutting-edge solar energy
                        solutions for residential, commercial, and industrial
                        sectors.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Environmentally Friendly
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Solar energy reduces greenhouse gases and air
                                pollutants, helping combat climate change and
                                create a sustainable future for generations to
                                come.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Users className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Low Maintenance
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Solar panels are durable, with low maintenance
                                costs, requiring only occasional cleaning and
                                minimal servicing throughout their 25+ year
                                lifespan.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Image with specs */}
                    <div className="relative">
                        <div className="relative mx-auto w-80 h-80">
                            <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200">
                                <Image
                                    src="/bg.jpeg"
                                    alt="Solar Installation"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Specification cards */}
                            <div className="absolute -top-4 -right-4">
                                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Certifications:
                                    </p>
                                    <p className="font-semibold text-gray-900 text-sm">
                                        IEC/UL 61730
                                    </p>
                                    <p className="font-semibold text-gray-900 text-sm">
                                        CEC Listed
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4">
                                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Inverter Power:
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        3.8 KW/7.6KW
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4">
                                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Dimensions:
                                    </p>
                                    <p className="font-semibold text-gray-900 text-sm">
                                        74.4 x 41.2 x 1.57 in
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        (including frame)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-emerald-50/30 border-t border-emerald-200 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/* Founders Section */}
                    {/* <div className="py-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-4 py-2 text-emerald-700 mb-4">
                                <User className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    Meet Our Team
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                                Leadership Team
                                <br />
                                <span className="text-emerald-600">
                                    Driving Solar Innovation
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Meet the visionaries behind VK Solar Group who
                                are committed to transforming the energy
                                landscape with sustainable solutions.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {founders.map((founder, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-stretch h-full">
                                        <div className="flex-shrink-0 w-1/3">
                                            <div className="w-full h-full">
                                                <Image
                                                    src={
                                                        founder.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={founder.name}
                                                    width={250}
                                                    height={250}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 p-6">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-1">
                                                {founder.name}
                                            </h4>
                                            <p className="text-emerald-600 font-medium mb-3 text-sm">
                                                {founder.role}
                                            </p>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                    {founder.experience}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {founder.specialization}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {founder.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Mission, Vision, Values */}
                    <div className="bg-white rounded-3xl p-8 mb-16 border border-emerald-100 shadow-sm">
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl"
                                >
                                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Branch Offices */}
                    {/* <div className="bg-white rounded-3xl p-8 mb-16 border border-emerald-100 shadow-sm">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                Our Branch Locations
                            </h3>
                            <p className="text-lg text-gray-600">
                                Serving customers across multiple locations
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {branches.map((branch) => (
                                <div
                                    key={branch.id}
                                    className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 hover:bg-emerald-50 transition-colors"
                                >
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                            <Building2 className="w-6 h-6 text-emerald-600" />
                                        </div>

                                        <div className="mb-3">
                                            <div className="flex items-center justify-center gap-2 mb-1">
                                                <MapPin className="w-4 h-4 text-emerald-600" />
                                                <h4 className="text-lg font-semibold text-emerald-600">
                                                    {branch.location}
                                                </h4>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-3">
                                                {branch.address}
                                            </p>
                                        </div>

                                        <div className="bg-white border border-emerald-100 rounded-xl p-3">
                                            <p className="text-xs text-gray-500 mb-1">
                                                {branch.designation}
                                            </p>
                                            <p className="font-semibold text-gray-900 text-sm">
                                                {branch.manager}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
