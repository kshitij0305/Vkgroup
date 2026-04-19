"use client";

import Image from "next/image";

export default function Testimonials() {
    // const testimonials = [
    //     {
    //         name: "Rajesh Kumar",
    //         content:
    //             "Initially, I was skeptical about solar pumps, but VK Group's team explained everything clearly. The installation took 2 days, and now I don't worry about power cuts affecting my irrigation. My monthly electricity bill has dropped significantly.",
    //         rating: 5,
    //         image: "",
    //     },
    //     {
    //         name: "Meera Gupta",
    //         content:
    //             "We had issues with poor lighting in our neighborhood. VK Group installed solar street lights last year. The process was smooth, though it took a bit longer than expected due to permits. Overall, we're happy with the results.",
    //         rating: 4,
    //         image: "",
    //     },
    //     {
    //         name: "Dr. Anil Sharma",
    //         content:
    //             "Our clinic needed a reliable power backup system. VK Group's solar solution works well, especially during the monsoon power outages. The maintenance team is responsive, and the system has been mostly trouble-free for 8 months now.",
    //         rating: 4,
    //         image: "",
    //     },
    // ];

    return (
        <section id="testimonials" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    {/* <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 text-emerald-700 mb-6">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            Customer Stories
                        </span>
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Stories of Success
                        <span className="block text-emerald-600">
                            & Satisfaction
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real experiences from customers who transformed their
                        energy consumption
                    </p>
                </div>

                {/* Stats */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-12 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-1">
                                4.9/5
                            </div>
                            <div className="text-gray-600 text-sm">
                                Average Rating
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-1">
                                100+
                            </div>
                            <div className="text-gray-600 text-sm">
                                Happy Customers
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-1">
                                500+
                            </div>
                            <div className="text-gray-600 text-sm">
                                MW Installed
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-1">
                                Rs. 90 Lakhs+
                            </div>
                            <div className="text-gray-600 text-sm">
                                Customer Savings
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Installation Gallery */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Happy Clients & Their 
                            <span className="text-emerald-600"> Solar Installations</span>
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See real installations and satisfied customers who have transformed their energy consumption with VK Group
                        </p>
                    </div>

                    {/* Photo Gallery - Mixed Layout for Portrait & Landscape */}
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr">
                        
                        {/* Portrait Image - Rajesh Singh (Rooftop installation with person) */}
                        <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/Rajesh singh.jpeg"
                                alt="Rajesh Singh - Rooftop Solar Installation in Bijnor, UP"
                                width={400}
                                height={600}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Rajesh Singh</h4>
                                    <p className="text-sm opacity-90">Rooftop Solar - Bijnor, UP</p>
                                </div>
                            </div>
                        </div>

                        {/* Portrait Image - Parvinder Kaur */}
                        <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/parvinder kaur.jpeg"
                                alt="Parvinder Kaur - Ground Mounted Solar Installation"
                                width={400}
                                height={600}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Parvinder Kaur</h4>
                                    <p className="text-sm opacity-90">Ground Solar System - Bijnor, UP</p>
                                </div>
                            </div>
                        </div>

                        {/* Landscape Image - Shahabad Installation */}
                        <div className="md:col-span-4 lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/shahabad.jpeg"
                                alt="Solar Panel Installation in Shahabad"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Commercial Project</h4>
                                    <p className="text-sm opacity-90">Solar Installation - Shahabad</p>
                                </div>
                            </div>
                        </div>

                        {/* Landscape Image - New Delhi */}
                        <div className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/new delhi.jpeg"
                                alt="Rooftop Solar Installation in New Delhi"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Urban Installation</h4>
                                    <p className="text-sm opacity-90">Rooftop Solar - New Delhi</p>
                                </div>
                            </div>
                        </div>

                        {/* Landscape Image - Del2 */}
                        <div className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/Del2.jpeg"
                                alt="Large Scale Solar Installation in Delhi"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Large Scale Project</h4>
                                    <p className="text-sm opacity-90">Rooftop Solar- Dhampur</p>
                                </div>
                            </div>
                        </div>

                        {/* Landscape Image - Shahabad 2 */}
                        <div className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/shahabad 2.jpeg"
                                alt="Advanced Solar Installation in Shahabad"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Advanced System</h4>
                                    <p className="text-sm opacity-90">Solar Canopy - Shahabad</p>
                                </div>
                            </div>
                        </div>

                        {/* Portrait Image - Pallawala */}
                        <div className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <Image
                                src="/pallawala.jpeg"
                                alt="Residential Solar Installation in Pallawala, UP"
                                width={400}
                                height={600}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h4 className="font-semibold text-lg">Residential Project</h4>
                                    <p className="text-sm opacity-90">Solar System - Pallawala, UP</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Call to Action */}
                    <div className="text-center pt-8">
                        <p className="text-gray-600 mb-6">
                            Ready to join our growing family of satisfied customers?
                        </p>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                            Get Your Free Quote Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
