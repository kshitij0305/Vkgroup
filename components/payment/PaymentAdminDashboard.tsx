"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { paymentPortalConfig } from "@/lib/payment-portal";

const TOKEN_KEY = "vkgroupAdminToken";
const ADMIN_KEY = "vkgroupAdminProfile";

interface AdminProfile {
    name?: string;
    email?: string;
}

export default function PaymentAdminDashboard() {
    const router = useRouter();
    const [admin, setAdmin] = useState<AdminProfile | null>(() => {
        if (typeof window === "undefined") {
            return null;
        }

        const storedAdmin = localStorage.getItem(ADMIN_KEY);
        return storedAdmin ? JSON.parse(storedAdmin) : null;
    });
    const [error, setError] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);

    const clearAdminSession = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(ADMIN_KEY);
    };

    useEffect(() => {
        const token =
            typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

        if (!token) {
            router.replace("/payment/admin");
            return;
        }

        const loadProfile = async () => {
            try {
                const response = await fetch(
                    `${paymentPortalConfig.apiBaseUrl}/api/auth/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.status === 401) {
                    clearAdminSession();
                    router.replace("/payment/admin");
                    return;
                }

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Could not load admin profile");
                }

                setAdmin(result.admin);
                localStorage.setItem(ADMIN_KEY, JSON.stringify(result.admin));
            } catch (profileError) {
                setError(
                    profileError instanceof Error
                        ? profileError.message
                        : "Could not load admin profile"
                );
            }
        };

        loadProfile();
    }, [router]);

    const handleDownload = async () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            router.replace("/payment/admin");
            return;
        }

        setIsDownloading(true);
        setError("");

        try {
            const response = await fetch(
                `${paymentPortalConfig.apiBaseUrl}/api/receipt/export`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 401) {
                clearAdminSession();
                router.replace("/payment/admin");
                return;
            }

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || "Could not download Excel file");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "receipts.xlsx";
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (downloadError) {
            setError(
                downloadError instanceof Error
                    ? downloadError.message
                    : "Could not download Excel file"
            );
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(2,18,12,0.55)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">
                                Portal Admin
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                                Admin dashboard
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Signed in as {admin?.name || "Admin"}
                                {admin?.email ? ` (${admin.email})` : ""}
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                clearAdminSession();
                                router.replace("/payment/admin");
                            }}
                            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
                        >
                            Logout
                        </button>
                    </div>

                    <div className="mt-8 rounded-[28px] border border-emerald-100 bg-emerald-50 p-7">
                        <h3 className="text-2xl font-semibold text-slate-950">
                            Receipts Excel export
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                            Download the latest Excel sheet containing all paid
                            receipts captured by the payment backend.
                        </p>
                        <button
                            type="button"
                            onClick={() => void handleDownload()}
                            disabled={isDownloading}
                            className="mt-6 h-12 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                        >
                            {isDownloading ? "Downloading..." : "Download Excel file"}
                        </button>
                    </div>

                    {error ? (
                        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
