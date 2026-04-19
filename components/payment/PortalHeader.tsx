"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface PortalHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
}

export default function PortalHeader({
    eyebrow,
    title,
    description,
}: PortalHeaderProps) {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.22),_transparent_48%),linear-gradient(135deg,#02110c_0%,#0a3d2d_45%,#dff7ec_160%)] pt-32 pb-16 text-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to main website
                </Link>

                <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                            <ShieldCheck className="h-4 w-4" />
                            {eyebrow}
                        </div>
                        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                            {description}
                        </p>
                    </div>

                    <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur">
                        <div className="flex items-center gap-4">
                            <div className="rounded-2xl bg-white p-3 shadow-lg shadow-emerald-950/30">
                                <Image
                                    src="/logo.png"
                                    alt="V.K. Group"
                                    width={64}
                                    height={64}
                                    className="h-14 w-14 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-emerald-100/75">
                                    V.K. Group
                                </p>
                                <p className="mt-1 text-2xl font-semibold">
                                    Payment & Receipt Desk
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/12 bg-black/10 p-4">
                                Live payment flow with Razorpay
                            </div>
                            <div className="rounded-2xl border border-white/12 bg-black/10 p-4">
                                Instant receipt lookup and admin export
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
