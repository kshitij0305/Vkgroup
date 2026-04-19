"use client";

import { Building2, MapPin, User } from "lucide-react";

const headOffice = {
    type: "Delhi Head Office",
    location: "Sagarpur West, New Delhi",
    address: "RZ-73/B, H-Block, Sagarpur West, New Delhi - 110046",
    manager: "Geeta Mittal",
    designation: "CHRM & Partner",
    phone: "+91 98182 13114",
    email: "vkgroup2024@gmail.com",
};

export default function Offices() {
    return (
        <section
            id="offices"
            className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60"></div>
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-gray-700 mb-6">
                        <span className="text-sm font-medium">Our Network</span>
                        <Building2 className="w-4 h-4" />
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                        Our Office Network
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        VK Solar Group operates from our head office in Delhi
                        and serves customers across Uttar Pradesh through our
                        strategically located branch offices.
                    </p>
                </div>

                {/* Head Office */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Head Office
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-emerald-600/90 to-blue-600/90 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                            <div className="relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-2xl font-bold">
                                                {headOffice.type}
                                            </h4>
                                        </div>
                                        <div className="flex items-start mb-4">
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-semibold mb-1">
                                                    {headOffice.location}
                                                </p>
                                                <p className="text-white/80">
                                                    {headOffice.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-2xl font-bold">
                                                Leadership
                                            </h4>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-xl font-semibold">
                                                {headOffice.manager}
                                            </p>
                                            <p className="text-white/80">
                                                {headOffice.designation}
                                            </p>
                                            <p className="text-white/80">
                                                Phone: {headOffice.phone}
                                            </p>
                                            <p className="text-white/80">
                                                Email: {headOffice.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coverage Area */}
                <div className="mt-16 text-center">
                    <div className="bg-white/50 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg max-w-4xl mx-auto hover:bg-white/70 transition-all duration-300">
                        <h4 className="text-2xl font-bold text-gray-900 mb-4">
                            Service Coverage
                        </h4>
                        <p className="text-gray-600 mb-6">
                            Our network of offices ensures comprehensive
                            coverage across North India, providing local support
                            and expertise to our customers.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                            <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300">
                                <p className="font-semibold text-emerald-600">
                                    Delhi
                                </p>
                                <p className="text-sm text-gray-600">
                                    Head Office
                                </p>
                            </div>
                            <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300">
                                <p className="font-semibold text-emerald-600">
                                    Bareilly
                                </p>
                                <p className="text-sm text-gray-600">
                                    Branch 1
                                </p>
                            </div>
                            <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300">
                                <p className="font-semibold text-emerald-600">
                                    Pilibhit
                                </p>
                                <p className="text-sm text-gray-600">
                                    Branch 2
                                </p>
                            </div>
                            <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300">
                                <p className="font-semibold text-emerald-600">
                                    Shahjahanpur
                                </p>
                                <p className="text-sm text-gray-600">
                                    Branch 3
                                </p>
                            </div>
                            <div className="p-4 bg-emerald-50/80 backdrop-blur-sm rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300">
                                <p className="font-semibold text-emerald-600">
                                    Kannauj
                                </p>
                                <p className="text-sm text-gray-600">
                                    Branch 4
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
